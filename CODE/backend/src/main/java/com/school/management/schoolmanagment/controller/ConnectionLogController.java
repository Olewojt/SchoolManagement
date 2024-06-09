package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.model.ConnectionLog;
import com.school.management.schoolmanagment.repository.ConnectionLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class ConnectionLogController {

    private final ConnectionLogRepository connectionLogRepository;

    @PostMapping("/ping")
    public ResponseEntity<String> getConnectionStatus() {
        connectionLogRepository.save(new ConnectionLog());
        return ResponseEntity.created(URI.create("")).build();
    }
}
