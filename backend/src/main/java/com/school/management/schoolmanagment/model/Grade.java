package com.school.management.schoolmanagment.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

import static javax.persistence.GenerationType.IDENTITY;

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
