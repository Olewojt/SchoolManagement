package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.ParentDTO;
import com.school.management.schoolmanagment.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(uses = ChildDTOMapper.class)
public interface ParentDTOMapper {

    @Mapping(target = "firstName", source = "personalInfo.firstName")
    @Mapping(target = "lastName", source = "personalInfo.lastName")
    @Mapping(target = "phoneNumber", source = "personalInfo.phoneNumber")
    ParentDTO mapToParentDTO(User parent);

    List<ParentDTO> mapToParentDTOList(List<User> parent);
}
