package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SchoolClassDTO;
import com.school.management.schoolmanagment.model.SchoolClass;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-05-28T11:33:05+0200",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 21.0.3 (Amazon.com Inc.)"
)
@Component
public class SchoolClassDTOMapperImpl implements SchoolClassDTOMapper {

    @Override
    public SchoolClassDTO mapToSchoolClassDTO(SchoolClass schoolClass) {
        if ( schoolClass == null ) {
            return null;
        }

        Long id = null;
        String name = null;

        id = schoolClass.getId();
        name = schoolClass.getName();

        SchoolClassDTO schoolClassDTO = new SchoolClassDTO( id, name );

        return schoolClassDTO;
    }
}
