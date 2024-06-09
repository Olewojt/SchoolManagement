package com.school.management.schoolmanagment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegistrationRequestDTO {

    private String email;
    private String password;
    private PersonalInfoDTO personalInfoDTO;
}
