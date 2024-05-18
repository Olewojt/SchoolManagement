package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.GradeDTO;
import com.school.management.schoolmanagment.dto.SubjectGradesDTO;
import com.school.management.schoolmanagment.model.Task;

import java.util.List;
import java.util.stream.Collectors;

public class SubjectGradesDTOMapper {

    public static List<SubjectGradesDTO> mapToSubjectGradesDTO(List<Task> tasks) {
        return tasks.stream()
                .collect(Collectors.groupingBy(task -> task.getSubject().getName()))
                .entrySet().stream()
                .map(entry -> {
                    String subjectName = entry.getKey();
                    List<GradeDTO> subjectGrades = entry.getValue().stream()
                            .map(task -> new GradeDTO(task.getGrade(), task.getGradedAt().toString()))
                            .toList();
                    return new SubjectGradesDTO(subjectName, subjectGrades);
                }).toList();
    }
}
