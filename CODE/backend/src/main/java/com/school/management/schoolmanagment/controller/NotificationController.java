package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.NotificationDTO;
import com.school.management.schoolmanagment.model.Notification;
import com.school.management.schoolmanagment.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/notifications")
public class NotificationController {

    private final NotificationService notificationService;
    private final SimpMessagingTemplate simpMessagingTemplate;

    @PostMapping("/send")
    public void sendNotificationToUser(@RequestBody NotificationDTO notification) {
        notificationService.sendNotificationToUser(notification.content());
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<List<Notification>> getAllUserNotifications(@PathVariable Long userId) {
        return ResponseEntity.ok(notificationService.getAllUserNotifications(userId));
    }

    @GetMapping("/unread/users/{userId}")
    public ResponseEntity<List<Notification>> getAllUserUnreadNotifications(@PathVariable Long userId) {
        return ResponseEntity.ok(notificationService.getAllUserUnreadNotifications(userId));
    }

    @MessageMapping("/private")  // - /app/private
    public void sendToUser(@Payload NotificationDTO notificationDTO) {
        simpMessagingTemplate.convertAndSendToUser("emily.clark@example.com",
                "/specific", notificationDTO);
        System.out.println("WYSLANE?!");
    }
}
