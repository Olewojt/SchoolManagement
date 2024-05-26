package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.model.TaskStatus;
import com.school.management.schoolmanagment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByTaskCreator(User taskCreator);

    List<Task> findBySubject(Subject subject);

    List<Task> findByDeadline(LocalDateTime deadline);


    @Query(value = "SELECT t FROM Task t JOIN t.users u WHERE u.id = :userId")
    List<Task> findTasksAssignedToUser(@Param("userId") Long userId);

    @Query("SELECT t FROM Task t JOIN t.subject s JOIN t.users u WHERE u.id = :userId " +
            "AND t.grade IS NOT NULL")
    List<Task> findGradesForUser(@Param("userId") Long userId);

    @Query("SELECT COUNT(t) FROM Task t " +
            "JOIN t.subject s " +
            "JOIN t.taskCreator tc " +
            "JOIN t.users u " +
            "JOIN TeacherSubjectInClass tsic ON tsic.teacher = tc AND tsic.subject = s " +
            "WHERE tc.id = :teacherId " +
            "AND tsic.schoolClass.id = :classId " +
            "AND s.id = :subjectId " +
            "AND t.createdAt BETWEEN :startDate AND :endDate " +
            "AND u.schoolClass.id = :classId")
    int countTasks(@Param("teacherId") Long teacherId,
                   @Param("classId") Long classId,
                   @Param("subjectId") Long subjectId,
                   @Param("startDate") Instant startDate,
                   @Param("endDate") Instant endDate);

    @Query("SELECT COUNT(t) FROM Task t " +
            "JOIN t.subject s " +
            "JOIN t.taskCreator tc " +
            "JOIN t.users u " +
            "JOIN TeacherSubjectInClass tsic ON tsic.teacher = tc AND tsic.subject = s " +
            "WHERE tc.id = :teacherId " +
            "AND tsic.schoolClass.id = :classId " +
            "AND s.id = :subjectId " +
            "AND t.createdAt BETWEEN :startDate AND :endDate " +
            "AND t.grade IS NOT NULL " +
            "AND u.schoolClass.id = :classId")
    int countGradedTasks(@Param("teacherId") Long teacherId,
                         @Param("classId") Long classId,
                         @Param("subjectId") Long subjectId,
                         @Param("startDate") Instant startDate,
                         @Param("endDate") Instant endDate);

}
