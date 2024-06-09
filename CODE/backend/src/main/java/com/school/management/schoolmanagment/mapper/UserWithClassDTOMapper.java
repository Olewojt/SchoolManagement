package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.UserWithClassDTO;
import com.school.management.schoolmanagment.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(uses = SchoolClassDTOMapper.class)
public interface UserWithClassDTOMapper {

    @Mapping(target = "schoolClassDTO", source = "schoolClass")
    UserWithClassDTO mapToUserWithClassDTO(User user);
}
