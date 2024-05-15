package com.school.management.schoolmanagment.database;

import com.school.management.schoolmanagment.model.*;
import com.school.management.schoolmanagment.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Optional;

@Component
public class DatabaseSeeder implements CommandLineRunner {

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
    @Transactional
    public void run(String... args) throws Exception {
        seedRoles();
        seedSchoolClasses();
        seedPersonalInfo();
        seedUsers();
        seedSubjects();
        seedTeacherSubjectsInClasses();
        seedTasks();
        seedNotifications();
        seedReports();
    }

    @Transactional
    public void seedRoles() {
        roleRepository.save(new Role("Student"));
        roleRepository.save(new Role("Teacher"));
        roleRepository.save(new Role("Administrator"));
        roleRepository.save(new Role("Parent"));
    }

    @Transactional
    public void seedPersonalInfo() {
        personalInfoRepository.save(new PersonalInfo("John", "Doe", "12345678901", "1234567890", LocalDate.now(), "USA", "New York", "Main St", "42", "24"));
        personalInfoRepository.save(new PersonalInfo("Jane", "Smith", "98765432101", "0987654321", LocalDate.now(), "USA", "Chicago", "Elm St", "50", "12"));
        personalInfoRepository.save(new PersonalInfo("Bob", "Brown", "45612378901", "4561237890", LocalDate.now(), "USA", "San Francisco", "Pine St", "10", "5"));
        personalInfoRepository.save(new PersonalInfo("Alice", "Johnson", "32165498701", "3216549870", LocalDate.now(), "USA", "Los Angeles", "Maple St", "33", "2"));
        personalInfoRepository.save(new PersonalInfo("Tom", "White", "15975348601", "1597534860", LocalDate.now(), "USA", "Seattle", "Cedar St", "22", "3"));
    }

    @Transactional
    public void seedUsers() {
        Role studentRole = roleRepository.findByName("Student").orElseThrow();
        Role teacherRole = roleRepository.findByName("Teacher").orElseThrow();
        Role adminRole = roleRepository.findByName("Administrator").orElseThrow();
        Role parentRole = roleRepository.findByName("Parent").orElseThrow();

        SchoolClass class5A = schoolClassRepository.findByName("5A");
        SchoolClass class8D = schoolClassRepository.findByName("8D");

        User student1 = new User("john.doe@example.com", "password123", personalInfoRepository.findById(1L).orElseThrow(), studentRole, class5A);
        User student2 = new User("jane.smith@example.com", "password123", personalInfoRepository.findById(2L).orElseThrow(), studentRole, class8D);
        User teacher1 = new User("bob.brown@example.com", "password123", personalInfoRepository.findById(3L).orElseThrow(), teacherRole, null);
        User admin = new User("alice.johnson@example.com", "password123", personalInfoRepository.findById(4L).orElseThrow(), adminRole, null);
        User parent = new User("tom.white@example.com", "password123", personalInfoRepository.findById(5L).orElseThrow(), parentRole, null);

        userRepository.save(student1);
        userRepository.save(student2);
        userRepository.save(teacher1);
        userRepository.save(admin);
        userRepository.save(parent);

        parent.addChild(student1);
        parent.addChild(student2);
        userRepository.save(parent);
    }

    @Transactional
    public void seedSchoolClasses() {
        schoolClassRepository.save(new SchoolClass("5A"));
        schoolClassRepository.save(new SchoolClass("8D"));
        schoolClassRepository.save(new SchoolClass("3C"));
        schoolClassRepository.save(new SchoolClass("7B"));
        schoolClassRepository.save(new SchoolClass("6E"));
    }

    @Transactional
    public void seedSubjects() {
        Subject math = new Subject("Math");
        Subject science = new Subject("Science");
        Subject history = new Subject("History");
        Subject pe = new Subject("PE");
        Subject art = new Subject("Art");

        subjectRepository.save(math);
        subjectRepository.save(science);
        subjectRepository.save(history);
        subjectRepository.save(pe);
        subjectRepository.save(art);

        SchoolClass class5A = schoolClassRepository.findByName("5A");
        SchoolClass class8D = schoolClassRepository.findByName("8D");

        math.addClass(class5A);
        science.addClass(class5A);
        history.addClass(class8D);
        pe.addClass(class8D);
        art.addClass(class5A);

        subjectRepository.save(math);
        subjectRepository.save(science);
        subjectRepository.save(history);
        subjectRepository.save(pe);
        subjectRepository.save(art);
    }

    @Transactional
    public void seedTeacherSubjectsInClasses() {
        User teacher = userRepository.findByEmail("bob.brown@example.com").orElseThrow();
        Subject math = subjectRepository.findByName("Math");
        Subject science = subjectRepository.findByName("Science");
        SchoolClass class5A = schoolClassRepository.findByName("5A");

        teacherSubjectInClassRepository.save(new TeacherSubjectInClass(teacher, math, class5A));
        teacherSubjectInClassRepository.save(new TeacherSubjectInClass(teacher, science, class5A));
    }

    @Transactional
    public void seedTasks() {
        User taskCreator = userRepository.findByEmail("bob.brown@example.com").orElseThrow();
        Subject math = subjectRepository.findByName("Math");
        Subject science = subjectRepository.findByName("Science");

        Task task1 = new Task("Math Homework", "Complete exercises 1-10 on page 50", LocalDateTime.now().plusDays(7), TaskStatus.FIRST_STATUS, taskCreator, null, Instant.now(), null, null, null, math);
        Task task2 = new Task("Science Project", "Prepare a presentation on the solar system", LocalDateTime.now().plusDays(14), TaskStatus.FIRST_STATUS, taskCreator, null, Instant.now(), null, null, null, science);
        Task task3 = new Task("Math Test", "Study chapters 1-3 for the test", LocalDateTime.now().plusDays(3), TaskStatus.THIRD_STATUS, taskCreator, null, Instant.now(), null, 2, new Date(), math);
        Task task4 = new Task("Science Experiment", "Conduct the experiment on plant growth", LocalDateTime.now().plusDays(10), TaskStatus.SECOND_STATUS, taskCreator, null, Instant.now(), null, null, null, science);
        Task task5 = new Task("Math Quiz", "Solve the quiz questions in the workbook", LocalDateTime.now().plusDays(5), TaskStatus.THIRD_STATUS, taskCreator, null, Instant.now(), null, 5, new Date(), math);

        taskRepository.save(task1);
        taskRepository.save(task2);
        taskRepository.save(task3);
        taskRepository.save(task4);
        taskRepository.save(task5);

        User student1 = userRepository.findByEmail("john.doe@example.com").orElseThrow();
        User student2 = userRepository.findByEmail("jane.smith@example.com").orElseThrow();

        student1.addTask(task1);
        student1.addTask(task2);
        student2.addTask(task3);
        student2.addTask(task4);
        student1.addTask(task5);

        userRepository.save(student1);
        userRepository.save(student2);
    }

    @Transactional
    public void seedNotifications() {
        User user1 = userRepository.findByEmail("john.doe@example.com").orElseThrow();
        User user2 = userRepository.findByEmail("jane.smith@example.com").orElseThrow();

        notificationRepository.save(new Notification("Welcome to our platform", Instant.now(), user1, false));
        notificationRepository.save(new Notification("New assignment available", Instant.now(), user2, false));
        notificationRepository.save(new Notification("Don't forget the upcoming test", Instant.now(), user1, false));
        notificationRepository.save(new Notification("Project submission deadline", Instant.now(), user2, false));
        notificationRepository.save(new Notification("Meeting with your teacher", Instant.now(), user1, false));
    }

    @Transactional
    public void seedReports() {
        User user1 = userRepository.findByEmail("john.doe@example.com").orElseThrow();
        User user2 = userRepository.findByEmail("jane.smith@example.com").orElseThrow();

        reportRepository.save(new Report(ReportType.FIRST_TYPE, Instant.now(), "Math report", user1, null));
        reportRepository.save(new Report(ReportType.SECOND_TYPE, Instant.now(), "Science report", user2, null));
        reportRepository.save(new Report(ReportType.THIRD_TYPE, Instant.now(), "History report", user1, null));
        reportRepository.save(new Report(ReportType.FIRST_TYPE, Instant.now(), "PE report", user2, null));
        reportRepository.save(new Report(ReportType.SECOND_TYPE, Instant.now(), "Art report", user1, null));
    }

}
