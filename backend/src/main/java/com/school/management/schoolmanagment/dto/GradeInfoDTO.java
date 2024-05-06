package com.school.management.schoolmanagment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GradeInfoDTO {
    private Integer grade;
    private String subjectName;
    private LocalDateTime gradedAt;
}
