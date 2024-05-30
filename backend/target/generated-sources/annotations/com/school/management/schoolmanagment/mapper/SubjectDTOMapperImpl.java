package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SubjectDTO;
import com.school.management.schoolmanagment.model.Subject;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-05-28T11:33:05+0200",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 21.0.3 (Amazon.com Inc.)"
)
@Component
public class SubjectDTOMapperImpl implements SubjectDTOMapper {

    @Override
    public SubjectDTO mapToSubjectDTO(Subject subject) {
        if ( subject == null ) {
            return null;
        }

        Long id = null;
        String name = null;

        id = subject.getId();
        name = subject.getName();

        SubjectDTO subjectDTO = new SubjectDTO( id, name );

        return subjectDTO;
    }
}
