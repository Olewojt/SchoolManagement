package com.school.management.schoolmanagment.dto;

public record UserDTO(Long id, String firstName, String lastName) implements Comparable<UserDTO> {

    @Override
    public int compareTo(UserDTO o) {
        return id.compareTo(o.id);
    }
}
