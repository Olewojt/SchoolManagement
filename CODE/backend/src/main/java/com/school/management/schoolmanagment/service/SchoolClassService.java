package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.SchoolClassDTO;
import com.school.management.schoolmanagment.dto.SchoolClassWithSubjectsDTO;
import com.school.management.schoolmanagment.dto.SubjectDTO;
import com.school.management.schoolmanagment.dto.TeacherInfoDTO;
import com.school.management.schoolmanagment.mapper.SchoolClassDTOMapper;
import com.school.management.schoolmanagment.mapper.SchoolClassWithSubjectsDTOMapper;
import com.school.management.schoolmanagment.model.SchoolClass;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.SchoolClassRepository;
import com.school.management.schoolmanagment.repository.TeacherSubjectInClassRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SchoolClassService {

    private final SchoolClassRepository schoolClassRepository;
    private final TeacherSubjectInClassRepository teacherSubjectInClassRepository;
    private final SchoolClassDTOMapper schoolClassDTOMapper;
    private final SchoolClassWithSubjectsDTOMapper schoolClassWithSubjectsDTOMapper;

    public List<SchoolClassDTO> getAllClasses() {
        List<SchoolClass> schoolClasses = schoolClassRepository.findAll();
        return  schoolClassDTOMapper.mapToSchoolClassDTOList(schoolClasses);
    }

    public List<SchoolClassWithSubjectsDTO> getAllClassesWithSubjects() {
        // Step 1: Fetch all school classes from repository
        List<SchoolClass> schoolClasses = schoolClassRepository.findAll();

        // Step 2: Map school classes to SchoolClassWithSubjectsDTO objects
        List<SchoolClassWithSubjectsDTO> schoolClassWithSubjectsDTOList
                = schoolClassWithSubjectsDTOMapper.mapToSchoolClassWithSubjectsList(schoolClasses);

        // Step 3: Populate TeacherInfoDTO for each subject within each school class
        schoolClassWithSubjectsDTOList.forEach(schoolClassWithSubjectsDTO -> {
            schoolClassWithSubjectsDTO.getSubjectDTOs().forEach(subjectDTO -> {
                User teacher = teacherSubjectInClassRepository.findByIdSubjectIdAndIdClassId(subjectDTO.getId(), schoolClassWithSubjectsDTO.getId()).getTeacher();
                subjectDTO.setTeacherInfo(new TeacherInfoDTO(teacher.getId(), teacher.getPersonalInfo().getFirstName(), teacher.getPersonalInfo().getLastName()));
            });
        });

        // Step 4: Sort subjects alphabetically within each SchoolClassWithSubjectsDTO
        schoolClassWithSubjectsDTOList.forEach(schoolClassWithSubjectsDTO -> {
            List<SubjectDTO> sortedSubjects = schoolClassWithSubjectsDTO.getSubjectDTOs()
                    .stream()
                    .sorted(Comparator.comparing(SubjectDTO::getName))
                    .collect(Collectors.toList());
            schoolClassWithSubjectsDTO.setSubjectDTOs(sortedSubjects);
        });

        return schoolClassWithSubjectsDTOList;
    }

}
