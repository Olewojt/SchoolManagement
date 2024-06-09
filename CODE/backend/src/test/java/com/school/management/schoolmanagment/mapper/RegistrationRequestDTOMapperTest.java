package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.PersonalInfoDTO;
import com.school.management.schoolmanagment.dto.RegistrationRequestDTO;
import com.school.management.schoolmanagment.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(classes = {RegistrationRequestDTOMapperImpl.class, PersonalInfoDTOMapperImpl.class})
class RegistrationRequestDTOMapperTest {

    @Autowired
    private RegistrationRequestDTOMapper registrationRequestDTOMapper;

    @Autowired
    private PersonalInfoDTOMapper personalInfoDTOMapper;

    @Test
    void itShouldMapUserInDTOToUser() {
        RegistrationRequestDTO registrationRequestDTO = RegistrationRequestDTO.builder()
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

        User mappedUser = registrationRequestDTOMapper.mapToUser(registrationRequestDTO);

        assertThat(mappedUser
                .getEmail()).isEqualTo(registrationRequestDTO.getEmail());
        assertThat(mappedUser
                .getPassword()).isEqualTo(registrationRequestDTO.getPassword());
        assertThat(mappedUser
                .getPersonalInfo().getFirstName()).isEqualTo(registrationRequestDTO.getPersonalInfoDTO().getFirstName());
        assertThat(mappedUser
                .getPersonalInfo().getLastName()).isEqualTo(registrationRequestDTO.getPersonalInfoDTO().getLastName());
        assertThat(mappedUser
                .getPersonalInfo().getPesel()).isEqualTo(registrationRequestDTO.getPersonalInfoDTO().getPesel());
        assertThat(mappedUser
                .getPersonalInfo().getPhoneNumber()).isEqualTo(registrationRequestDTO.getPersonalInfoDTO().getPhoneNumber());
        assertThat(mappedUser
                .getPersonalInfo().getDateOfBirth()).isEqualTo(registrationRequestDTO.getPersonalInfoDTO().getDateOfBirth());
        assertThat(mappedUser
                .getPersonalInfo().getCountry()).isEqualTo(registrationRequestDTO.getPersonalInfoDTO().getCountry());
        assertThat(mappedUser
                .getPersonalInfo().getCity()).isEqualTo(registrationRequestDTO.getPersonalInfoDTO().getCity());
        assertThat(mappedUser
                .getPersonalInfo().getStreet()).isEqualTo(registrationRequestDTO.getPersonalInfoDTO().getStreet());
        assertThat(mappedUser
                .getPersonalInfo().getHomeNumber()).isEqualTo(registrationRequestDTO.getPersonalInfoDTO().getHomeNumber());
        assertThat(mappedUser
                .getPersonalInfo().getFlatNumber()).isEqualTo(registrationRequestDTO.getPersonalInfoDTO().getFlatNumber());
    }
}