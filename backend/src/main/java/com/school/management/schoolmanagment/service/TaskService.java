package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.GradeInfoDTO;
import com.school.management.schoolmanagment.dto.SubjectGradesDTO;
import com.school.management.schoolmanagment.mapper.GradeInfoDTOMapper;
import com.school.management.schoolmanagment.mapper.SubjectGradesDTOMapper;
import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.repository.TaskRepository;
import com.school.management.schoolmanagment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final GradeInfoDTOMapper gradeInfoDTOMapper;

    public List<Task> findTasksAssignedToUser(Long userId) {
        validateUserAccess(userId);

        return taskRepository.findTasksAssignedToUser(userId);
    }


    public List<GradeInfoDTO> getGradesForUser(Long userId) {
        validateUserAccess(userId);

        List<Task> tasks = taskRepository.findGradesForUser(userId);
        return gradeInfoDTOMapper.mapToGradeInfoDTO(tasks);
    }

    public List<SubjectGradesDTO> getStudentSubjectGrades(Long userId) {
        //to nauczyciel pobiera a nie sam student dla siebie
        // validateUserAccess(userId);

        List<Task> tasks = taskRepository.findGradesForUser(userId);
        return SubjectGradesDTOMapper.mapToSubjectGradesDTO(tasks);
    }

    private void validateUserAccess(Long userId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();
        userRepository.findById(userId).ifPresentOrElse(user -> {
            if (!user.getEmail().equals(currentUsername)) {
                throw new AccessDeniedException("Unauthorized access");
            }
        }, () -> {
            throw new AccessDeniedException("Unauthorized access");
        });
    }
}
