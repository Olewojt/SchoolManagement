package com.school.management.schoolmanagment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PersonalInfoDTO {

    private String firstName;
    private String lastName;
    private String pesel;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private String country;
    private String city;
    private String street;
    private String homeNumber;
    private String flatNumber;
    private Boolean isFromCity;
}
