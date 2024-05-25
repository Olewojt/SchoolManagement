package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SchoolClassDTO;
import com.school.management.schoolmanagment.model.SchoolClass;
import org.mapstruct.Mapper;

@Mapper
public interface SchoolClassDTOMapper {

    SchoolClassDTO mapToSchoolClassDTO(SchoolClass schoolClass);
}
