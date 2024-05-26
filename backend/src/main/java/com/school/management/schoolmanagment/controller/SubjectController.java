package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.SubjectDTO;
import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.repository.SubjectRepository;
import com.school.management.schoolmanagment.service.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/subjects")
public class SubjectController {

    private final SubjectService subjectService;

    @GetMapping("/{name}")
    public ResponseEntity<SubjectDTO> findBySubjectName(@PathVariable String name) {
        return ResponseEntity.ok(subjectService.findBySubjectName(name));
    }
}
