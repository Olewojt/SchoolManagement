package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;

import static jakarta.persistence.FetchType.EAGER;

@Entity
public class TeacherSubjectInClass {

    @EmbeddedId
    private TSICID id;
    @ManyToOne(fetch = EAGER)
    @MapsId("teacherId")
    private User teacher;
    @ManyToOne(fetch = EAGER)
    @MapsId("subjectId")
    private Subject subject;
    @ManyToOne(fetch = EAGER)
    @MapsId("classId")
    private SchoolClass schoolClass;

    public TeacherSubjectInClass() {
    }

    public TeacherSubjectInClass(User teacher, Subject subject, SchoolClass schoolClass) {
        this.teacher = teacher;
        this.subject = subject;
        this.schoolClass = schoolClass;
        this.id = new TSICID(teacher.getId(), subject.getId(), schoolClass.getId());
    }

    public TSICID getId() {
        return id;
    }

    public User getTeacher() {
        return teacher;
    }

    public void setTeacher(User teacher) {
        this.teacher = teacher;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public SchoolClass getSchoolClass() {
        return schoolClass;
    }

    public void setSchoolClass(SchoolClass schoolClass) {
        this.schoolClass = schoolClass;
    }
}
