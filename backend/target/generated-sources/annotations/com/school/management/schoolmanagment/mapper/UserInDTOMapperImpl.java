package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.UserInDTO;
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
public class UserInDTOMapperImpl implements UserInDTOMapper {

    @Autowired
    private PersonalInfoDTOMapper personalInfoDTOMapper;

    @Override
    public User mapToUser(UserInDTO userInDto) {
        if ( userInDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.personalInfo( personalInfoDTOMapper.mapToPersonalInfo( userInDto.getPersonalInfoDTO() ) );
        user.email( userInDto.getEmail() );
        user.password( userInDto.getPassword() );

        return user.build();
    }
}
