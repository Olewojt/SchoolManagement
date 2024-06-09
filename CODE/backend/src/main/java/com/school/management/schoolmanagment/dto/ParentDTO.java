package com.school.management.schoolmanagment.dto;

import java.util.List;

public record ParentDTO(Long id, String email, String firstName, String lastName, String phoneNumber, List<ChildDTO> children) {
}
