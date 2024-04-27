package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long > {
    Optional<Users> findByEmail(String email);
    Boolean existsByEmailAndPassword(String email, String password);
}
