package com.school.management.schoolmanagment;

import com.school.management.schoolmanagment.model.PersonalInfo;
import com.school.management.schoolmanagment.model.Roles;
import com.school.management.schoolmanagment.model.Users;
import com.school.management.schoolmanagment.repository.PersonalInfoRepository;
import com.school.management.schoolmanagment.repository.RolesRepository;
import com.school.management.schoolmanagment.repository.UsersRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

@DataJpaTest
@AutoConfigureTestDatabase(replace = NONE)
public class UserRepositoryTests {

    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private PersonalInfoRepository personalInfoRepository;
    @Autowired
    private RolesRepository rolesRepository;

    @BeforeEach
    void setUp() {
        rolesRepository.save(new Roles("Student"));
        rolesRepository.save(new Roles("Teacher"));
        rolesRepository.save(new Roles("Administrator"));

        PersonalInfo pi = new PersonalInfo("John", "Doe", "12345678901", "1234567890",
                new Date(), "USA", "New York", "Main St", "42", "24");
        personalInfoRepository.save(pi);

        Users user = new Users("john.doe@example.com", "password123", pi,
                rolesRepository.findByName("Student"), null);
        usersRepository.save(user);
    }

    @Test
    void itShouldFindUserWithEmailAndPassword() {
        Boolean foundUser = usersRepository.existsByEmailAndPassword("john.doe@example.com",
                "password123");

        assertTrue(foundUser);
    }

    @Test
    void itShouldNotFindUserWithEmailAndPassword() {
        Boolean foundUser = usersRepository.existsByEmailAndPassword("not-existing@mail.com",
                "notExists123");

        assertFalse(foundUser);
    }

    @Test
    void itShouldFindUserWithEmail() {
        Optional<Users> foundUser = usersRepository.findByEmail("john.doe@example.com");

        assertNotNull(foundUser);
        assertThat(foundUser).isPresent();
        assertThat(foundUser).isNotEmpty();
        assertThat(foundUser).isInstanceOf(Optional.class);
        assertEquals("john.doe@example.com", foundUser.get().getEmail());
    }

    @Test
    void itShouldNotFindUserWithEmail() {
        Optional<Users> foundUser = usersRepository.findByEmail("notExisting@mail.com");

        assertNotNull(foundUser);
        assertThat(foundUser).isNotPresent();
        assertThat(foundUser).isEmpty();
        assertThat(foundUser).isInstanceOf(Optional.class);
    }
}
