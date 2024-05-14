package com.school.management.schoolmanagment.controller;

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
}
