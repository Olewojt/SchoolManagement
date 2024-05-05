package com.school.management.schoolmanagment.exception;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.ZonedDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ExistingEntityException.class)
    public ResponseEntity<Object> handleCustomBadRequestException(Exception exception, WebRequest request) {
        return new ResponseEntity<>(getExceptionDetails(exception, request), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({UsernameNotFoundException.class, EntityNotFoundException.class})
    public ResponseEntity<Object> handleNotFoundException(Exception exception, WebRequest request) {
        return new ResponseEntity<>(getExceptionDetails(exception, request), HttpStatus.NOT_FOUND);
    }

    public ExceptionDetails getExceptionDetails(Exception exception, WebRequest request) {
        return new ExceptionDetails(
                exception.getMessage(), request.getDescription(false), ZonedDateTime.now());
    }
}
