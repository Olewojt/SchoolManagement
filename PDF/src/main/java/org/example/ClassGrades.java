package org.example;

import java.util.List;
import java.util.Map;

public class ClassGrades {

    private String subjectName;
    private Map<String, List<Integer>> studentGrades;

    public ClassGrades(String subjectName, Map<String, List<Integer>> studentGrades) {

        this.subjectName = subjectName;
        this.studentGrades = studentGrades;
    }


    public String getSubjectName() {
        return subjectName;
    }

    public Map<String, List<Integer>> getStudentGrades() {
        return studentGrades;
    }
}