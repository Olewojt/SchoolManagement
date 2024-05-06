package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.UserInDTO;
import com.school.management.schoolmanagment.service.RegistrationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:5173")  // TODO: cors() config in SpringSecirity
    public void registerUser(@RequestBody UserInDTO userInDTO) {
        registrationService.registerUser(userInDTO);
    }
}
