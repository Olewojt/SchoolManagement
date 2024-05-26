package com.school.management.schoolmanagment.dto;

import java.util.Set;

public record SubjectWithClassesDTO(Long id, String name, Set<SchoolClassDTO> schoolClassDTOs) {
}
