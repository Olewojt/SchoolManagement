package com.school.management.schoolmanagment.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String content;
    @CreationTimestamp
    private Instant createdAt;
    @ManyToOne(fetch = LAZY)
    private Users user;
    private Boolean isRead;

    public Notification() {
    }

    public Notification(String content, Instant createdAt, Users user, Boolean isRead) {
        this.content = content;
        this.createdAt = createdAt;
        this.user = user;
        this.isRead = isRead;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Boolean getRead() {
        return isRead;
    }

    public void setRead(Boolean read) {
        isRead = read;
    }
}
