package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.*;
import com.school.management.schoolmanagment.mapper.GradeInfoDTOMapper;
import com.school.management.schoolmanagment.mapper.SubjectGradesDTOMapper;
import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.SubjectRepository;
import com.school.management.schoolmanagment.repository.TaskRepository;
import com.school.management.schoolmanagment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import static com.school.management.schoolmanagment.mapper.TaskDTOMapper.mapToTaskDTO;
import static com.school.management.schoolmanagment.model.TaskStatus.*;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final GradeInfoDTOMapper gradeInfoDTOMapper;
    private final SubjectRepository subjectRepository;

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

    public int countTasksForTeacherAndSubject(Long teacherId, Long id, LocalDate startDate, LocalDate endDate) {
        Instant startInstant = startDate.atStartOfDay(ZoneId.systemDefault()).toInstant();
        Instant endInstant = endDate.atStartOfDay(ZoneId.systemDefault()).toInstant();
        return taskRepository.countTasksForTeacherAndSubject(teacherId, id, startInstant, endInstant);
    }

    public int countGradedTasksForTeacherAndSubject(Long teacherId, Long id, LocalDate startDate, LocalDate endDate) {
        Instant startInstant = startDate.atStartOfDay(ZoneId.systemDefault()).toInstant();
        Instant endInstant = endDate.atStartOfDay(ZoneId.systemDefault()).toInstant();
        return taskRepository.countGradedTasksForTeacherAndSubject(teacherId, id, startInstant, endInstant);
    }

    public List<TaskDTO> getTasksInfoAssignedToUser(Long userId) {
        List<Task> tasksAssignedToUser = findTasksAssignedToUser(userId);

        return mapToTaskDTO(tasksAssignedToUser);
    }

    @Transactional
    public void createTaskForStudents(TaskCreationDTO taskCreateDTO) {
        Long taskCreatorId = taskCreateDTO.taskCreatorId();
        User user = userRepository.findById(taskCreatorId)
                .orElseThrow();

        Subject subject = subjectRepository.findByName(taskCreateDTO.subjectName());

        taskCreateDTO.taskMembersGroups().forEach(groupOfMembers -> {
            Task task = new Task(taskCreateDTO.title(), taskCreateDTO.description(),
                    taskCreateDTO.deadline(), user, subject);

            groupOfMembers.forEach(member -> {
                User foundMember = userRepository.findById(member.userId())
                        .orElseThrow();
                if (Objects.equals(foundMember.getSchoolClass().getName(), taskCreateDTO.schoolClassName())) {
                    foundMember.addTask(task);
                    userRepository.save(foundMember);
                }
            });

            taskRepository.save(task);
        });
    }

    public TaskDTO findTaskById(Long taskId) {
        return mapToTaskDTO(taskRepository.findById(taskId).orElseThrow());
    }

    public void gradeTask(Long taskId, GradeTaskDTO gradeTaskDTO) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow();

        task.setGrade(gradeTaskDTO.grade());
        task.setGradedAt(new Date());
        task.setFeedback(gradeTaskDTO.feedback());
        task.setStatus(GRADED);

        taskRepository.save(task);
    }

    public void markTaskAsDone(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow();

        task.setStatus(DONE);
        taskRepository.save(task);
    }

    public void markTaskAsToDo(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow();

        task.setStatus(TO_DO);
        taskRepository.save(task);
    }

    public List<TaskDTO> findTasksCreatedByTeacher(Long teacherId) {
        validateUserAccess(teacherId);

        User teacher = userRepository.findById(teacherId)
                .orElseThrow();

        return mapToTaskDTO(taskRepository.findByTaskCreator(teacher));
    }
}
