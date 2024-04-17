package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long > {
    Users findByEmail(String email);
}
