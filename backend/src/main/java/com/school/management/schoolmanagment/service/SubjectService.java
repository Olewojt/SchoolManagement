package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.SubjectDTO;
import com.school.management.schoolmanagment.mapper.SubjectDTOMapper;
import com.school.management.schoolmanagment.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SubjectService {

    private final SubjectRepository subjectRepository;
    private final SubjectDTOMapper subjectDTOMapper;

    public SubjectDTO findBySubjectName(String name) {
        return subjectDTOMapper.mapToSubjectDTO(subjectRepository.findByName(name));
    }

}
