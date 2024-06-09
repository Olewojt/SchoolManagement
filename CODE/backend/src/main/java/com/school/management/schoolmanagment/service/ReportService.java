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
import org.example.*;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
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
    private final NotificationService notificationService;

    public String avgGradesReportForStudent(Long userId, List<String> subjectNames) {
        try {
            List<SubjectGradesDTO> studentSubjectGrades = taskService.getStudentSubjectGrades(userId);
            List<SubjectGradesDTO> filteredGrades = studentSubjectGrades.stream()
                    .filter(subject -> subjectNames.contains(subject.subjectName()))
                    .collect(Collectors.toList());
            Map<String, List<Integer>> subjectGradesMap = mapSubjectGrades(filteredGrades);
            User user = userRepository.findById(userId).orElseThrow();

            AverageGradesReport averageGradesReport = new AverageGradesReport(user.getPersonalInfo().getFirstName(),
                    user.getPersonalInfo().getLastName(), subjectGradesMap, user.getSchoolClass().getName());
            averageGradesReport.generate();

            String content = "Reports generated successfully";

            notificationService.sendNotificationToUser(content);

            return content;
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

            String content = "Reports generated successfully";

            notificationService.sendNotificationToUser(content);

            return content;
        } catch (IOException e) {
            return "Error generating reports: " + e.getMessage();
        }
    }

    public String teacherReport(Long teacherId, LocalDate startDate, LocalDate endDate) {
        try {
            User teacher = userRepository.findById(teacherId).orElseThrow();
            Map<String, SubjectTaskInfo> subjectTaskInfoMap = new HashMap<>();

            List<TeacherSubjectInClass> teacherSubjectInClassList = teacherSubjectInClassRepository.findAllByTeacherId(teacherId);

            Instant startInstant = startDate.atStartOfDay(ZoneId.systemDefault()).minusDays(1).toInstant();
            Instant endInstant = endDate.atStartOfDay(ZoneId.systemDefault()).plusDays(1).toInstant();

            for (TeacherSubjectInClass teacherSubjectInClass : teacherSubjectInClassList) {
                String className = teacherSubjectInClass.getSchoolClass().getName();
                String subjectName = teacherSubjectInClass.getSubject().getName();
                String key = className + " - " + subjectName;

                int totalTasks = taskService.countTasksForTeacherClassAndSubject(teacherId, teacherSubjectInClass.getSchoolClass().getId(),
                        teacherSubjectInClass.getSubject().getId(), startInstant, endInstant);
                int gradedTasks = taskService.countGradedTasksForTeacherClassAndSubject(teacherId, teacherSubjectInClass.getSchoolClass().getId(),
                        teacherSubjectInClass.getSubject().getId(), startInstant, endInstant);

                subjectTaskInfoMap.put(key, new SubjectTaskInfo(totalTasks, gradedTasks));
            }

            TeacherReport teacherReport = new TeacherReport(teacher.getPersonalInfo().getFirstName(),
                    teacher.getPersonalInfo().getLastName(), startDate, endDate, subjectTaskInfoMap);
            teacherReport.generate();
            String content = "Reports generated successfully";

            notificationService.sendNotificationToUser(content);

            return content;
        } catch (IOException e) {
            return "Error generating teacher report: " + e.getMessage();
        }
    }

    public String adminReport() {
        try {
            List<SchoolClass> schoolClassList = schoolClassRepository.findAll();
            Map<String, ClassInfo> classInfoMap = new HashMap<>();
            for (SchoolClass schoolClass :
                    schoolClassList) {
                List<User> cityMembers = userRepository.findCityMembersBySchoolClassId(schoolClass.getId());
                List<User> totalMember = userRepository.findStudentsBySchoolClassId(schoolClass.getId());
                classInfoMap.put(schoolClass.getName(), new ClassInfo(totalMember.size() - cityMembers.size(), cityMembers.size()));
            }
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String currentUsername = authentication.getName();
            User admin = userRepository.findByEmail(currentUsername).orElseThrow();
            AdminReport adminReport = new AdminReport(admin.getPersonalInfo().getFirstName(), admin.getPersonalInfo().getLastName(), classInfoMap);
            adminReport.generate();
            String content = "Reports generated successfully";

            notificationService.sendNotificationToUser(content);

            return content;
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
        for (String subjectName : subjectNames) {
            Subject subject = subjectRepository.findByName(subjectName);
            boolean teachesClassAndSubject = teacherSubjectInClassRepository.existsByIdTeacherIdAndIdSubjectIdAndIdClassId(teacher.getId(),
                    subject.getId(), schoolClass.getId());

            if (!teachesClassAndSubject) {
                throw new AccessDeniedException("Unauthorized access");
            }
        }
    }
}
