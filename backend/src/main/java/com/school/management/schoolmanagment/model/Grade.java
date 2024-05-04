package com.school.management.schoolmanagment.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
public class Grade {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private Double grade;  // TODO: make validation from 2.0 to 5.0 step = 0.5
    @CreationTimestamp
    private Instant createdAt;

    public Grade() {

    }

    public Grade(Double grade, Instant createdAt) {
        this.grade = grade;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getGrade() {
        return grade;
    }

    public void setGrade(Double grade) {
        this.grade = grade;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
