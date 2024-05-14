package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.model.Role;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.RoleRepository;
import com.school.management.schoolmanagment.repository.UserRepository;
import javax.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public void setUserRole(String email, String roleName) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User With Given Email Not Found!"));
        Role role = roleRepository.findByName(roleName)
                .orElseThrow(() -> new EntityNotFoundException("Role With Given Name Not Found!"));
        user.setRole(role);
    }
}
