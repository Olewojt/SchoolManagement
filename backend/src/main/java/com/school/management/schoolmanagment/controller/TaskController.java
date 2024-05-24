package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.*;
import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    @GetMapping("/assigned/{userId}")
    public ResponseEntity<List<Task>> findTasksAssignedToUser(@PathVariable Long userId) {
        return ResponseEntity.ok(taskService.findTasksAssignedToUser(userId));
    }

    @GetMapping("/grades/{userId}")
    public List<GradeInfoDTO> getGradesForCurrentUser(@PathVariable Long userId) {
        return taskService.getGradesForUser(userId);
    }

    @GetMapping("/subjects/grades/{userId}")
    public ResponseEntity<List<SubjectGradesDTO>> getStudentSubjectGrades(@PathVariable Long userId) {
        return ResponseEntity.ok(taskService.getStudentSubjectGrades(userId));
    }

    @GetMapping("/assigned/info/{userId}")
    public ResponseEntity<List<TaskDTO>> getTasksInfoAssignedToUser(@PathVariable Long userId) {
        return ResponseEntity.ok(taskService.getTasksInfoAssignedToUser(userId));
    }

    @GetMapping("/{taskId}")
    public ResponseEntity<TaskDTO> findTaskById(@PathVariable Long taskId) {
        return ResponseEntity.ok(taskService.findTaskById(taskId));
    }

    @PostMapping()
    public ResponseEntity<Void> addTaskForStudents(@RequestBody TaskCreationDTO taskCreationDTO) {
        taskService.createTaskForStudents(taskCreationDTO);
        return ResponseEntity.created(URI.create("/api/v1/tasks/created")).build();
    }

    @PatchMapping("/{taskId}")
    public ResponseEntity<Void> gradeTask(@PathVariable Long taskId,
                                            @RequestBody GradeTaskDTO gradeTaskDTO) {
        taskService.gradeTask(taskId, gradeTaskDTO);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/status/{taskId}")
    public ResponseEntity<Void> markTaskAsDone(@PathVariable Long taskId) {
        taskService.markTaskAsDone(taskId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/created/{teacherId}")
    public ResponseEntity<List<TaskDTO>> findTasksCreatedByTeacher(@PathVariable Long teacherId) {
        return ResponseEntity.ok(taskService.findTasksCreatedByTeacher(teacherId));
    }
}
