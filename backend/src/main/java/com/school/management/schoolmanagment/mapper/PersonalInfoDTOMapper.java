package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.PersonalInfoDTO;
import com.school.management.schoolmanagment.model.PersonalInfo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface PersonalInfoDTOMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    PersonalInfo mapToPersonalInfo(PersonalInfoDTO personalInfoDTO);
}
