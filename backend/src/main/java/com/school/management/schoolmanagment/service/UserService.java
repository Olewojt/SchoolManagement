package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.PersonalInfoDTO;
import com.school.management.schoolmanagment.dto.TeacherSubjectInClassDTO;
import com.school.management.schoolmanagment.mapper.PersonalInfoDTOMapper;
import com.school.management.schoolmanagment.mapper.TeacherSubjectInClassDTOMapper;
import com.school.management.schoolmanagment.model.Role;
import com.school.management.schoolmanagment.model.TeacherSubjectInClass;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.RoleRepository;
import com.school.management.schoolmanagment.repository.UserRepository;

import javax.persistence.EntityNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import static com.school.management.schoolmanagment.mapper.TeacherSubjectInClassDTOMapper.mapToTeacherSubjectInClassDTO;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PersonalInfoDTOMapper personalInfoDTOMapper;

    public void setUserRole(String email, String roleName) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User With Given Email Not Found!"));
        Role role = roleRepository.findByName(roleName)
                .orElseThrow(() -> new EntityNotFoundException("Role With Given Name Not Found!"));
        user.setRole(role);
    }

    public PersonalInfoDTO getUserPersonalInfo(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User With Given ID Not Found!"));

        return personalInfoDTOMapper.mapToPersonalInfoDTO(user.getPersonalInfo());
    }

    public List<Long> getParentChildrenIds(Long parentId) {
        User parent = userRepository.findById(parentId)
                .orElseThrow(() -> new EntityNotFoundException("Parent With Given ID Not Found!"));

        return parent.getChildren()
                .stream()
                .map(User::getId)
                .toList();
    }

    public List<TeacherSubjectInClassDTO> findTeacherSubjectsInGroup(Long teacherId) {
        User teacher = userRepository.findById(teacherId)
                .orElseThrow(() -> new EntityNotFoundException("Teacher With Given ID Not Found!"));

        List<TeacherSubjectInClass> teacherSubjectsInGroup = userRepository.findTeacherSubjectsInGroup(teacher);

        return mapToTeacherSubjectInClassDTO(teacherSubjectsInGroup);
    }
}
