package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.Reports;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportsRepository extends JpaRepository<Reports, Long> {
}