package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SubjectDTO;
import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.service.SubjectService;

public class SubjectDTOMapper {

    public static SubjectDTO mapToSubjectDTO(Subject subject) {
        return new SubjectDTO(subject.getId(), subject.getName());
    }
}
