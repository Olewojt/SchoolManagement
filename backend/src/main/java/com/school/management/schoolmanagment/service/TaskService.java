package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.GradeInfoDTO;
import com.school.management.schoolmanagment.mapper.GradeInfoDTOMapper;
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
    private final GradeInfoDTOMapper gradeInfoDTOMapper;

    public List<Task> findTasksAssignedToUser(Long userId) {
        boolean isUserExists = userRepository.existsById(userId);

        if (isUserExists) {
            return taskRepository.findTasksAssignedToUser(userId);
        }

        throw new RuntimeException("User with ID does not exist!");
    }

    public List<GradeInfoDTO> getGradesForUser(Long userId) {
        boolean isUserExists = userRepository.existsById(userId);

        if (isUserExists) {
            List<Task> tasks = taskRepository.findGradesForUser(userId);
            return gradeInfoDTOMapper.mapToGradeInfoDTO(tasks);
        }

        throw new RuntimeException("User with ID does not exist!");
    }
}
