package com.school.management.schoolmanagment.controller;

import com.school.management.schoolmanagment.dto.MailBodyDTO;
import com.school.management.schoolmanagment.model.ForgotPassword;
import com.school.management.schoolmanagment.model.User;
import com.school.management.schoolmanagment.repository.ForgotPasswordRespority;
import com.school.management.schoolmanagment.repository.UserRepository;
import com.school.management.schoolmanagment.response.ChangePassword;
import com.school.management.schoolmanagment.service.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Date;
import java.util.Objects;
import java.util.Random;

@RestController
@RequestMapping("/forgotPassword")
public class ForgotPasswordController {

    private final UserRepository userRepository;
    private final EmailService emailService;
    private final ForgotPasswordRespority forgotPasswordRepository;
    private final PasswordEncoder passwordEncoder;

    public ForgotPasswordController(UserRepository userRepository, EmailService emailService, ForgotPasswordRespority forgotPasswordRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.forgotPasswordRepository = forgotPasswordRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/verifyMail/{email}")
    public ResponseEntity<String> verifyEmail(@PathVariable String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Invalid email provided!"));

        int otp = otpGenerator();
        MailBodyDTO mailBodyDTO = MailBodyDTO.builder()
                .to(email)
                .text("Here u are my guy, your code. Go ahead and take it: \n\n" + otp)
                .subject("Code for forgot password request")
                .build();

        ForgotPassword fp = ForgotPassword.builder()
                .otp(otp)
                .expirationTime(new Date(System.currentTimeMillis() + 70 * 1000))
                .user(user)
                .build();

        emailService.sendSimpleMessage(mailBodyDTO);
        forgotPasswordRepository.save(fp);

        return ResponseEntity.ok("Email sent for verification");
    }

    @PostMapping("/verifyOtp/{otp}/{email}")
    public ResponseEntity<String> verifyOtp(@PathVariable Integer otp, @PathVariable String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Invalid email provided"));

        ForgotPassword fp = forgotPasswordRepository.findByOtpAndUser(otp, user)
                .orElseThrow(() -> new RuntimeException("Invalid OTP for email"));

        if (fp.getExpirationTime().before(Date.from(Instant.now()))) {
            forgotPasswordRepository.deleteById(fp.getFpid());
            return new ResponseEntity<>("OTP has expired!", HttpStatus.EXPECTATION_FAILED);
        }

        return ResponseEntity.ok("OTP verified");
    }

    @PostMapping("/changePassword/{email}")
    public ResponseEntity<String> changePasswordHandler(@RequestBody ChangePassword changePassword,
                                                        @PathVariable String email) {
        if (!Objects.equals(changePassword.password(), changePassword.repeatPassword())) {
            return new ResponseEntity<>("Passwords do not match", HttpStatus.EXPECTATION_FAILED);
        }

        // Update the password without encoding
        userRepository.updatePassword(email, passwordEncoder.encode(changePassword.password()));

        return ResponseEntity.ok("Password has been changed successfully!");
    }

    public Integer otpGenerator() {
        Random random = new Random();
        return random.nextInt(900_000) + 100_000; // Ensures a 6-digit OTP
    }
}
