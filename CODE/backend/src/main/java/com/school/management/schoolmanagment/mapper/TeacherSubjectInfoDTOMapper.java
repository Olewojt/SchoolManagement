package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SchoolClassWithSubjectsDTO;
import com.school.management.schoolmanagment.dto.TeacherSubjectsInfoDTO;
import com.school.management.schoolmanagment.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(uses = PersonalInfoDTOMapper.class)
public interface TeacherSubjectInfoDTOMapper {

    @Mapping(target = "personalInfoDTO", source = "teacher.personalInfo")
    @Mapping(target = "schoolClassWithSubjectsDTOs", source = "schoolClassWithSubjectsDTOList")
    TeacherSubjectsInfoDTO mapToTeacherSubjectsInfoDTO(User teacher, List<SchoolClassWithSubjectsDTO> schoolClassWithSubjectsDTOList);
}
