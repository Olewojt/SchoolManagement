package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.SchoolClassWithSubjectsDTO;
import com.school.management.schoolmanagment.mapper.SchoolClassWithSubjectsDTOMapper;
import com.school.management.schoolmanagment.model.SchoolClass;
import com.school.management.schoolmanagment.repository.SchoolClassRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SchoolClassService {

    private final SchoolClassRepository schoolClassRepository;
    private final SchoolClassWithSubjectsDTOMapper schoolClassWithSubjectsDTOMapper;

    public List<SchoolClassWithSubjectsDTO> getAllClassesWithSubjects() {
        List<SchoolClass> schoolClasses = schoolClassRepository.findAll();
        return schoolClassWithSubjectsDTOMapper.mapToSchoolClassWithSubjectsList(schoolClasses);
    }
}
