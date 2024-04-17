package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Blob;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.FetchType.EAGER;
import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
public class Tasks {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String title;
    private String description;
    private LocalDateTime deadline;
    @Enumerated(value = STRING)
    private TaskStatus status;
    @ManyToOne(fetch = LAZY)
    private Users taskCreator;
    private String feedback;
    @CreationTimestamp
    private Instant createdAt;
    @Lob
    private Blob attachment;
    private Integer grade;
    private Date gradedAt;
    @ManyToOne(fetch = LAZY)
    private Subjects subject;
    @ManyToMany
    @JoinTable(name = "task_assigments",
            joinColumns = @JoinColumn(name = "task_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private final Set<Users> users = new HashSet<>();

    public Tasks() {
    }

    public Tasks(String title, String description, LocalDateTime deadline,
                 TaskStatus status, Users taskCreator, String feedback, Instant createdAt,
                 Blob attachment, Integer grade, Date gradedAt, Subjects subject) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.status = status;
        this.taskCreator = taskCreator;
        this.feedback = feedback;
        this.createdAt = createdAt;
        this.attachment = attachment;
        this.grade = grade;
        this.gradedAt= gradedAt;
        this.subject = subject;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDateTime deadline) {
        this.deadline = deadline;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    public Users getTaskCreator() {
        return taskCreator;
    }

    public void setTaskCreator(Users taskCreator) {
        this.taskCreator = taskCreator;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Blob getAttachment() {
        return attachment;
    }

    public void setAttachment(Blob attachment) {
        this.attachment = attachment;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    public Date getGradedAt() {
        return gradedAt;
    }

    public void setGradedAt(Date gradedAt) {
        this.gradedAt = gradedAt;
    }

    public Subjects getSubject() {
        return subject;
    }

    public void setSubject(Subjects subject) {
        this.subject = subject;
    }

    public Set<Users> getUsers() {
        return users;
    }
}
