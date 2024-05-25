package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

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
