package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.UserDTO;
import com.school.management.schoolmanagment.model.User;

import java.util.List;

public class UserDTOMapper {

    public static List<UserDTO> mapToUserDTOs(List<User> users) {
        return users.stream()
                .map(user -> new UserDTO(user.getId(), user.getPersonalInfo().getFirstName(),
                        user.getPersonalInfo().getLastName()))
                .toList();
    }
}
