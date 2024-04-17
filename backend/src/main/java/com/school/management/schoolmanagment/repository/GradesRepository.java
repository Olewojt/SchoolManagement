package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.Grades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradesRepository extends JpaRepository<Grades, Long> {
}
