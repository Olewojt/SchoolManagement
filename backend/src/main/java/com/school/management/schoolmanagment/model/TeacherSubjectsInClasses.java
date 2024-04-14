package com.school.management.schoolmanagment.model;

import jakarta.persistence.*;

import static jakarta.persistence.FetchType.EAGER;

@Entity
public class TeacherSubjectsInClasses {

    @EmbeddedId
    private TSICID id;
    @ManyToOne(fetch = EAGER)
    @MapsId("teacherId")
    private Users teacher;
    @ManyToOne(fetch = EAGER)
    @MapsId("subjectId")
    private Subjects subject;
    @ManyToOne(fetch = EAGER)
    @MapsId("classId")
    private SchoolClasses schoolClass;

    public TeacherSubjectsInClasses() {
    }

    public TeacherSubjectsInClasses(Users teacher, Subjects subject, SchoolClasses schoolClass) {
        this.teacher = teacher;
        this.subject = subject;
        this.schoolClass = schoolClass;
        this.id = new TSICID(teacher.getId(), subject.getId(), schoolClass.getId());
    }

    public TSICID getId() {
        return id;
    }

    public Users getTeacher() {
        return teacher;
    }

    public void setTeacher(Users teacher) {
        this.teacher = teacher;
    }

    public Subjects getSubject() {
        return subject;
    }

    public void setSubject(Subjects subject) {
        this.subject = subject;
    }

    public SchoolClasses getSchoolClass() {
        return schoolClass;
    }

    public void setSchoolClass(SchoolClasses schoolClass) {
        this.schoolClass = schoolClass;
    }
}
