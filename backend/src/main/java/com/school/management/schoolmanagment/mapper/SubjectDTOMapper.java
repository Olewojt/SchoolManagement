package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SubjectDTO;
import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.service.SubjectService;
import org.mapstruct.Mapper;

@Mapper
public interface SubjectDTOMapper {

    SubjectDTO mapToSubjectDTO(Subject subject);
}
