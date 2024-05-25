package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.model.Task;
import com.school.management.schoolmanagment.model.TaskAttachment;
import com.school.management.schoolmanagment.repository.TaskAttachmentRepository;
import com.school.management.schoolmanagment.repository.TaskRepository;
import com.school.management.schoolmanagment.response.TaskAttachmentResponse;
import lombok.RequiredArgsConstructor;
import org.hibernate.engine.jdbc.BlobProxy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import static com.school.management.schoolmanagment.mapper.TaskAttachmentResponseMapper.mapToTaskAttachmentResponse;
import static java.util.Objects.requireNonNull;

@Service
@RequiredArgsConstructor
public class TaskAttachmentService {

    private final TaskAttachmentRepository taskAttachmentRepository;
    private final TaskRepository taskRepository;

    public void storeAttachmentForTask(MultipartFile file, Long taskId) throws IOException {
        Task task = taskRepository.findById(taskId).orElseThrow();

        String fileName = StringUtils.cleanPath(requireNonNull(file.getOriginalFilename()));
        TaskAttachment attachment = new TaskAttachment(fileName, file.getContentType(),
                BlobProxy.generateProxy(file.getBytes()), task);

        taskAttachmentRepository.save(attachment);
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
    }

    public void deleteAllAttachmentsFromTask(Long taskId) {
        List<TaskAttachment> allTaskAttachments = taskAttachmentRepository.getAllTaskAttachments(taskId);

        taskAttachmentRepository.deleteAll(allTaskAttachments);
    }
}
