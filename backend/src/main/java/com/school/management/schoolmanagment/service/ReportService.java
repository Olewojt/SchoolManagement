package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.GradeDTO;
import com.school.management.schoolmanagment.dto.SubjectGradesDTO;
import com.school.management.schoolmanagment.model.SchoolClass;
import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.model.TeacherSubjectInClass;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.SchoolClassRepository;
import com.school.management.schoolmanagment.repository.SubjectRepository;
import com.school.management.schoolmanagment.repository.TeacherSubjectInClassRepository;
import com.school.management.schoolmanagment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.example.AverageGradesReport;
import org.example.SubjectReportForTeacher;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final SubjectRepository subjectRepository;
    private final SchoolClassRepository schoolClassRepository;
    private final UserRepository userRepository;
    private final TeacherSubjectInClassRepository teacherSubjectInClassRepository;

    private final TaskService taskService;

    public String avgGradesReportForStudent(Long userId) {
        try {
            List<SubjectGradesDTO> studentSubjectGrades = taskService.getStudentSubjectGrades(userId);
            Map<String, List<Integer>> subjectGradesMap = mapSubjectGrades(studentSubjectGrades);
            User user = userRepository.findById(userId).orElseThrow();

            AverageGradesReport averageGradesReport = new AverageGradesReport(user.getPersonalInfo().getFirstName(),
                    user.getPersonalInfo().getLastName(), subjectGradesMap, user.getSchoolClass().getName());
            averageGradesReport.generate();
            return "Reports generated successfully";
        } catch (IOException e) {
            return "Error generating reports: " + e.getMessage();
        }
    }

    public String subjectReportForTeacher(Long classId, Long subjectId) {
        try {
            validateTeacherBelongsToClassAndSubject(classId, subjectId);
            Subject subject = subjectRepository.findById(subjectId).orElseThrow();
            SchoolClass schoolClass = schoolClassRepository.findById(classId).orElseThrow();

            //tu sie zmieni ze bedzie id nauczyciela podawane w sciezce chyba
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String currentUsername = authentication.getName();
            User teacher = userRepository.findByEmail(currentUsername).orElseThrow();

            Set<User> students = schoolClass.getStudents();

            Map<String, List<Integer>> subjectGradesMap = new HashMap<>();
            for (User student : students) {
                List<SubjectGradesDTO> studentSubjectGrades = taskService.getStudentSubjectGrades(student.getId());
                for (SubjectGradesDTO subjectGrades : studentSubjectGrades) {
                    if (subjectGrades.subjectName().equals(subject.getName())) {
                        List<Integer> grades = subjectGrades.grades().stream()
                                .map(GradeDTO::grade)
                                .collect(Collectors.toList());
                        subjectGradesMap.put(student.getPersonalInfo().getFirstName() + " " +
                                student.getPersonalInfo().getLastName(), grades);
                    }
                }
            }

            SubjectReportForTeacher subjectReport = new SubjectReportForTeacher(teacher.getPersonalInfo().getFirstName(),
                    teacher.getPersonalInfo().getLastName(), subject.getName(), schoolClass.getName(), subjectGradesMap);
            subjectReport.generate();
            return "Reports generated successfully";
        } catch (IOException e) {
            return "Error generating reports: " + e.getMessage();
        }
    }

    private Map<String, List<Integer>> mapSubjectGrades(List<SubjectGradesDTO> gradesList) {
        Map<String, List<Integer>> subjectGradesMap = new HashMap<>();

        for (SubjectGradesDTO subjectGrades : gradesList) {
            List<Integer> grades = subjectGrades.grades().stream()
                    .map(GradeDTO::grade)
                    .collect(Collectors.toList());
            subjectGradesMap.put(subjectGrades.subjectName(), grades);
        }

        return subjectGradesMap;
    }

    private void validateTeacherBelongsToClassAndSubject(Long classId, Long subjectId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();

        User teacher = userRepository.findByEmail(currentUsername)
                .orElseThrow(() -> new AccessDeniedException("Unauthorized access"));

        boolean teachesClassAndSubject = teacherSubjectInClassRepository.existsByIdTeacherIdAndIdSubjectIdAndIdClassId(teacher.getId(),
                subjectId, classId);

        if (!teachesClassAndSubject) {
            throw new AccessDeniedException("Unauthorized access");
        }
    }



}
