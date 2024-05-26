package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.SubjectDTO;
import com.school.management.schoolmanagment.dto.SubjectWithClassesDTO;
import com.school.management.schoolmanagment.mapper.SubjectDTOMapper;
import com.school.management.schoolmanagment.mapper.SubjectWithClassesDTOMapper;
import com.school.management.schoolmanagment.model.SchoolClass;
import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.repository.SchoolClassRepository;
import com.school.management.schoolmanagment.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SubjectService {

    private final SubjectRepository subjectRepository;
    private final SchoolClassRepository schoolClassRepository;
    private final SubjectDTOMapper subjectDTOMapper;
    private final SubjectWithClassesDTOMapper subjectWithClassesDTOMapper;

    public SubjectDTO findBySubjectName(String name) {
        return subjectDTOMapper.mapToSubjectDTO(subjectRepository.findByName(name));
    }

    public SubjectWithClassesDTO addClassToSubject(String subjectName, String className) {
        Subject subject = subjectRepository.findByName(subjectName);
        SchoolClass schoolClass = schoolClassRepository.findByName(className);
        subject.addClass(schoolClass);
        return subjectWithClassesDTOMapper.mapToSubjectWithClassesDTO(subject);
    }
}
