package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.model.TaskAttachment;
import com.school.management.schoolmanagment.repository.TaskAttachmentRepository;
import com.school.management.schoolmanagment.repository.TaskRepository;
import com.school.management.schoolmanagment.response.TaskAttachmentResponse;
import lombok.RequiredArgsConstructor;
import org.hibernate.engine.jdbc.BlobProxy;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

import static com.school.management.schoolmanagment.mapper.TaskAttachmentResponseMapper.mapToTaskAttachmentResponse;
import static java.util.Objects.requireNonNull;

@Service
@RequiredArgsConstructor
public class TaskAttachmentService {

    private final TaskAttachmentRepository taskAttachmentRepository;
    private final TaskRepository taskRepository;
    private final NotificationService notificationService;

    public void storeAttachmentForTask(MultipartFile file, Long taskId) throws IOException {
        Task task = taskRepository.findById(taskId).orElseThrow();

        String fileName = StringUtils.cleanPath(requireNonNull(file.getOriginalFilename()));
        TaskAttachment attachment = new TaskAttachment(fileName, file.getContentType(),
                BlobProxy.generateProxy(file.getBytes()), task);

        taskAttachmentRepository.save(attachment);

        notificationService.sendNotificationToUser("Success attachment files to task %s.".formatted(task.getTitle()));
        notificationService.sendNotificationToUser(task.getTaskCreator().getId(),
                "Student attached files to task: %s.".formatted(task.getTitle()));
    }

    public List<TaskAttachmentResponse> getAllTaskAttachments(Long taskId) {
        List<TaskAttachment> allTaskAttachments = taskAttachmentRepository.getAllTaskAttachments(taskId);
        return mapToTaskAttachmentResponse(allTaskAttachments);
    }

    public byte[] getFileBytes(String taskAttachmentId) {
        TaskAttachment attachment = taskAttachmentRepository.findById(taskAttachmentId)
                .orElseThrow();

        return attachment.getDataBytes();
    }

    public void deleteAttachmentFromTask(String taskAttachmentId) {
        TaskAttachment attachment = taskAttachmentRepository.findById(taskAttachmentId)
                .orElseThrow();

        taskAttachmentRepository.delete(attachment);

        notificationService.sendNotificationToUser("Success deleting file: %s from task %s."
                .formatted(attachment.getName(), attachment.getTask().getTitle()));

        notificationService.sendNotificationToUser(attachment.getTask()
                        .getTaskCreator()
                        .getId(),
                "Student deleted file: %s from task %s.".formatted(attachment.getName(), attachment.getTask().getTitle()
                ));
    }

    public void deleteAllAttachmentsFromTask(Long taskId) {
        List<TaskAttachment> allTaskAttachments = taskAttachmentRepository.getAllTaskAttachments(taskId);

        taskAttachmentRepository.deleteAll(allTaskAttachments);

        notificationService.sendNotificationToUser("Success deleting files from task");
    }
}
