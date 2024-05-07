package com.school.management.schoolmanagment.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Grade {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private Double grade;  // TODO: make validation from 2.0 to 5.0 step = 0.5
    @CreationTimestamp
    private Instant createdAt;

    public Grade(Double grade, Instant createdAt) {
        this.grade = grade;
        this.createdAt = createdAt;
    }
}
