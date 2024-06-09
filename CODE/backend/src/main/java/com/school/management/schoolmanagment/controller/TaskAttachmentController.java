package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.response.TaskAttachmentResponse;
import com.school.management.schoolmanagment.service.TaskAttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/attachments")
@Transactional
public class TaskAttachmentController {

    private final TaskAttachmentService taskAttachmentService;

    @PostMapping("/upload/{taskId}")
    public ResponseEntity<String> storeAttachmentForTask(@RequestParam("file") MultipartFile file,
                                                         @PathVariable("taskId") Long taskId) {
        String message;
        try {
            taskAttachmentService.storeAttachmentForTask(file, taskId);

            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }

    @GetMapping("/all/{taskId}")
    public ResponseEntity<List<TaskAttachmentResponse>> getAllTaskAttachments(@PathVariable("taskId") Long taskId) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(taskAttachmentService.getAllTaskAttachments(taskId));
    }

    @GetMapping("/{taskAttachmentId}")
    public ResponseEntity<byte[]> getFileBytes(@PathVariable String taskAttachmentId) {
        return ResponseEntity.ok(taskAttachmentService.getFileBytes(taskAttachmentId));
    }

    @DeleteMapping("/{taskAttachmentId}")
    public ResponseEntity<Void> deleteAttachmentFromTask(@PathVariable String taskAttachmentId) {
        taskAttachmentService.deleteAttachmentFromTask(taskAttachmentId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/all/{taskId}")
    public ResponseEntity<Void> deleteAllAttachmentsFromTask(@PathVariable Long taskId) {
        taskAttachmentService.deleteAllAttachmentsFromTask(taskId);
        return ResponseEntity.noContent().build();
    }
}
