package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.GradeInfoDTO;
import com.school.management.schoolmanagment.model.Task;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper
public interface GradeInfoDTOMapper {

    @Mapping(target = "subjectName", source = "subject.name")
    GradeInfoDTO mapToGradeInfoDTO(Task task);

    List<GradeInfoDTO> mapToGradeInfoDTO(List<Task> task);
}
