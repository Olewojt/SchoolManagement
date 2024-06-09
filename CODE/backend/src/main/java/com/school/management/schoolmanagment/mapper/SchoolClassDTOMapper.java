package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SchoolClassDTO;
import com.school.management.schoolmanagment.model.SchoolClass;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface SchoolClassDTOMapper {

    SchoolClassDTO mapToSchoolClassDTO(SchoolClass schoolClass);

    List<SchoolClassDTO> mapToSchoolClassDTOList(List<SchoolClass> schoolClasses);
}
