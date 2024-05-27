package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.TeacherSubjectInClass;
import com.school.management.schoolmanagment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Boolean existsByEmailAndPassword(String email, String password);

    @Query("SELECT u FROM User u JOIN u.role r WHERE r.name = :roleName")
    List<User> findByRoleName(String roleName);

    @Query("SELECT tsig FROM TeacherSubjectInClass tsig WHERE tsig.teacher = :teacher")
    List<TeacherSubjectInClass> findTeacherSubjectsInGroup(User teacher);

    @Query("SELECT u FROM User u JOIN SchoolClass sc WHERE sc.id = :schoolClassId")
    List<User> findStudentsBySchoolClassId(Long schoolClassId);
}
