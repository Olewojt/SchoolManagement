package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.dto.GradeInfoDTO;
import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.model.TaskStatus;
import com.school.management.schoolmanagment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByGrade(Integer grade);

    List<Task> findByTaskCreator(User taskCreator);

    List<Task> findByUsersIn(Set<User> users);

    List<Task> findBySubject(Subject subject);

    List<Task> findByDeadline(LocalDateTime deadline);

    List<Task> findByStatus(TaskStatus status);

    @Query(value = "SELECT t FROM Task t JOIN t.users u WHERE u.id = :userId")
    List<Task> findTasksAssignedToUser(@Param("userId") Long userId);

    @Query("SELECT t FROM Task t JOIN t.subject s JOIN t.users u WHERE u.id = :userId AND t.grade IS NOT NULL")
    List<Task> findGradesForUser(@Param("userId") Long userId);

}