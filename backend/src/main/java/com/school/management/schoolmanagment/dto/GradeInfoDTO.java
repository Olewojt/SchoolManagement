package com.school.management.schoolmanagment.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class GradeInfoDTO {
    private Integer grade;
    private String subjectName;
    private LocalDateTime gradedAt;

    public GradeInfoDTO(Integer grade, String subjectName, LocalDateTime gradedAt) {
        this.grade = grade;
        this.subjectName = subjectName;
        this.gradedAt = gradedAt;
    }
}
