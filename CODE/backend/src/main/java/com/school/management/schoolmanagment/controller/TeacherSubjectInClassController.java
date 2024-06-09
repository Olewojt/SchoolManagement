package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.TeacherSubjectClassStudentsDTO;
import com.school.management.schoolmanagment.dto.TeacherSubjectsInfoDTO;
import com.school.management.schoolmanagment.service.TeacherSubjectInClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tsic")
public class TeacherSubjectInClassController {

    private final TeacherSubjectInClassService teacherSubjectInClassService;

    @GetMapping
    public ResponseEntity<List<TeacherSubjectsInfoDTO>> getAllTeachersWithClassesAndSubjects() {
        return ResponseEntity.ok(teacherSubjectInClassService.getAllTeachersWithClassesAndSubjects());
    }

    @PutMapping("/{className}")
    public ResponseEntity<TeacherSubjectsInfoDTO> addTeacherWithSubjectToClass(@PathVariable String className,
                                                                               @RequestParam String subjectName,
                                                                               @RequestParam Long teacherId) {
        return ResponseEntity.ok(teacherSubjectInClassService.addTeacherWithSubjectToClass(className,
                subjectName, teacherId));
    }

    @GetMapping("/{teacherId}")
    public ResponseEntity<List<TeacherSubjectClassStudentsDTO>> findAllByTeacherId(@PathVariable Long teacherId) {
        return ResponseEntity.ok(teacherSubjectInClassService
                .findAllByTeacherId(teacherId));
    }
}
