package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.PersonalInfoDTO;
import com.school.management.schoolmanagment.model.PersonalInfo;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-05-28T11:33:04+0200",
    comments = "version: 1.6.0.Beta1, compiler: javac, environment: Java 21.0.3 (Amazon.com Inc.)"
)
@Component
public class PersonalInfoDTOMapperImpl implements PersonalInfoDTOMapper {

    @Override
    public PersonalInfo mapToPersonalInfo(PersonalInfoDTO personalInfoDTO) {
        if ( personalInfoDTO == null ) {
            return null;
        }

        PersonalInfo.PersonalInfoBuilder personalInfo = PersonalInfo.builder();

        personalInfo.firstName( personalInfoDTO.getFirstName() );
        personalInfo.lastName( personalInfoDTO.getLastName() );
        personalInfo.pesel( personalInfoDTO.getPesel() );
        personalInfo.phoneNumber( personalInfoDTO.getPhoneNumber() );
        personalInfo.dateOfBirth( personalInfoDTO.getDateOfBirth() );
        personalInfo.country( personalInfoDTO.getCountry() );
        personalInfo.city( personalInfoDTO.getCity() );
        personalInfo.street( personalInfoDTO.getStreet() );
        personalInfo.homeNumber( personalInfoDTO.getHomeNumber() );
        personalInfo.flatNumber( personalInfoDTO.getFlatNumber() );
        personalInfo.isFromCity( personalInfoDTO.getIsFromCity() );

        return personalInfo.build();
    }
}
