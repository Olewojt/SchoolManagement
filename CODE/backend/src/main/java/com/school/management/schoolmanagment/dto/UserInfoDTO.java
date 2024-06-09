package com.school.management.schoolmanagment.dto;

import com.school.management.schoolmanagment.model.PersonalInfo;

public record UserInfoDTO(Long id, String email, PersonalInfo personalInfo) {
}
