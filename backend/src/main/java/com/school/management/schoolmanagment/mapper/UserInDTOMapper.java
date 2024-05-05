package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.UserInDTO;
import com.school.management.schoolmanagment.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(uses = PersonalInfoDTOMapper.class)
public interface UserInDTOMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "personalInfo", source = "personalInfoDTO")
    @Mapping(target = "role", ignore = true)
    @Mapping(target = "schoolClass", ignore = true)
    @Mapping(target = "children", ignore = true)
    @Mapping(target = "parents", ignore = true)
    User mapToUser(UserInDTO userInDto);
}
