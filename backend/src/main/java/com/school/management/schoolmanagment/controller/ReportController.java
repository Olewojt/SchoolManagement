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
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import org.example.AverageGradesReport;
import org.example.SubjectReportForTeacher;

import java.io.IOException;
import java.time.LocalDate;
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

    @GetMapping("/subjectReport/{className}")
    public String subjectReportForTeacher(@PathVariable String className, @RequestParam List<String> subjectNames) {
        return reportService.subjectReportForTeacher(className, subjectNames);
    }

    @GetMapping("/teacherReport/{teacherId}")
    public String teacherReportForAdmin(
            @PathVariable Long teacherId,
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        return reportService.teacherReport(teacherId, startDate, endDate);
    }




}
