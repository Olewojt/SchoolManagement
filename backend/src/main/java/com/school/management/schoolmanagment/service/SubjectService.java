package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.SubjectDTO;
import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.school.management.schoolmanagment.mapper.SubjectDTOMapper.mapToSubjectDTO;

@Service
@RequiredArgsConstructor
public class SubjectService {

    private final SubjectRepository subjectRepository;

    public SubjectDTO findBySubjectName(String name) {
        return mapToSubjectDTO(subjectRepository.findByName(name));
    }

}
