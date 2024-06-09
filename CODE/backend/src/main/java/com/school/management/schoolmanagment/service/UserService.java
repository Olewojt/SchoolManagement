package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.*;
import com.school.management.schoolmanagment.exception.ExistingEntityException;
import com.school.management.schoolmanagment.mapper.*;
import com.school.management.schoolmanagment.model.*;
import com.school.management.schoolmanagment.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static com.school.management.schoolmanagment.mapper.TeacherSubjectInClassDTOMapper.mapToTeacherSubjectInClassDTO;
import static com.school.management.schoolmanagment.mapper.UserDTOMapper.mapToUserDTOs;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final TaskRepository taskRepository;
    private final NotificationRepository notificationRepository;
    private final ReportRepository reportRepository;
    private final SchoolClassRepository schoolClassRepository;
    private final StudentInfoDTOMapper studentInfoDTOMapper;
    private final PersonalInfoRepository personalInfoRepository;
    private final UserInfoDTOMapper userInfoDTOMapper;
    private final UserInDTOMapper userInDTOMapper;
    private final PersonalInfoDTOMapper personalInfoDTOMapper;
    private final ParentDTOMapper parentDTOMapper;
    private final UserWithClassDTOMapper userWithClassDTOMapper;

    public void setUserRole(String email, String roleName) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User With Given Email Not Found!"));
        Role role = roleRepository.findByName(roleName)
                .orElseThrow(() -> new EntityNotFoundException("Role With Given Name Not Found!"));
        user.setRole(role);
    }

    public StudentInfoDTO getUserPersonalInfo(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User With Given ID Not Found!"));

        return studentInfoDTOMapper.mapToStudentInfoDTO(user);
    }

    public UserInfoDTO updateUserPersonalInfo(Long userId, PersonalInfoDTO personalInfoDTO) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new EntityNotFoundException("User With Given ID Not Found!"));
        PersonalInfo newPersonalInfo = personalInfoDTOMapper.mapToPersonalInfo(personalInfoDTO);
        newPersonalInfo.setUser(user);
        user.setPersonalInfo(newPersonalInfo);
        personalInfoRepository.save(newPersonalInfo);
        return userInfoDTOMapper.mapToUserInfoDTO(user);
    }

    public UserInfoDTO createNewUser(UserInDTO userInDTO, String roleName) {
        if (userRepository.findByEmail(userInDTO.email()).isPresent()) {
            throw new ExistingEntityException("User With Given Email Already Exists!");
        }
        User newUser = userInDTOMapper.mapToUser(userInDTO);
        Optional<Role> role = roleRepository.findByName(roleName);
        newUser.setRole(role.orElseGet(() -> roleRepository.findByName("Student").get()));
        userRepository.save(newUser);
        return userInfoDTOMapper.mapToUserInfoDTO(newUser);
    }

    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId).get();
        List<Task> tasksAssignedToUser = taskRepository.findTasksAssignedToUser(userId);
        tasksAssignedToUser.forEach(task -> task.getUsers().remove(user));
        List<Notification> notificationsOfUser = notificationRepository.findAllByUser(user);
        notificationRepository.deleteAll(notificationsOfUser);
        List<Report> reportsOfUser = reportRepository.findAllByUser(user);
        reportRepository.deleteAll(reportsOfUser);
        user.getParents().forEach(parent -> parent.getChildren().remove(user));
        userRepository.deleteById(userId);
    }

    public List<ParentDTO> getAllParentsWithChildren() {
        List<User> parents = userRepository.findByRoleName("Parent");
        return parentDTOMapper.mapToParentDTOList(parents);
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

    public List<UserDTO> getBasicTeacherPersonalData() {
        List<User> allUsers = userRepository.findByRoleName("Teacher");

        return mapToUserDTOs(allUsers);
    }

    public List<StudentInfoDTO> getAllStudents() {
        List<User> students = userRepository.findByRoleName("Student");
        return studentInfoDTOMapper.mapToStudentInfoDTOList(students);
    }

    public UserWithClassDTO updateUserClass(Long userId, String className) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User With Given ID Not Found!"));
        SchoolClass schoolClass = schoolClassRepository.findByName(className);

        user.setSchoolClass(schoolClass);
        return userWithClassDTOMapper.mapToUserWithClassDTO(user);
    }

    public void setParentChildren(Long parentId, List<Long> childrenIds) {
        User parent = userRepository.findById(parentId)
                .orElseThrow(() -> new EntityNotFoundException("Parent With Given ID Not Found!"));

        List<User> childrenList = userRepository.findAllById(childrenIds);
        if (childrenList.size() != childrenIds.size()) {
            throw new EntityNotFoundException("One or more Children With Given IDs Not Found!");
        }

        Set<User> childrenSet = new HashSet<>(childrenList);
        parent.setChildren(childrenSet);
        childrenSet.forEach(child -> child.getParents().add(parent));
        userRepository.save(parent);
    }

    public void removeParentChildren(Long parentId, List<Long> childrenIds) {
        User parent = userRepository.findById(parentId)
                .orElseThrow(() -> new EntityNotFoundException("Parent With Given ID Not Found!"));

        List<User> childrenList = userRepository.findAllById(childrenIds);
        if (childrenList.size() != childrenIds.size()) {
            throw new EntityNotFoundException("One or more Children With Given IDs Not Found!");
        }

        Set<User> childrenSet = new HashSet<>(childrenList);
        childrenSet.forEach(child -> {
            parent.removeChild(child);
            userRepository.save(child);  // Save child to update the parent-child relationship
        });
        userRepository.save(parent);
    }
}
