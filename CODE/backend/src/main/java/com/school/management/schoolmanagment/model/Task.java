package com.school.management.schoolmanagment.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.*;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.IDENTITY;

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
    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    private User taskCreator;
    @Nullable
    private String feedback;
    @CreationTimestamp
    private Instant createdAt;
    @Nullable
    private Integer grade;
    @Nullable
    private Date gradedAt;
    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    private Subject subject;
    @ManyToMany
    @JoinTable(name = "task_assigments",
            joinColumns = @JoinColumn(name = "task_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    @JsonIgnore
    private final Set<User> users = new HashSet<>();

    public Task(String title, String description, LocalDateTime deadline,
                User taskCreator, Subject subject) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.taskCreator = taskCreator;
        this.feedback = null;
        this.grade = null;
        this.gradedAt = null;
        this.subject = subject;
        this.status = TaskStatus.TO_DO;
    }


}
