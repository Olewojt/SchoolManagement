package com.school.management.schoolmanagment.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class TSICID implements Serializable {

    @Column(name = "teacher_id")
    private Long teacherId;
    @Column(name = "subject_id")
    private Long subjectId;
    @Column(name = "class_id")
    private Long classId;

    protected TSICID() {
    }

    public TSICID(Long teacherId, Long subjectId, Long classId) {
        this.teacherId = teacherId;
        this.subjectId = subjectId;
        this.classId = classId;
    }

    public Long getTeacherId() {
        return teacherId;
    }

    public Long getSubjectId() {
        return subjectId;
    }

    public Long getClassId() {
        return classId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TSICID tsicid = (TSICID) o;
        return Objects.equals(teacherId, tsicid.teacherId) && Objects.equals(subjectId,
                tsicid.subjectId) && Objects.equals(classId, tsicid.classId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(teacherId, subjectId, classId);
    }
}
