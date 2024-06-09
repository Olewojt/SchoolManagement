package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.UserInfoDTO;
import com.school.management.schoolmanagment.model.User;
import org.mapstruct.Mapper;

@Mapper
public interface UserInfoDTOMapper {

    UserInfoDTO mapToUserInfoDTO(User user);
}
