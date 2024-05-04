package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
public class Subject {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name;
    @ManyToMany(mappedBy = "subjects")
    private final Set<SchoolClass> schoolClasses = new HashSet<>();

    public Subject() {

    }

    public void addClass(SchoolClass schoolClass) {
        this.schoolClasses.add(schoolClass);
        schoolClass.getSubjects().add(this);
    }

    public void removeClass(SchoolClass schoolClass) {
        this.schoolClasses.remove(schoolClass);
        schoolClass.getSubjects().remove(this);
    }

    public Subject(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<SchoolClass> getSchoolClasses() {
        return schoolClasses;
    }
}
