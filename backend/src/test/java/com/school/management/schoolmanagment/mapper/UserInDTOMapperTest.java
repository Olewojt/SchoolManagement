package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.PersonalInfoDTO;
import com.school.management.schoolmanagment.dto.UserInDTO;
import com.school.management.schoolmanagment.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(classes = {UserInDTOMapperImpl.class, PersonalInfoDTOMapperImpl.class})
class UserInDTOMapperTest {

    @Autowired
    private UserInDTOMapper userInDTOMapper;

    @Autowired
    private PersonalInfoDTOMapper personalInfoDTOMapper;

    @Test
    void itShouldMapUserInDTOToUser() {
        UserInDTO userInDTO = UserInDTO.builder()
                .email("jacek745@gmail.com")
                .password("AnimalPlanet644##")
                .personalInfoDTO(PersonalInfoDTO.builder()
                        .firstName("Jacek")
                        .lastName("Golicz")
                        .pesel("02254682131")
                        .phoneNumber("649372817")
                        .dateOfBirth(LocalDate.of(2007, 6, 12))
                        .country("Poland")
                        .city("Dubiecko")
                        .street("Rejtana")
                        .homeNumber("121")
                        .flatNumber("3")
                        .build())
                .build();

        User mappedUser = userInDTOMapper.mapToUser(userInDTO);

        assertThat(mappedUser
                .getEmail()).isEqualTo(userInDTO.getEmail());
        assertThat(mappedUser
                .getPassword()).isEqualTo(userInDTO.getPassword());
        assertThat(mappedUser
                .getPersonalInfo().getFirstName()).isEqualTo(userInDTO.getPersonalInfoDTO().getFirstName());
        assertThat(mappedUser
                .getPersonalInfo().getLastName()).isEqualTo(userInDTO.getPersonalInfoDTO().getLastName());
        assertThat(mappedUser
                .getPersonalInfo().getPesel()).isEqualTo(userInDTO.getPersonalInfoDTO().getPesel());
        assertThat(mappedUser
                .getPersonalInfo().getPhoneNumber()).isEqualTo(userInDTO.getPersonalInfoDTO().getPhoneNumber());
        assertThat(mappedUser
                .getPersonalInfo().getDateOfBirth()).isEqualTo(userInDTO.getPersonalInfoDTO().getDateOfBirth());
        assertThat(mappedUser
                .getPersonalInfo().getCountry()).isEqualTo(userInDTO.getPersonalInfoDTO().getCountry());
        assertThat(mappedUser
                .getPersonalInfo().getCity()).isEqualTo(userInDTO.getPersonalInfoDTO().getCity());
        assertThat(mappedUser
                .getPersonalInfo().getStreet()).isEqualTo(userInDTO.getPersonalInfoDTO().getStreet());
        assertThat(mappedUser
                .getPersonalInfo().getHomeNumber()).isEqualTo(userInDTO.getPersonalInfoDTO().getHomeNumber());
        assertThat(mappedUser
                .getPersonalInfo().getFlatNumber()).isEqualTo(userInDTO.getPersonalInfoDTO().getFlatNumber());
    }
}