package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.GradeInfoDTO;
import com.school.management.schoolmanagment.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@Transactional
public class TaskServiceTest {

    @Autowired
    private TaskService taskService;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testGetGradesForExistingUser() {
        Long existingUserId = 1L;

        assertTrue(userRepository.existsById(existingUserId), "User should exist in the database");

        List<GradeInfoDTO> grades = taskService.getGradesForUser(existingUserId);

        assertFalse(grades.isEmpty(), "Grades list should not be empty");
        grades.forEach(grade -> System.out.println("Ocena: " + grade.getGrade() + ", Przedmiot: " + grade.getSubjectName()));
    }
}
