package com.school.management.schoolmanagment.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import static javax.persistence.FetchType.EAGER;

@Entity
@NoArgsConstructor
@Getter
@Setter
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

    public TeacherSubjectInClass(User teacher, Subject subject, SchoolClass schoolClass) {
        this.teacher = teacher;
        this.subject = subject;
        this.schoolClass = schoolClass;
        this.id = new TSICID(teacher.getId(), subject.getId(), schoolClass.getId());
    }
}
