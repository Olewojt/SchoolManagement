package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.GradeDTO;
import com.school.management.schoolmanagment.dto.SubjectGradesDTO;
import com.school.management.schoolmanagment.model.SchoolClass;
import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.SchoolClassRepository;
import com.school.management.schoolmanagment.repository.SubjectRepository;
import com.school.management.schoolmanagment.repository.TeacherSubjectInClassRepository;
import com.school.management.schoolmanagment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.example.*;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDate;
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

    public String subjectReportForTeacher(String className, List<String> subjectNames) {
        try {
            validateTeacherBelongsToClassAndSubject(className, subjectNames);
            SchoolClass schoolClass = schoolClassRepository.findByName(className);

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String currentUsername = authentication.getName();
            User teacher = userRepository.findByEmail(currentUsername).orElseThrow();

            Set<User> students = schoolClass.getStudents();

            List<ClassGrades> classGradesList = new ArrayList<>();

            for (String subjectName :
                    subjectNames) {

                Subject subject = subjectRepository.findByName(subjectName);
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

                ClassGrades classGrades = new ClassGrades(subjectName, subjectGradesMap);
                classGradesList.add(classGrades);

            }

            SubjectReportForTeacher subjectReport = new SubjectReportForTeacher(teacher.getPersonalInfo().getFirstName(),
                    teacher.getPersonalInfo().getLastName(), className, classGradesList);
            subjectReport.generate();
            return "Reports generated successfully";
        } catch (IOException e) {
            return "Error generating reports: " + e.getMessage();
        }
    }

    public String teacherReport(Long teacherId, LocalDate startDate, LocalDate endDate) {
       //TODO: zrobic aby dla poszczegolnych klas bylo sprawdzanie danego przedmiotu
        try {
            User teacher = userRepository.findById(teacherId).orElseThrow();
            Map<String, SubjectTaskInfo> subjectTaskInfoMap = new HashMap<>();

            List<Subject> subjects = teacherSubjectInClassRepository.findSubjectsByTeacherId(teacherId);
            for (Subject subject : subjects) {
                int totalTasks = taskService.countTasksForTeacherAndSubject(teacherId, subject.getId(), startDate, endDate);
                int gradedTasks = taskService.countGradedTasksForTeacherAndSubject(teacherId, subject.getId(), startDate, endDate);
                subjectTaskInfoMap.put(subject.getName()+" 8C", new SubjectTaskInfo(totalTasks, gradedTasks));
            }

            TeacherReport teacherReport = new TeacherReport(teacher.getPersonalInfo().getFirstName(),
                    teacher.getPersonalInfo().getLastName(), startDate, endDate, subjectTaskInfoMap);
            teacherReport.generate();
            return "Teacher report generated successfully";
        } catch (IOException e) {
            return "Error generating teacher report: " + e.getMessage();
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

    private void validateTeacherBelongsToClassAndSubject(String className, List<String> subjectNames) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();

        User teacher = userRepository.findByEmail(currentUsername)
                .orElseThrow(() -> new AccessDeniedException("Unauthorized access"));

        SchoolClass schoolClass = schoolClassRepository.findByName(className);
        for (String subjectName:
             subjectNames) {
            Subject subject = subjectRepository.findByName(subjectName);
            boolean teachesClassAndSubject = teacherSubjectInClassRepository.existsByIdTeacherIdAndIdSubjectIdAndIdClassId(teacher.getId(),
                    subject.getId(), schoolClass.getId());

            if (!teachesClassAndSubject) {
                throw new AccessDeniedException("Unauthorized access");
            }
        }


    }
}
