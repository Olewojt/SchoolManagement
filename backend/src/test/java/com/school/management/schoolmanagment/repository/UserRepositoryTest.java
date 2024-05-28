package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.PersonalInfo;
import com.school.management.schoolmanagment.model.Role;
import com.school.management.schoolmanagment.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

@DataJpaTest
@AutoConfigureTestDatabase(replace = NONE)
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PersonalInfoRepository personalInfoRepository;
    @Autowired
    private RoleRepository roleRepository;

    @BeforeEach
    void setUp() {
        Role studentRole = roleRepository.save(new Role("Student"));

        PersonalInfo pi = new PersonalInfo("John", "Doe", "12345678901", "1234567890",
                LocalDate.now(), "USA", "New York", "Main St", "42", "24",true);
        personalInfoRepository.save(pi);

        User user = new User("john.doe@example.com", "password123", pi,
                studentRole, null);
        userRepository.save(user);
    }

    @Test
    void itShouldFindUserWithEmailAndPassword() {
        Boolean foundUser = userRepository.existsByEmailAndPassword("john.doe@example.com",
                "password123");

        assertTrue(foundUser);
    }

    @Test
    void itShouldNotFindUserWithEmailAndPassword() {
        Boolean foundUser = userRepository.existsByEmailAndPassword("not-existing@mail.com",
                "notExists123");

        assertFalse(foundUser);
    }

    @Test
    void itShouldFindUserWithEmail() {
        Optional<User> foundUser = userRepository.findByEmail("john.doe@example.com");

        assertThat(foundUser).isPresent();
        assertThat(foundUser).isNotEmpty();
        assertThat(foundUser).isInstanceOf(Optional.class);
        assertEquals("john.doe@example.com", foundUser.get().getEmail());
    }

    @Test
    void itShouldNotFindUserWithEmail() {
        Optional<User> foundUser = userRepository.findByEmail("notExisting@mail.com");

        assertNotNull(foundUser);
        assertThat(foundUser).isNotPresent();
        assertThat(foundUser).isEmpty();
        assertThat(foundUser).isInstanceOf(Optional.class);
    }
}
