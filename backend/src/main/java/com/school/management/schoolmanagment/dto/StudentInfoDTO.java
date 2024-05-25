package com.school.management.schoolmanagment.dto;

import com.school.management.schoolmanagment.model.PersonalInfo;

public record StudentInfoDTO(PersonalInfo personalInfo, SchoolClassDTO schoolClassDTO) {
}
