package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.FetchType.EAGER;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
public class SchoolClasses {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "schoolClasses")
    private final Set<Users> students = new HashSet<>();
    @ManyToMany(fetch = EAGER)
    @JoinTable(name = "class_subjects",
            joinColumns = @JoinColumn(name = "class_id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id"))
    private final Set<Subjects> subjects = new HashSet<>();

    public SchoolClasses() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SchoolClasses(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Users> getStudents() {
        return students;
    }

    public Set<Subjects> getSubjects() {
        return subjects;
    }
}
