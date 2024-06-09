package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.StudentInfoDTO;
import com.school.management.schoolmanagment.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(uses = SchoolClassDTOMapper.class)
public interface StudentInfoDTOMapper {

    @Mapping(target = "schoolClassDTO", source = "schoolClass")
    StudentInfoDTO mapToStudentInfoDTO(User user);

    List<StudentInfoDTO> mapToStudentInfoDTOList(List<User> users);
}
