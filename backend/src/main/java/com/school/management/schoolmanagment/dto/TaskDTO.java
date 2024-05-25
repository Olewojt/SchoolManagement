package com.school.management.schoolmanagment.dto;

import java.util.List;

public record TaskDTO(Long id, String title, String description, String status,
                      String subject, String date, List<UserDTO> members, String className) {
}
