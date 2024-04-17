package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TasksRepository extends JpaRepository<Tasks, Long> {
}