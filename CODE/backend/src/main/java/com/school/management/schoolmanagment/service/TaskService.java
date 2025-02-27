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
    private final NotificationService notificationService;

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

    public int countTasksForTeacherClassAndSubject(Long teacherId, Long classId, Long subjectId,
                                                   Instant startDate, Instant endDate) {
        return taskRepository.countTasks(teacherId, classId, subjectId, startDate, endDate);
    }

    public int countGradedTasksForTeacherClassAndSubject(Long teacherId, Long classId, Long subjectId,
                                                         Instant startDate, Instant endDate) {
        return taskRepository.countGradedTasks(teacherId, classId, subjectId, startDate, endDate);
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

            groupOfMembers.forEach(member -> notificationService.sendNotificationToUser(member.userId(),
                    "You have new task: %s".formatted(task.getTitle())));
        });

        notificationService.sendNotificationToUser("Successfully created task!");
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

        notificationService.sendNotificationToUser("You have graded task: %s!".formatted(task.getTitle()));

        task.getUsers()
                .forEach(user -> notificationService.sendNotificationToUser(user.getId(),
                        "Your task was graded, you got %d".formatted(task.getGrade())));
    }

    public void markTaskAsDone(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow();

        task.setStatus(DONE);
        taskRepository.save(task);

        notificationService.sendNotificationToUser(task.getTaskCreator().getId(),
                "You have task: %s to check!".formatted(task.getTitle()));

        task.getUsers()
                .forEach(user -> notificationService.sendNotificationToUser(user.getId(),
                        "Status of task: %s changed to: DONE".formatted(task.getTitle())));
    }

    public void markTaskAsToDo(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow();

        task.setStatus(TO_DO);
        taskRepository.save(task);

        notificationService.sendNotificationToUser(task.getTaskCreator().getId(),
                "Status of task: %s changed to: TODO".formatted(task.getTitle()));

        task.getUsers()
                .forEach(user -> notificationService.sendNotificationToUser(user.getId(),
                        "Status of task: %s changed to: TODO".formatted(task.getTitle())));
    }

    public List<TaskDTO> findTasksCreatedByTeacher(Long teacherId) {
        validateUserAccess(teacherId);

        User teacher = userRepository.findById(teacherId)
                .orElseThrow();

        return mapToTaskDTO(taskRepository.findByTaskCreator(teacher));
    }

    public void removeGradeFromTask(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow();

        task.setGrade(null);
        task.setGradedAt(null);
        task.setStatus(DONE);

        taskRepository.save(task);

        notificationService.sendNotificationToUser("Success removed grade from task %s".formatted(task.getTitle()));

        String title = task.getTitle();
        task.getUsers()
                .forEach(user -> notificationService.sendNotificationToUser(user.getId(),
                        "Your grade from task: %s was removed".formatted(title)));
    }

    public void modifyTaskGrade(Long taskId, Integer newGrade) {
        if (newGrade == null) {
            throw new IllegalArgumentException("Grade can't be null!");
        }

        Task task = taskRepository.findById(taskId)
                .orElseThrow();

        if (task.getGrade() == null) {
            throw new IllegalArgumentException("Can't modify null grade!");
        }

        task.setGrade(newGrade);
        task.setGradedAt(new Date());

        taskRepository.save(task);

        notificationService.sendNotificationToUser("Success modifying grade from task %s".formatted(task.getTitle()));

        String title = task.getTitle();
        task.getUsers()
                .forEach(user -> notificationService.sendNotificationToUser(user.getId(),
                        "Your grade from task: %s was modified to: %d".formatted(title, newGrade)));
    }
}
