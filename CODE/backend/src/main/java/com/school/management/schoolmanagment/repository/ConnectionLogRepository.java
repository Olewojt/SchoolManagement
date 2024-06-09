package com.school.management.schoolmanagment.repository;

import com.school.management.schoolmanagment.model.ConnectionLog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConnectionLogRepository extends CrudRepository<ConnectionLog, Long> {
}
