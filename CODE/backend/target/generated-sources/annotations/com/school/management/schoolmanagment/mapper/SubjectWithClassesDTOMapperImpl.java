package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SchoolClassDTO;
import com.school.management.schoolmanagment.dto.SubjectWithClassesDTO;
import com.school.management.schoolmanagment.model.SchoolClass;
import com.school.management.schoolmanagment.model.Subject;
import java.util.LinkedHashSet;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-05-28T11:33:04+0200",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 21.0.3 (Amazon.com Inc.)"
)
@Component
public class SubjectWithClassesDTOMapperImpl implements SubjectWithClassesDTOMapper {

    @Autowired
    private SchoolClassDTOMapper schoolClassDTOMapper;

    @Override
    public SubjectWithClassesDTO mapToSubjectWithClassesDTO(Subject subject) {
        if ( subject == null ) {
            return null;
        }

        Set<SchoolClassDTO> schoolClassDTOs = null;
        Long id = null;
        String name = null;

        schoolClassDTOs = schoolClassSetToSchoolClassDTOSet( subject.getSchoolClasses() );
        id = subject.getId();
        name = subject.getName();

        SubjectWithClassesDTO subjectWithClassesDTO = new SubjectWithClassesDTO( id, name, schoolClassDTOs );

        return subjectWithClassesDTO;
    }

    protected Set<SchoolClassDTO> schoolClassSetToSchoolClassDTOSet(Set<SchoolClass> set) {
        if ( set == null ) {
            return null;
        }

        Set<SchoolClassDTO> set1 = new LinkedHashSet<SchoolClassDTO>( Math.max( (int) ( set.size() / .75f ) + 1, 16 ) );
        for ( SchoolClass schoolClass : set ) {
            set1.add( schoolClassDTOMapper.mapToSchoolClassDTO( schoolClass ) );
        }

        return set1;
    }
}
