package com.school.management.schoolmanagment.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.time.Instant;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
@Getter
public class ConnectionLog {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    @CreationTimestamp
    private Instant userConnectionTime;
}
