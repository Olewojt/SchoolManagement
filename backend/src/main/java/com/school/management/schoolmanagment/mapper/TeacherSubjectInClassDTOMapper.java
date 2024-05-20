package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.GradeDTO;
import com.school.management.schoolmanagment.dto.SubjectGradesDTO;
import com.school.management.schoolmanagment.dto.TeacherSubjectInClassDTO;
import com.school.management.schoolmanagment.model.TeacherSubjectInClass;

import java.util.List;
import java.util.stream.Collectors;

public class TeacherSubjectInClassDTOMapper {

    public static List<TeacherSubjectInClassDTO> mapToTeacherSubjectInClassDTO(List<TeacherSubjectInClass> tsics) {
        return tsics.stream()
                .collect(Collectors.groupingBy(tsic -> tsic.getSchoolClass().getName()))
                .entrySet().stream()
                .map(entry -> {
                    String className = entry.getKey();
                    List<String> subjectNames = entry.getValue().stream()
                            .map(tsic -> tsic.getSubject().getName())
                            .toList();
                    return new TeacherSubjectInClassDTO(className, subjectNames);
                }).toList();
    }
}
