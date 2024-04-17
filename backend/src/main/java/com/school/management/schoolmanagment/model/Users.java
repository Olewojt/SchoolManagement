package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;


import java.util.HashSet;
import java.util.Set;

import static jakarta.persistence.FetchType.EAGER;
import static jakarta.persistence.FetchType.LAZY;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
public class Users {

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
    private Roles role;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "class_id")
    private SchoolClasses schoolClasses;

    // TODO: maybe to refactor
    @ManyToMany
    @JoinTable(name = "parent_children",
            joinColumns = @JoinColumn(name = "parent_id"),
            inverseJoinColumns = @JoinColumn(name = "child_id"))
    private Set<Users> children;
    @ManyToMany(mappedBy = "children")
    private Set<Users> parents;
    @ManyToMany(mappedBy = "users", fetch = EAGER)
    private final Set<Tasks> tasks = new HashSet<>();

    public Users() {
    }

    public Users(String email, String password, PersonalInfo personalInfo, Roles role, SchoolClasses schoolClasses) {
        this.email = email;
        this.password = password;
        this.personalInfo = personalInfo;
        this.role = role;
        this.schoolClasses = schoolClasses;
    }

    public void addTask (Tasks task) {
        this.tasks.add(task);
        task.getUsers().add(this);
    }

    public void addChild(Users child) {
        if (child.getRole().getName().equals("Student")) {
            this.children.add(child);
            child.getParents().add(this);
        }
    }

    public void removeChild(Users child) {
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

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }

    public SchoolClasses getSchoolClasses() {
        return schoolClasses;
    }

    public void setSchoolClasses(SchoolClasses schoolClass) {
        this.schoolClasses = schoolClass;
    }

    public Set<Users> getChildren() {
        return children;
    }

    public void setChildren(Set<Users> children) {
        this.children = children;
    }

    public Set<Users> getParents() {
        return parents;
    }

    public void setParents(Set<Users> parents) {
        this.parents = parents;
    }
}
