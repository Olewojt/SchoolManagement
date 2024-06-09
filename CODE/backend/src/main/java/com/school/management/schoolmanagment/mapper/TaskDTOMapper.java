package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.dto.TaskDTO;
import com.school.management.schoolmanagment.dto.UserDTO;
import com.school.management.schoolmanagment.model.Task;

import java.util.List;

public class TaskDTOMapper {

    public static List<TaskDTO> mapToTaskDTO(List<Task> tasks) {
        return tasks.stream()
                .map(TaskDTOMapper::mapToTaskDTO)
                .toList();
    }

    public static TaskDTO mapToTaskDTO(Task task) {
        return new TaskDTO(task.getId(), task.getTitle(), task.getDescription(),
                task.getStatus().toString(), task.getSubject().getName(), task.getCreatedAt().toString(),
                task.getUsers().stream()
                        .map(member -> new UserDTO(member.getId(), member.getPersonalInfo().getFirstName(),
                                member.getPersonalInfo().getLastName())).sorted().toList(),
                task.getUsers().iterator().next().getSchoolClass().getName(),
                task.getGrade(),
                task.getDeadline());
    }

}
