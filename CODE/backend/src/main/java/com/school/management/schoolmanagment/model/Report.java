package com.school.management.schoolmanagment.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Blob;
import java.time.Instant;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Report {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    @Enumerated(value = STRING)
    private ReportType reportType;
    @CreationTimestamp
    private Instant createdAt;
    private String description;
    @ManyToOne(fetch = LAZY)
    private User user;
    @Lob
    private Blob reportInPdf;

    public Report(ReportType reportType, Instant createdAt, String description, User user, Blob reportInPdf) {
        this.reportType = reportType;
        this.createdAt = createdAt;
        this.description = description;
        this.user = user;
        this.reportInPdf = reportInPdf;
    }
}
