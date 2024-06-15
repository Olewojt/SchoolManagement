package com.school.management.schoolmanagment.dto;

import lombok.Setter;

public record UserInDTO(String email, String password, PersonalInfoDTO personalInfoDTO) {

}
