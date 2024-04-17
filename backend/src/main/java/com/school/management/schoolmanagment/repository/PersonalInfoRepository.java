package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.PersonalInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalInfoRepository extends JpaRepository<PersonalInfo, Long> {
}