package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SchoolClassWithSubjectsDTO;
import com.school.management.schoolmanagment.dto.SubjectDTO;
import com.school.management.schoolmanagment.model.SchoolClass;
import com.school.management.schoolmanagment.model.Subject;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
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
public class SchoolClassWithSubjectsDTOMapperImpl implements SchoolClassWithSubjectsDTOMapper {

    @Autowired
    private SubjectDTOMapper subjectDTOMapper;

    @Override
    public SchoolClassWithSubjectsDTO mapToSchoolClassWithSubjects(SchoolClass schoolClass) {
        if ( schoolClass == null ) {
            return null;
        }

        Set<SubjectDTO> subjectDTOs = null;
        Long id = null;
        String name = null;

        subjectDTOs = subjectSetToSubjectDTOSet( schoolClass.getSubjects() );
        id = schoolClass.getId();
        name = schoolClass.getName();

        SchoolClassWithSubjectsDTO schoolClassWithSubjectsDTO = new SchoolClassWithSubjectsDTO( id, name, subjectDTOs );

        return schoolClassWithSubjectsDTO;
    }

    @Override
    public List<SchoolClassWithSubjectsDTO> mapToSchoolClassWithSubjectsList(List<SchoolClass> schoolClassList) {
        if ( schoolClassList == null ) {
            return null;
        }

        List<SchoolClassWithSubjectsDTO> list = new ArrayList<SchoolClassWithSubjectsDTO>( schoolClassList.size() );
        for ( SchoolClass schoolClass : schoolClassList ) {
            list.add( mapToSchoolClassWithSubjects( schoolClass ) );
        }

        return list;
    }

    protected Set<SubjectDTO> subjectSetToSubjectDTOSet(Set<Subject> set) {
        if ( set == null ) {
            return null;
        }

        Set<SubjectDTO> set1 = new LinkedHashSet<SubjectDTO>( Math.max( (int) ( set.size() / .75f ) + 1, 16 ) );
        for ( Subject subject : set ) {
            set1.add( subjectDTOMapper.mapToSubjectDTO( subject ) );
        }

        return set1;
    }
}
