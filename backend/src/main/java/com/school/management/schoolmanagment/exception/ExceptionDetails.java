package com.school.management.schoolmanagment.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.ZonedDateTime;

@AllArgsConstructor
@Getter
public class ExceptionDetails {

    private final String message;
    private final String details;
    private final ZonedDateTime timestamp;
}
