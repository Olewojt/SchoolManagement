package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.Report;
import com.school.management.schoolmanagment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {

    @Query("SELECT r FROM Report r JOIN r.user u WHERE u = :user")
    List<Report> findAllByUser(User user);
}