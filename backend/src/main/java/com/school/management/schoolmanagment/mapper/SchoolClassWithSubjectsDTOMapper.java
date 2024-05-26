package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SchoolClassWithSubjectsDTO;
import com.school.management.schoolmanagment.model.SchoolClass;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(uses = SubjectDTOMapper.class)
public interface SchoolClassWithSubjectsDTOMapper {

    @Mapping(target = "subjectDTOs", source = "subjects")
    SchoolClassWithSubjectsDTO mapToSchoolClassWithSubjects(SchoolClass schoolClass);

    List<SchoolClassWithSubjectsDTO> mapToSchoolClassWithSubjectsList(List<SchoolClass> schoolClassList);
}
