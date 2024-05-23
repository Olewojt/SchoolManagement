package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.TaskAttachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskAttachmentRepository extends JpaRepository<TaskAttachment, String> {

    @Query("SELECT ta FROM TaskAttachment ta WHERE ta.task.id = :task_id")
    List<TaskAttachment> getAllTaskAttachments(@Param("task_id") Long taskId);
}
