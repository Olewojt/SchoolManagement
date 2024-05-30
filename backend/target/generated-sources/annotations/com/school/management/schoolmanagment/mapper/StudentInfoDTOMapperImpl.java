package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.SchoolClassDTO;
import com.school.management.schoolmanagment.dto.StudentInfoDTO;
import com.school.management.schoolmanagment.model.PersonalInfo;
import com.school.management.schoolmanagment.model.User;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-05-28T11:33:04+0200",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 21.0.3 (Amazon.com Inc.)"
)
@Component
public class StudentInfoDTOMapperImpl implements StudentInfoDTOMapper {

    @Autowired
    private SchoolClassDTOMapper schoolClassDTOMapper;

    @Override
    public StudentInfoDTO mapToStudentInfoDTO(User user) {
        if ( user == null ) {
            return null;
        }

        SchoolClassDTO schoolClassDTO = null;
        PersonalInfo personalInfo = null;

        schoolClassDTO = schoolClassDTOMapper.mapToSchoolClassDTO( user.getSchoolClass() );
        personalInfo = user.getPersonalInfo();

        StudentInfoDTO studentInfoDTO = new StudentInfoDTO( personalInfo, schoolClassDTO );

        return studentInfoDTO;
    }
}
