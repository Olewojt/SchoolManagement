package com.school.management.schoolmanagment.mapper;

import com.school.management.schoolmanagment.model.TaskAttachment;
import com.school.management.schoolmanagment.response.TaskAttachmentResponse;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;

public class TaskAttachmentResponseMapper {

    public static List<TaskAttachmentResponse> mapToTaskAttachmentResponse(List<TaskAttachment> tasks) {
        return tasks.stream()
                .map(taskAttachment -> {
                    String uri = ServletUriComponentsBuilder
                            .fromCurrentContextPath()
                            .path("/files/")
                            .path(taskAttachment.getId())
                            .toUriString();
                    return new TaskAttachmentResponse(taskAttachment.getName(), uri, taskAttachment.getType(),
                            taskAttachment.getDataLength());
                }).toList();
    }
}
