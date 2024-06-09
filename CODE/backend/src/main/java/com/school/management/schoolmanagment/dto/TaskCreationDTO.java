package com.school.management.schoolmanagment.dto;

import java.time.LocalDateTime;
import java.util.List;

public record TaskCreationDTO(String title, LocalDateTime deadline, String subjectName, String schoolClassName,
                              String description, List<List<TaskMemberDTO>> taskMembersGroups,
                              Long taskCreatorId) {
}
