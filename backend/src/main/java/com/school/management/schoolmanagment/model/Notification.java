package com.school.management.schoolmanagment.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Notification {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String content;
    @CreationTimestamp
    private Instant createdAt;
    @ManyToOne(fetch = LAZY)
    private User user;
    private Boolean isRead;

    public Notification(String content, Instant createdAt, User user, Boolean isRead) {
        this.content = content;
        this.createdAt = createdAt;
        this.user = user;
        this.isRead = isRead;
    }
}
