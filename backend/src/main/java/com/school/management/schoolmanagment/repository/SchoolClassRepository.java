package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.SchoolClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolClassRepository extends JpaRepository<SchoolClass, Long> {
    SchoolClass findByName(String name);
}