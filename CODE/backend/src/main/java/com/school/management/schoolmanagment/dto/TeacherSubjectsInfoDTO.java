package com.school.management.schoolmanagment.dto;

import java.util.List;

public record TeacherSubjectsInfoDTO(Long id, String email, PersonalInfoDTO personalInfoDTO,
                                     List<SchoolClassWithSubjectsDTO> schoolClassWithSubjectsDTOs) {
}
