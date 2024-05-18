package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.GradeDTO;
import com.school.management.schoolmanagment.dto.SubjectGradesDTO;
import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.UserRepository;
import com.school.management.schoolmanagment.service.ReportService;
import com.school.management.schoolmanagment.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.example.AverageGradesReport;
import org.example.SubjectReportForTeacher;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/reports")
public class ReportController {

    private final ReportService reportService;

    @GetMapping("/studentReport/{userId}")
    public String avgGradesReportForStudent(@PathVariable Long userId) {
       return reportService.avgGradesReportForStudent(userId);
    }

    @GetMapping("/subjectReport/{classId}/{subjectId}")
    public String subjectReportForTeacher(@PathVariable Long classId, @PathVariable Long subjectId) {
        return reportService.subjectReportForTeacher(classId, subjectId);
    }




}
