package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.SchoolClasses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SchoolClassesRepository extends JpaRepository<SchoolClasses, Long> {
    SchoolClasses findByName(String name);
}