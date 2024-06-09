package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SubjectWithClassesDTO;
import com.school.management.schoolmanagment.model.Subject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(uses = SchoolClassDTOMapper.class)
public interface SubjectWithClassesDTOMapper {

    @Mapping(target = "schoolClassDTOs", source = "schoolClasses")
    SubjectWithClassesDTO mapToSubjectWithClassesDTO(Subject subject);
}
