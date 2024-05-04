package com.school.management.schoolmanagment.database;

import com.school.management.schoolmanagment.model.*;
import com.school.management.schoolmanagment.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.*;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    private GradeRepository gradeRepository;
    @Autowired
    private NotificationRepository notificationRepository;
    @Autowired
    private PersonalInfoRepository personalInfoRepository;
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private SchoolClassRepository schoolClassRepository;
    @Autowired
    private SubjectRepository subjectRepository;
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private TeacherSubjectInClassRepository teacherSubjectInClassRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        seedGrades();
        seedRoles();
        seedUsersPersonalInfo();
        seedSchoolClasses();
        seedSubjects();
        seedNotifications();
        seedReports();
        //seedTasks();
        seedTeacherSubjectsInClasses();
        seedTasks();
    }

    private void seedSchoolClasses() {
        schoolClassRepository.save(new SchoolClass("5A"));
        schoolClassRepository.save(new SchoolClass("8D"));
    }

    private void seedSubjects() {
        Subject pe = new Subject("PE");
        subjectRepository.save(pe);
        SchoolClass s1 = schoolClassRepository.findByName("5A");
        pe.addClass(s1);
        subjectRepository.save(pe);

        Subject religion = new Subject("Religion");
        subjectRepository.save(religion);
        SchoolClass s2 = schoolClassRepository.findByName("8D");
        pe.addClass(s2);
        subjectRepository.save(religion);
        schoolClassRepository.save(s2);
        schoolClassRepository.save(s1);
    }


    private void seedGrades() {
        gradeRepository.save(new Grade(2.0, Instant.now()));
        gradeRepository.save(new Grade(3.0, Instant.now()));
        gradeRepository.save(new Grade(4.5, Instant.now()));
        gradeRepository.save(new Grade(4.0, Instant.now()));
        gradeRepository.save(new Grade(4.0, Instant.now()));
    }


    private void seedRoles() {
        roleRepository.save(new Role("Student"));
        roleRepository.save(new Role("Teacher"));
        roleRepository.save(new Role("Administrator"));
    }

    private void seedUsersPersonalInfo() {
        PersonalInfo pi = new PersonalInfo("John", "Doe", "12345678901", "1234567890", new Date(), "USA", "New York", "Main St", "42", "24");
        personalInfoRepository.save(pi);
        User user = new User("john.doe@example.com", "password123", pi, roleRepository.findByName("Student"), null);
        userRepository.save(user);
    }


    private void seedNotifications() {
        Optional<User> byEmail = userRepository.findByEmail("john.doe@example.com");
        User user = byEmail.get();
        notificationRepository.save(new Notification("Welcome to our platform", Instant.now(), user, false));
    }

    private void seedReports() {
        Optional<User> optionalUsers = userRepository.findByEmail("john.doe@example.com");
        User user = optionalUsers.get();
        reportRepository.save(new Report(ReportType.FIRST_TYPE, Instant.now(), "Sample Report", user, null));
    }

    private void seedTasks() {
        User taskCreator = userRepository.findById(1L).get();
        Task task = new Task("Rozprawka o misce", "Wykonac rozprawke na temat miski w bojlerze", LocalDateTime.now(), TaskStatus.FIRST_STATUS, taskCreator, null, Instant.now(), null, null, null, subjectRepository.findById(1L).get());
        taskRepository.save(task);
        User user = userRepository.findById(1L).get();
        user.addTask(task);
        userRepository.save(user);

    }


    private void seedTeacherSubjectsInClasses() {
        Optional<User> byEmail = userRepository.findByEmail("john.doe@example.com");
        User teacher = byEmail.get();
        Subject subject = subjectRepository.findByName("Religion");
        SchoolClass class1 = schoolClassRepository.findByName("5A");
        TeacherSubjectInClass tsic = new TeacherSubjectInClass(teacher, subject, class1);
        teacherSubjectInClassRepository.save(tsic);
    }
}
