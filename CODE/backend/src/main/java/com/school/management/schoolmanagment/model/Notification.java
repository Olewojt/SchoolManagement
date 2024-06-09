package com.school.management.schoolmanagment.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.Instant;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.IDENTITY;

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
    @JsonIgnore
    private User user;
    private Boolean isRead;

    public Notification(String content, User user) {
        this.content = content;
        this.user = user;
        this.isRead = false;
    }
}
