package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.SubjectDTO;
import com.school.management.schoolmanagment.dto.SubjectWithClassesDTO;
import com.school.management.schoolmanagment.service.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/subjects")
public class SubjectController {

    private final SubjectService subjectService;

    @GetMapping("/{name}")
    public ResponseEntity<SubjectDTO> findBySubjectName(@PathVariable String name) {
        return ResponseEntity.ok(subjectService.findBySubjectName(name));
    }

    @PutMapping("/{subjectName}")
    public SubjectWithClassesDTO addClassToSubject(@PathVariable String subjectName,
                                                   @RequestParam String className) {
        return subjectService.addClassToSubject(subjectName, className);
    }
}
