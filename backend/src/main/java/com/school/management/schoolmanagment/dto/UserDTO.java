package com.school.management.schoolmanagment.dto;

import java.util.Objects;

public record UserDTO(Long id, String firstName, String lastName) implements Comparable<UserDTO> {

    @Override
    public int compareTo(UserDTO o) {
        return id.compareTo(o.id);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDTO userDTO = (UserDTO) o;
        return Objects.equals(id, userDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
