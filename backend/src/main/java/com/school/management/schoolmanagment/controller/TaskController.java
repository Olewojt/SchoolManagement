package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.GradeInfoDTO;
import com.school.management.schoolmanagment.dto.SubjectGradesDTO;
import com.school.management.schoolmanagment.dto.TaskDTO;
import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
