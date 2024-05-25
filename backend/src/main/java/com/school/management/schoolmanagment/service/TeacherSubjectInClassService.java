package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.TeacherSubjectClassStudentsDTO;
import com.school.management.schoolmanagment.dto.TeacherSubjectInClassDTO;
import com.school.management.schoolmanagment.mapper.TeacherSubjectInClassDTOMapper;
import com.school.management.schoolmanagment.model.TeacherSubjectInClass;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.TeacherSubjectInClassRepository;
import com.school.management.schoolmanagment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.school.management.schoolmanagment.mapper.TeacherSubjectInClassDTOMapper.mapToTeacherSubjectClassStudentsDTO;

@Service
@RequiredArgsConstructor
public class TeacherSubjectInClassService {

    private final UserRepository userRepository;

    public List<TeacherSubjectClassStudentsDTO> findAllByTeacherId(Long teacherId) {
        User teacher = userRepository.findById(teacherId)
                .orElseThrow();
        List<TeacherSubjectInClass> teacherSubjectsInGroup = userRepository.findTeacherSubjectsInGroup(teacher);
        return mapToTeacherSubjectClassStudentsDTO(teacherSubjectsInGroup);
    }
}
