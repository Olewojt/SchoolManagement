package com.school.management.schoolmanagment.dto;

import java.util.List;

public record TeacherSubjectClassStudentsDTO(TeacherSubjectInClassDTO classInfo, List<UserDTO> studentList) {
}
