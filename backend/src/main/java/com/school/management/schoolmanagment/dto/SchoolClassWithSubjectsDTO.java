package com.school.management.schoolmanagment.dto;

import java.util.Set;

public record SchoolClassWithSubjectsDTO(Long id, String name, Set<SubjectDTO> subjectDTOs) {
}
