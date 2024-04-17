package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.Subjects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SubjectsRepository extends JpaRepository<Subjects, Long> {
    Subjects findByName(String name);
}