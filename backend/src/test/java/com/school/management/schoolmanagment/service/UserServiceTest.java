package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.model.Role;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.RoleRepository;
import com.school.management.schoolmanagment.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private RoleRepository roleRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void itShouldSetUserRole() {
        User user = User.builder()
                .email("ricardo886@onet.pl")
                .build();

        Role role = Role.builder()
                .name("Student")
                .build();

        given(userRepository.findByEmail("ricardo886@onet.pl")).willReturn(Optional.of(user));
        given(roleRepository.findByName("Student")).willReturn(Optional.of(role));

        userService.setUserRole("ricardo886@onet.pl", "Student");

        assertThat(user.getRole()).isEqualTo(role);
    }
}