package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.PersonalInfoDTO;
import com.school.management.schoolmanagment.dto.TeacherSubjectInClassDTO;
import com.school.management.schoolmanagment.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    @GetMapping("/users/personalInfo/{userId}")
    public ResponseEntity<PersonalInfoDTO> getUserPersonalInfo(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getUserPersonalInfo(userId));
    }

    @GetMapping("/parents/{parentId}/children")
    public ResponseEntity<List<Long>> getParentChildrenIds(@PathVariable Long parentId) {
        return ResponseEntity.ok(userService.getParentChildrenIds(parentId));
    }

    @GetMapping("/teachers/classes/subjects/{teacherId}")
    public ResponseEntity<List<TeacherSubjectInClassDTO>> findTeacherSubjectsInGroup(@PathVariable Long teacherId) {
        return ResponseEntity.ok(userService.findTeacherSubjectsInGroup(teacherId));
    }
}
