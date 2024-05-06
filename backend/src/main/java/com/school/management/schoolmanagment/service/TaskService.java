package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.GradeInfoDTO;
import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.repository.TaskRepository;
import com.school.management.schoolmanagment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public List<Task> findTasksAssignedToUser(Long userId) {
        boolean isUserExists = userRepository.existsById(userId);

        if (isUserExists) {
            return taskRepository.findTasksAssignedToUser(userId);
        }

        throw new RuntimeException("User with ID does not exist!");
    }

    public List<GradeInfoDTO> getGradesForUser(Long userId) {
        return taskRepository.findGradesForUser(userId);
    }
}
