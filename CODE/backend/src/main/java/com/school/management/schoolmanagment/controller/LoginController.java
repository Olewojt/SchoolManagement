package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.LoginRequestDTO;
import com.school.management.schoolmanagment.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<String> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return loginService.login(loginRequestDTO);
    }
}
