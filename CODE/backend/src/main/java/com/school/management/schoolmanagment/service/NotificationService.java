package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.model.Notification;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.NotificationRepository;
import com.school.management.schoolmanagment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final UserRepository userRepository;

    public void sendNotificationToUser(String content) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetails userDetails) {
            String username = userDetails.getUsername();
            User user = userRepository.findByEmail(username)
                    .orElseThrow();

            Notification notification = new Notification(content, user);
            notificationRepository.save(notification);

            System.out.println(user.getEmail());
            System.out.println("ESSUNIA");
            simpMessagingTemplate.convertAndSendToUser(user.getEmail(), "/specific", notification);
        }
    }

    public void sendNotificationToUser(Long userId, String content) {
        User user = userRepository.findById(userId)
                .orElseThrow();

        Notification notification = new Notification(content, user);
        notificationRepository.save(notification);

        simpMessagingTemplate.convertAndSendToUser(user.getEmail(), "/specific", notification);
    }

    public List<Notification> getAllUserNotifications(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow();

        return notificationRepository.findAllByUser(user);
    }

    public List<Notification> getAllUserUnreadNotifications(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow();

        return notificationRepository.findAllByUserAndUnread(user);
    }
}
