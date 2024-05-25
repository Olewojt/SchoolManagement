package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubjectService {

    private final SubjectRepository subjectRepository;

    public Subject findBySubjectName(String name) {
        return subjectRepository.findByName(name);
    }

}
