package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.UserInDTO;
import com.school.management.schoolmanagment.exception.ExistingEntityException;
import com.school.management.schoolmanagment.mapper.UserInDTOMapper;
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

    private final UserInDTOMapper userInDTOMapper;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final UserService userService;

    public void registerUser(UserInDTO userInDto) {
        if (userRepository.findByEmail(userInDto.getEmail()).isPresent()) {
            throw new ExistingEntityException("User With Given Email Already Exists!");
        } else  {
            User user = userInDTOMapper.mapToUser(userInDto);
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            userService.setUserRole(user.getEmail(), "Student");
        }
    }
}
