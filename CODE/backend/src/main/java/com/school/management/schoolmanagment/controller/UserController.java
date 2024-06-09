package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.*;
import com.school.management.schoolmanagment.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    @GetMapping("/users/personalInfo/{userId}")
    public ResponseEntity<StudentInfoDTO> getUserPersonalInfo(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getUserPersonalInfo(userId));
    }

    @PutMapping("/users/personalInfo/{userId}")
    public ResponseEntity<UserInfoDTO> updateUserPersonalInfo(@PathVariable Long userId,
                                                              @RequestBody PersonalInfoDTO personalInfoDTO) {
        return ResponseEntity.ok(userService.updateUserPersonalInfo(userId, personalInfoDTO));
    }

    @PostMapping("/users")
    public ResponseEntity<UserInfoDTO> createNewUser(@RequestBody UserInDTO userInDTO, @RequestParam String roleName) {
        return ResponseEntity.ok(userService.createNewUser(userInDTO, roleName));
    }

    @DeleteMapping("/users/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/parents")
    public ResponseEntity<List<ParentDTO>> getAllParentsWithChildren() {
        return ResponseEntity.ok(userService.getAllParentsWithChildren());
    }

    @GetMapping("/parents/{parentId}/children")
    public ResponseEntity<List<Long>> getParentChildrenIds(@PathVariable Long parentId) {
        return ResponseEntity.ok(userService.getParentChildrenIds(parentId));
    }

    @PutMapping("/parents/{parentId}/children")
    public ResponseEntity<Void> setParentChildren(@PathVariable Long parentId, @RequestBody List<Long> childrenIds) {
        userService.setParentChildren(parentId, childrenIds);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("parents/{parentId}/children")
    public ResponseEntity<Void> removeParentChildren(@PathVariable Long parentId, @RequestBody List<Long> childrenIds) {
        userService.removeParentChildren(parentId, childrenIds);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/teachers/classes/subjects/{teacherId}")
    public ResponseEntity<List<TeacherSubjectInClassDTO>> findTeacherSubjectsInGroup(@PathVariable Long teacherId) {
        return ResponseEntity.ok(userService.findTeacherSubjectsInGroup(teacherId));
    }

    @GetMapping("/teachers")
    public ResponseEntity<List<UserDTO>> getBasicTeacherPersonalData() {
        return ResponseEntity.ok(userService.getBasicTeacherPersonalData());
    }

    @GetMapping("/students")
    public ResponseEntity<List<StudentInfoDTO>> getAllStudents() {
        return ResponseEntity.ok(userService.getAllStudents());
    }

    @PutMapping("users/{userId}/classes")
    public ResponseEntity<UserWithClassDTO> updateUserClass(@PathVariable Long userId, @RequestParam String className) {
        return ResponseEntity.ok(userService.updateUserClass(userId, className));
    }
}
