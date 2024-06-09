package com.school.management.schoolmanagment.dto;

import lombok.Builder;

@Builder
public record MailBodyDTO(String to, String subject, String text) {

}
