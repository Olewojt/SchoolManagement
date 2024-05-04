package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.TeacherSubjectInClass;
import com.school.management.schoolmanagment.model.TSICID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherSubjectInClassRepository extends JpaRepository<TeacherSubjectInClass, TSICID> {
}
