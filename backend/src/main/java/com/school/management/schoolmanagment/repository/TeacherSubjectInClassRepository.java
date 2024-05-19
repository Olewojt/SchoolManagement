package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.model.TeacherSubjectInClass;
import com.school.management.schoolmanagment.model.TSICID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeacherSubjectInClassRepository extends JpaRepository<TeacherSubjectInClass, TSICID> {
    boolean existsByIdTeacherIdAndIdSubjectIdAndIdClassId(Long teacherId, Long subjectId, Long classId);

    @Query("SELECT tsic.subject FROM TeacherSubjectInClass tsic WHERE tsic.teacher.id = :teacherId")
    List<Subject> findSubjectsByTeacherId(Long teacherId);
}
