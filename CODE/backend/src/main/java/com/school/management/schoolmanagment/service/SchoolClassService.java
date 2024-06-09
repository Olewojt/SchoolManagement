package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.SchoolClassDTO;
import com.school.management.schoolmanagment.dto.SchoolClassWithSubjectsDTO;
import com.school.management.schoolmanagment.dto.TeacherInfoDTO;
import com.school.management.schoolmanagment.mapper.SchoolClassDTOMapper;
import com.school.management.schoolmanagment.mapper.SchoolClassWithSubjectsDTOMapper;
import com.school.management.schoolmanagment.model.SchoolClass;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.SchoolClassRepository;
import com.school.management.schoolmanagment.repository.TeacherSubjectInClassRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
        List<SchoolClass> schoolClasses = schoolClassRepository.findAll();
        schoolClasses
            .forEach(schoolClass -> {
                schoolClass.getSubjects().forEach(subject -> {

                });
        });
        List<SchoolClassWithSubjectsDTO> schoolClassWithSubjectsDTOList
            = schoolClassWithSubjectsDTOMapper.mapToSchoolClassWithSubjectsList(schoolClasses);
        schoolClassWithSubjectsDTOList
            .forEach(schoolClassWithSubjectsDTO -> {
                schoolClassWithSubjectsDTO.getSubjectDTOs().forEach(subjectDTO -> {
                    User teacher = teacherSubjectInClassRepository.findByIdSubjectIdAndIdClassId(subjectDTO.getId(), schoolClassWithSubjectsDTO.getId()).getTeacher();
                    subjectDTO.setTeacherInfo(new TeacherInfoDTO(teacher.getId(), teacher.getPersonalInfo().getFirstName(), teacher.getPersonalInfo().getLastName()));
                });
            });
        return schoolClassWithSubjectsDTOList;
    }
}
