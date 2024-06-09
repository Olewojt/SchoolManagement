package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.Notification;
import com.school.management.schoolmanagment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    @Query("SELECT n FROM Notification n JOIN n.user u WHERE u = :user")
    List<Notification> findAllByUser(User user);

    @Query("SELECT n FROM Notification n JOIN n.user u WHERE u = :user AND n.isRead = FALSE")
    List<Notification> findAllByUserAndUnread(User user);
}