package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.TeacherSubjectClassStudentsDTO;
import com.school.management.schoolmanagment.dto.TeacherSubjectInClassDTO;
import com.school.management.schoolmanagment.model.TeacherSubjectInClass;
import com.school.management.schoolmanagment.service.TeacherSubjectInClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tsic")
public class TeacherSubjectInClassController {

    private final TeacherSubjectInClassService teacherSubjectInClassService;

    @GetMapping("/{teacherId}")
    public ResponseEntity<List<TeacherSubjectClassStudentsDTO>> findAllByTeacherId(@PathVariable Long teacherId) {
        return ResponseEntity.ok(teacherSubjectInClassService
                .findAllByTeacherId(teacherId));
    }
}
