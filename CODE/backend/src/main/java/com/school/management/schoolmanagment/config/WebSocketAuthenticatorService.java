package com.school.management.schoolmanagment.config;

import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Component
public class WebSocketAuthenticatorService {

    @Autowired
    private UserRepository userRepository;

    // This method MUST return a UsernamePasswordAuthenticationToken instance, the spring security chain is testing it with 'instanceof' later on. So don't use a subclass of it or any other class
    public UsernamePasswordAuthenticationToken getAuthenticatedOrFail(final String  username, final String password) throws AuthenticationException {
        if (username == null || username.trim().isEmpty()) {
            System.out.println("ESSUNIA");
//            return new UsernamePasswordAuthenticationToken("user", "user", Collections.singleton((GrantedAuthority) () -> "User"));
//            throw new AuthenticationCredentialsNotFoundException("Username was null or empty.");
        }
        if (password == null || password.trim().isEmpty()) {
            System.out.println("ESSUNIA2");
            throw new AuthenticationCredentialsNotFoundException("Password was null or empty.");
        }


        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new BadCredentialsException("Bad credentials for user " + username));

        // null credentials, we do not pass the password along
        return new UsernamePasswordAuthenticationToken(
                username,
                null,
                Collections.singleton((GrantedAuthority) () -> user.getRole().getName()) // MUST provide at least one role
        );
    }
}
