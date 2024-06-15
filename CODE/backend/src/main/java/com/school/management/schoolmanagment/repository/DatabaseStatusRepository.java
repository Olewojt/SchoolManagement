package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.DatabaseStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DatabaseStatusRepository extends JpaRepository<DatabaseStatus, Long> {
}
