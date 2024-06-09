package com.school.management.schoolmanagment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SchoolClassWithSubjectsDTO {

    private Long id;
    private String name;
    private List<SubjectDTO> subjectDTOs;
}
