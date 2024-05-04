package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.FetchType.EAGER;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
public class SchoolClass {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "schoolClass")
    private final Set<User> students = new HashSet<>();
    @ManyToMany(fetch = EAGER)
    @JoinTable(name = "class_subjects",
            joinColumns = @JoinColumn(name = "class_id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id"))
    private final Set<Subject> subjects = new HashSet<>();

    public SchoolClass() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SchoolClass(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<User> getStudents() {
        return students;
    }

    public Set<Subject> getSubjects() {
        return subjects;
    }
}
