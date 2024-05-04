package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;


import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.FetchType.EAGER;
import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String email;
    private String password;
    @OneToOne(fetch = LAZY)
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

    public User() {
    }

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public PersonalInfo getPersonalInfo() {
        return personalInfo;
    }

    public void setPersonalInfo(PersonalInfo personalInfo) {
        this.personalInfo = personalInfo;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public SchoolClass getSchoolClasses() {
        return schoolClass;
    }

    public void setSchoolClasses(SchoolClass schoolClass) {
        this.schoolClass = schoolClass;
    }

    public Set<User> getChildren() {
        return children;
    }

    public void setChildren(Set<User> children) {
        this.children = children;
    }

    public Set<User> getParents() {
        return parents;
    }

    public void setParents(Set<User> parents) {
        this.parents = parents;
    }
}
