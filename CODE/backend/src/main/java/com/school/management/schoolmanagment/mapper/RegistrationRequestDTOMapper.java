package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.RegistrationRequestDTO;
import com.school.management.schoolmanagment.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(uses = PersonalInfoDTOMapper.class)
public interface RegistrationRequestDTOMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "personalInfo", source = "personalInfoDTO")
    @Mapping(target = "role", ignore = true)
    @Mapping(target = "schoolClass", ignore = true)
    @Mapping(target = "children", ignore = true)
    @Mapping(target = "parents", ignore = true)
    User mapToUser(RegistrationRequestDTO registrationRequestDto);
}
