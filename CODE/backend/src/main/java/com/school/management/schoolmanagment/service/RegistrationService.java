package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.RegistrationRequestDTO;
import com.school.management.schoolmanagment.exception.ExistingEntityException;
import com.school.management.schoolmanagment.mapper.RegistrationRequestDTOMapper;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class RegistrationService {

    private final RegistrationRequestDTOMapper registrationRequestDTOMapper;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final UserService userService;

    public void registerUser(RegistrationRequestDTO registrationRequestDto) {
        if (userRepository.findByEmail(registrationRequestDto.getEmail()).isPresent()) {
            throw new ExistingEntityException("User With Given Email Already Exists!");
        }
        User user = registrationRequestDTOMapper.mapToUser(registrationRequestDto);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        userService.setUserRole(user.getEmail(), "Student");
    }
}
