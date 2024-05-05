package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    @GetMapping("/assigned/{userId}")
    public List<Task> findTasksAssignedToUser(@PathVariable Long userId) {
        return taskService.findTasksAssignedToUser(userId);
    }
}
