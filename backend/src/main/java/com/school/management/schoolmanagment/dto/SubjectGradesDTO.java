package com.school.management.schoolmanagment.dto;

import java.util.List;

public record SubjectGradesDTO(String subjectName, List<GradeDTO> grades) {
}
