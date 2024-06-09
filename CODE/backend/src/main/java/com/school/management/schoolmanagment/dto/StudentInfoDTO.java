package com.school.management.schoolmanagment.dto;

import com.school.management.schoolmanagment.model.PersonalInfo;

public record StudentInfoDTO(Long id, String email, PersonalInfo personalInfo, SchoolClassDTO schoolClassDTO) {
}
