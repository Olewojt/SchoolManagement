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
import java.util.*;

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
        personalInfoRepository.save(new PersonalInfo("Emily", "Clark", "12312312345", "1231231231", LocalDate.now(), "USA", "Boston", "Oak St", "88", "11"));
        personalInfoRepository.save(new PersonalInfo("Michael", "Brown", "54354354321", "5435435432", LocalDate.now(), "USA", "Houston", "Pine St", "44", "8"));
        personalInfoRepository.save(new PersonalInfo("Emma", "Jones", "98798798765", "9879879876", LocalDate.now(), "USA", "Phoenix", "Spruce St", "12", "7"));
        personalInfoRepository.save(new PersonalInfo("David", "Wilson", "65465465432", "6546546543", LocalDate.now(), "USA", "Dallas", "Birch St", "23", "9"));
        personalInfoRepository.save(new PersonalInfo("Sophia", "Taylor", "32132132109", "3213213210", LocalDate.now(), "USA", "Austin", "Maple St", "77", "4"));
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
        User student3 = new User("emily.clark@example.com", "password123", personalInfoRepository.findById(6L).orElseThrow(), studentRole, class5A);
        User student4 = new User("michael.brown@example.com", "password123", personalInfoRepository.findById(7L).orElseThrow(), studentRole, class5A);
        User student5 = new User("emma.jones@example.com", "password123", personalInfoRepository.findById(8L).orElseThrow(), studentRole, class5A);
        User student6 = new User("david.wilson@example.com", "password123", personalInfoRepository.findById(9L).orElseThrow(), studentRole, class5A);
        User student7 = new User("sophia.taylor@example.com", "password123", personalInfoRepository.findById(10L).orElseThrow(), studentRole, class5A);

        User teacher1 = new User("bob.brown@example.com", "password123", personalInfoRepository.findById(3L).orElseThrow(), teacherRole, null);
        User teacher2 = new User("alice.johnson@example.com", "password123", personalInfoRepository.findById(4L).orElseThrow(), teacherRole, null);
        User teacher3 = new User("tom.white@example.com", "password123", personalInfoRepository.findById(5L).orElseThrow(), teacherRole, null);
        User admin = new User("admin@example.com", "password123", personalInfoRepository.findById(4L).orElseThrow(), adminRole, null);
        User parent = new User("parent@example.com", "password123", personalInfoRepository.findById(5L).orElseThrow(), parentRole, null);

        userRepository.save(student1);
        userRepository.save(student2);
        userRepository.save(student3);
        userRepository.save(student4);
        userRepository.save(student5);
        userRepository.save(student6);
        userRepository.save(student7);
        userRepository.save(teacher1);
        userRepository.save(teacher2);
        userRepository.save(teacher3);
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
        schoolClassRepository.save(new SchoolClass("4F"));
        schoolClassRepository.save(new SchoolClass("2G"));
    }

    @Transactional
    public void seedSubjects() {
        Subject math = new Subject("Math");
        Subject science = new Subject("Science");
        Subject history = new Subject("History");
        Subject pe = new Subject("PE");
        Subject art = new Subject("Art");
        Subject music = new Subject("Music");
        Subject geography = new Subject("Geography");

        subjectRepository.save(math);
        subjectRepository.save(science);
        subjectRepository.save(history);
        subjectRepository.save(pe);
        subjectRepository.save(art);
        subjectRepository.save(music);
        subjectRepository.save(geography);

        SchoolClass class5A = schoolClassRepository.findByName("5A");
        SchoolClass class8D = schoolClassRepository.findByName("8D");

        math.addClass(class5A);
        science.addClass(class5A);
        history.addClass(class8D);
        pe.addClass(class8D);
        art.addClass(class5A);
        music.addClass(class5A);
        geography.addClass(class8D);

        subjectRepository.save(math);
        subjectRepository.save(science);
        subjectRepository.save(history);
        subjectRepository.save(pe);
        subjectRepository.save(art);
        subjectRepository.save(music);
        subjectRepository.save(geography);
    }

    @Transactional
    public void seedTeacherSubjectsInClasses() {
        User teacher1 = userRepository.findByEmail("bob.brown@example.com").orElseThrow();
        User teacher2 = userRepository.findByEmail("alice.johnson@example.com").orElseThrow();
        User teacher3 = userRepository.findByEmail("tom.white@example.com").orElseThrow();

        Subject math = subjectRepository.findByName("Math");
        Subject science = subjectRepository.findByName("Science");
        Subject history = subjectRepository.findByName("History");
        Subject pe = subjectRepository.findByName("PE");
        Subject art = subjectRepository.findByName("Art");
        Subject music = subjectRepository.findByName("Music");
        Subject geography = subjectRepository.findByName("Geography");

        SchoolClass class5A = schoolClassRepository.findByName("5A");
        SchoolClass class8D = schoolClassRepository.findByName("8D");

        teacherSubjectInClassRepository.save(new TeacherSubjectInClass(teacher1, math, class5A));
        teacherSubjectInClassRepository.save(new TeacherSubjectInClass(teacher1, science, class5A));
        teacherSubjectInClassRepository.save(new TeacherSubjectInClass(teacher2, history, class8D));
        teacherSubjectInClassRepository.save(new TeacherSubjectInClass(teacher2, pe, class8D));
        teacherSubjectInClassRepository.save(new TeacherSubjectInClass(teacher3, art, class5A));
        teacherSubjectInClassRepository.save(new TeacherSubjectInClass(teacher3, music, class5A));
        teacherSubjectInClassRepository.save(new TeacherSubjectInClass(teacher3, geography, class8D));
    }

    @Transactional
    public void seedTasks() {
        User taskCreator = userRepository.findByEmail("bob.brown@example.com").orElseThrow();
        Subject math = subjectRepository.findByName("Math");
        Subject science = subjectRepository.findByName("Science");
        Subject history = subjectRepository.findByName("History");
        Subject pe = subjectRepository.findByName("PE");
        Subject art = subjectRepository.findByName("Art");

        List<User> allStudents = new ArrayList<>();
        userRepository.findAll().forEach(user -> {
            if (user.getRole().getName().equals("Student")) {
                allStudents.add(user);
            }
        });

        createTasksForStudent("john.doe@example.com", math, science, history, pe, art, taskCreator, allStudents);
        createTasksForStudent("jane.smith@example.com", math, science, history, pe, art, taskCreator, allStudents);
        createTasksForStudent("emily.clark@example.com", math, science, history, pe, art, taskCreator, allStudents);
        createTasksForStudent("michael.brown@example.com", math, science, history, pe, art, taskCreator, allStudents);
        createTasksForStudent("emma.jones@example.com", math, science, history, pe, art, taskCreator, allStudents);
        createTasksForStudent("david.wilson@example.com", math, science, history, pe, art, taskCreator, allStudents);
        createTasksForStudent("sophia.taylor@example.com", math, science, history, pe, art, taskCreator, allStudents);
    }

    private void createTasksForStudent(String email, Subject math, Subject science, Subject history, Subject pe, Subject art, User taskCreator, List<User> allStudents) {
        User student = userRepository.findByEmail(email).orElseThrow();
        Random random = new Random();

        Subject[] subjects = {math, science, history, pe, art};

        for (int i = 0; i < 5; i++) {
            TaskStatus status = (i < 4) ? TaskStatus.THIRD_STATUS : TaskStatus.FIRST_STATUS;
            int grade = random.nextInt(5) + 1;
            Date gradedAt = new Date();

            Subject subject = subjects[i % subjects.length];

            Task task = new Task(
                    "Homework " + i,
                    "Complete the assigned tasks " + i,
                    LocalDateTime.now(),
                    status,
                    taskCreator,
                    null,
                    Instant.now(),
                    null,
                    grade,
                    gradedAt,
                    subject
            );
            taskRepository.save(task);
            student.addTask(task);

            for (User additionalStudent : allStudents) {
                if (!additionalStudent.equals(student) && random.nextBoolean()) {
                    additionalStudent.addTask(task);
                    userRepository.save(additionalStudent);
                }
            }
        }

        userRepository.save(student);
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
