package com.school.management.schoolmanagment.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class DatabaseStatus {
    @Id
    private Long id;
    private boolean initialized;

    public DatabaseStatus() {
        this.id = 1L; // Stałe ID, aby zawsze mieć jedną linię
        this.initialized = false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isInitialized() {
        return initialized;
    }

    public void setInitialized(boolean initialized) {
        this.initialized = initialized;
    }
}
