package com.school.management.schoolmanagment.database;

import com.school.management.schoolmanagment.model.*;
import com.school.management.schoolmanagment.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    private GradesRepository gradesRepository;
    @Autowired
    private NotificationRepository notificationRepository;
    @Autowired
    private PersonalInfoRepository personalInfoRepository;
    @Autowired
    private ReportsRepository reportsRepository;
    @Autowired
    private RolesRepository rolesRepository;
    @Autowired
    private SchoolClassesRepository schoolClassesRepository;
    @Autowired
    private SubjectsRepository subjectsRepository;
    @Autowired
    private TasksRepository tasksRepository;
    @Autowired
    private TeacherSubjectsInClassesRepository teacherSubjectsInClassesRepository;
    @Autowired
    private UsersRepository usersRepository;

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
        schoolClassesRepository.save(new SchoolClasses("5A"));
        schoolClassesRepository.save(new SchoolClasses("8D"));
    }

    private void seedSubjects() {
        Subjects pe = new Subjects("PE");
        subjectsRepository.save(pe);
        SchoolClasses s1 = schoolClassesRepository.findByName("5A");
        pe.addClass(s1);
        subjectsRepository.save(pe);

        Subjects religion = new Subjects("Religion");
        subjectsRepository.save(religion);
        SchoolClasses s2 = schoolClassesRepository.findByName("8D");
        pe.addClass(s2);
        subjectsRepository.save(religion);
        schoolClassesRepository.save(s2);
        schoolClassesRepository.save(s1);
    }


    private void seedGrades() {
        gradesRepository.save(new Grades(2.0, Instant.now()));
        gradesRepository.save(new Grades(3.0, Instant.now()));
        gradesRepository.save(new Grades(4.5, Instant.now()));
        gradesRepository.save(new Grades(4.0, Instant.now()));
        gradesRepository.save(new Grades(4.0, Instant.now()));
    }


    private void seedRoles() {
        rolesRepository.save(new Roles("Student"));
        rolesRepository.save(new Roles("Teacher"));
        rolesRepository.save(new Roles("Administrator"));
    }

    private void seedUsersPersonalInfo() {
        PersonalInfo pi = new PersonalInfo("John", "Doe", "12345678901", "1234567890", new Date(), "USA", "New York", "Main St", "42", "24");
        personalInfoRepository.save(pi);
        Users user = new Users("john.doe@example.com", "password123", pi, rolesRepository.findByName("Student"), null);
        usersRepository.save(user);
    }


    private void seedNotifications() {
        Optional<Users> byEmail = usersRepository.findByEmail("john.doe@example.com");
        Users user = byEmail.get();
        notificationRepository.save(new Notification("Welcome to our platform", Instant.now(), user, false));
    }

    private void seedReports() {
        Optional<Users> optionalUsers = usersRepository.findByEmail("john.doe@example.com");
        Users user = optionalUsers.get();
        reportsRepository.save(new Reports(ReportType.FIRST_TYPE, Instant.now(), "Sample Report", user, null));
    }

    private void seedTasks() {
        Users taskCreator = usersRepository.findById(1L).get();
        Tasks tasks= new Tasks("Rozprawka o misce", "Wykonac rozprawke na temat miski w bojlerze", LocalDateTime.now(), TaskStatus.FIRST_STATUS, taskCreator, null, Instant.now(), null, null, null, subjectsRepository.findById(1L).get());
        tasksRepository.save(tasks);
        Users user = usersRepository.findById(1L).get();
        user.addTask(tasks);
        usersRepository.save(user);
        
    }


    private void seedTeacherSubjectsInClasses() {
        Optional<Users> byEmail = usersRepository.findByEmail("john.doe@example.com");
        Users teacher = byEmail.get();
        Subjects subject = subjectsRepository.findByName("Religion");
        SchoolClasses class1 = schoolClassesRepository.findByName("5A");
        TeacherSubjectsInClasses tsic = new TeacherSubjectsInClasses(teacher, subject, class1);
        teacherSubjectsInClassesRepository.save(tsic);
    }
}
