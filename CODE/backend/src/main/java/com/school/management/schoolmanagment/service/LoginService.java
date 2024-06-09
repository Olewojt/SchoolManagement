package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.config.JWTUtils;
import com.school.management.schoolmanagment.dto.LoginRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class LoginService {

    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService customUserDetailsService;
    private final JWTUtils jwtUtils;

    public ResponseEntity<String> login(LoginRequestDTO loginRequestDTO) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequestDTO.getEmail(), loginRequestDTO.getPassword()));
        final UserDetails userDetails = customUserDetailsService.loadUserByUsername(loginRequestDTO.getEmail());
        if (userDetails != null) {
            return ResponseEntity.ok(jwtUtils.generateToken(userDetails));
        }
        return ResponseEntity.status(400).body("Failed To Login!");
    }
}
