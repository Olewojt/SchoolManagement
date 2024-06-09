package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.SchoolClassDTO;
import com.school.management.schoolmanagment.dto.SchoolClassWithSubjectsDTO;
import com.school.management.schoolmanagment.service.SchoolClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/classes")
public class SchoolClassController {

    private final SchoolClassService schoolClassService;

    @GetMapping
    public List<SchoolClassDTO> getAllClasses() {
        return schoolClassService.getAllClasses();
    }

    @GetMapping("/subjects")
    public List<SchoolClassWithSubjectsDTO> getAllClassesWithSubjects() {
        return schoolClassService.getAllClassesWithSubjects();
    }
}
