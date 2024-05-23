package com.school.management.schoolmanagment.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Blob;
import java.sql.SQLException;

import static javax.persistence.FetchType.LAZY;

@Entity
@NoArgsConstructor
@Data
public class TaskAttachment {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    private String name;
    private String type;
    @JsonIgnore
    @Lob
    private Blob data;
    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    private Task task;

    public TaskAttachment(String name, String type, Blob data, Task task) {
        this.name = name;
        this.type = type;
        this.data = data;
        this.task = task;
    }

    public Long getDataLength() {
        try {
            return this.data.length();
        } catch (SQLException e) {
            return 0L;
        }
    }

    public byte[] getDataBytes() {
        try {
            return this.data.getBytes(1L, Math.toIntExact(getDataLength()));
        } catch (SQLException e) {
            return new byte[]{};
        }
    }
}
