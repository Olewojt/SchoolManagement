package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.TeacherSubjectClassStudentsDTO;
import com.school.management.schoolmanagment.dto.TeacherSubjectInClassDTO;
import com.school.management.schoolmanagment.dto.UserDTO;
import com.school.management.schoolmanagment.model.TeacherSubjectInClass;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class TeacherSubjectInClassDTOMapper {

    private final RegistrationRequestDTOMapper registrationRequestDTOMapper;

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

    public static List<TeacherSubjectClassStudentsDTO> mapToTeacherSubjectClassStudentsDTO(
            List<TeacherSubjectInClass> tsics) {

        return tsics.stream()
                .collect(Collectors.groupingBy(tsic -> tsic.getSchoolClass().getName()))
                .entrySet().stream()
                .map(entry -> {
                    String className = entry.getKey();
                    List<String> subjectNames = entry.getValue().stream()
                            .map(tsic -> tsic.getSubject().getName())
                            .toList();
                    TeacherSubjectInClassDTO tsicDTO = new TeacherSubjectInClassDTO(className, subjectNames);

                    List<UserDTO> studentsInClass = entry.getValue().stream()
                            .flatMap(tsic -> tsic.getSchoolClass()
                                    .getStudents()
                                    .stream()
                                    .map(student -> new UserDTO(student.getId(),
                                            student.getPersonalInfo().getFirstName(),
                                            student.getPersonalInfo().getLastName()))
                            ).distinct().sorted().toList();
                    return new TeacherSubjectClassStudentsDTO(tsicDTO, studentsInClass);
                }).toList();
    }
}
