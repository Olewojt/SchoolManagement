package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Blob;
import java.time.Instant;

import static jakarta.persistence.EnumType.STRING;
import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
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

    public Report(){}

    public Report(ReportType reportType, Instant createdAt, String description, User user, Blob reportInPdf) {
        this.reportType = reportType;
        this.createdAt = createdAt;
        this.description = description;
        this.user = user;
        this.reportInPdf = reportInPdf;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ReportType getReportType() {
        return reportType;
    }

    public void setReportType(ReportType reportType) {
        this.reportType = reportType;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Blob getReportInPdf() {
        return reportInPdf;
    }

    public void setReportInPdf(Blob reportInPdf) {
        this.reportInPdf = reportInPdf;
    }
}
