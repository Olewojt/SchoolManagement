package com.school.management.schoolmanagment.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginRequestDTO {

    private String email;
    private String password;
}
