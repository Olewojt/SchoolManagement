package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.ChildDTO;
import com.school.management.schoolmanagment.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper
public interface ChildDTOMapper {

    @Mapping(target = "firstName", source = "personalInfo.firstName")
    @Mapping(target = "lastName", source = "personalInfo.lastName")
    @Mapping(target = "phoneNumber", source = "personalInfo.phoneNumber")
    ChildDTO mapToChildDTO(User child);
}
