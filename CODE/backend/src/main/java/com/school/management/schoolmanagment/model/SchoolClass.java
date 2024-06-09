package com.school.management.schoolmanagment.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
@Getter
@Setter
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

    public SchoolClass(String name) {
        this.name = name;
    }
}
