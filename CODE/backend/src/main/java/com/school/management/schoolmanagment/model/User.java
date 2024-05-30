package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.FetchType.EAGER;
import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String email;
    private String password;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "personal_id")
    private PersonalInfo personalInfo;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "role_id")
    private Role role;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "class_id")
    private SchoolClass schoolClass;

    // TODO: maybe to refactor
    @ManyToMany
    @JoinTable(name = "parent_children",
            joinColumns = @JoinColumn(name = "parent_id"),
            inverseJoinColumns = @JoinColumn(name = "child_id"))
    private Set<User> children;
    @ManyToMany(mappedBy = "children")
    private Set<User> parents;
    @ManyToMany(mappedBy = "users", fetch = EAGER)
    private final Set<Task> tasks = new HashSet<>();

    public User(String email, String password, PersonalInfo personalInfo, Role role, SchoolClass schoolClass) {
        this.email = email;
        this.password = password;
        this.personalInfo = personalInfo;
        this.role = role;
        this.schoolClass = schoolClass;
    }

    public void addTask (Task task) {
        this.tasks.add(task);
        task.getUsers().add(this);
    }

    public void addChild(User child) {
        if (child.getRole().getName().equals("Student")) {
            this.children.add(child);
            child.getParents().add(this);
        }
    }

    public void removeChild(User child) {
        if (child.getRole().getName().equals("Student")) {
            this.children.remove(child);
            child.getChildren().remove(this);
        }
    }
}