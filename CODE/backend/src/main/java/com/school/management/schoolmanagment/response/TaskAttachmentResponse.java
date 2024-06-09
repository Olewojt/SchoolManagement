package com.school.management.schoolmanagment.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


public record TaskAttachmentResponse(String id, String name, String url, String type, Long size) {

}
