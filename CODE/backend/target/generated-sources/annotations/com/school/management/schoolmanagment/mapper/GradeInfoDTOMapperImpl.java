package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.GradeInfoDTO;
import com.school.management.schoolmanagment.model.Subject;
import com.school.management.schoolmanagment.model.Task;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-05-28T11:33:04+0200",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 21.0.3 (Amazon.com Inc.)"
)
@Component
public class GradeInfoDTOMapperImpl implements GradeInfoDTOMapper {

    @Override
    public GradeInfoDTO mapToGradeInfoDTO(Task task) {
        if ( task == null ) {
            return null;
        }

        GradeInfoDTO gradeInfoDTO = new GradeInfoDTO();

        gradeInfoDTO.setSubjectName( taskSubjectName( task ) );
        gradeInfoDTO.setGrade( task.getGrade() );
        if ( task.getGradedAt() != null ) {
            gradeInfoDTO.setGradedAt( LocalDateTime.ofInstant( task.getGradedAt().toInstant(), ZoneId.of( "UTC" ) ) );
        }

        return gradeInfoDTO;
    }

    @Override
    public List<GradeInfoDTO> mapToGradeInfoDTO(List<Task> task) {
        if ( task == null ) {
            return null;
        }

        List<GradeInfoDTO> list = new ArrayList<GradeInfoDTO>( task.size() );
        for ( Task task1 : task ) {
            list.add( mapToGradeInfoDTO( task1 ) );
        }

        return list;
    }

    private String taskSubjectName(Task task) {
        Subject subject = task.getSubject();
        if ( subject == null ) {
            return null;
        }
        return subject.getName();
    }
}
