package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Blob;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Task {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String title;
    private String description;
    private LocalDateTime deadline;
    @Enumerated(value = STRING)
    private TaskStatus status;
    @ManyToOne(fetch = LAZY)
    private User taskCreator;
    private String feedback;
    @CreationTimestamp
    private Instant createdAt;
    @Lob
    private Blob attachment;
    private Integer grade;
    private Date gradedAt;
    @ManyToOne(fetch = LAZY)
    private Subject subject;
    @ManyToMany
    @JoinTable(name = "task_assigments",
            joinColumns = @JoinColumn(name = "task_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private final Set<User> users = new HashSet<>();

    public Task(String title, String description, LocalDateTime deadline,
                TaskStatus status, User taskCreator, String feedback, Instant createdAt,
                Blob attachment, Integer grade, Date gradedAt, Subject subject) {
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
}