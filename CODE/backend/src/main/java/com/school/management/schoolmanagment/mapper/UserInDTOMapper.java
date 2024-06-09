package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.UserInDTO;
import com.school.management.schoolmanagment.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(uses = PersonalInfoDTOMapper.class)
public interface UserInDTOMapper {

    @Mapping(target = "personalInfo", source = "personalInfoDTO")
    User mapToUser(UserInDTO userInDTO);
}
