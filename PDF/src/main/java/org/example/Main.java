package org.example;

import java.io.IOException;
import java.time.LocalDate;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        HashMap<String, List<Integer>> sg = new HashMap<>();
        sg.put("Matematyka", createGradeList(4, 5, 5, 3, 4));
        sg.put("Fizyka", createGradeList(5, 4, 3, 5));
        sg.put("Chemia", createGradeList(4, 3, 5, 4,5,5));
        sg.put("Historia", createGradeList(5, 5, 4, 5));
        sg.put("Fiza", createGradeList(5, 5, 4, 5, 1, 1, 1, 2, 3, 4));

        AverageGradesReport averageGradesReport = new AverageGradesReport("Filip", "Kaczka",
                sg, "4TI");

        averageGradesReport.generate();

        // raport ocen dla nauczyciela z danego przedmiotu dla wielu klas
        List<ClassGrades> classGradesList = new ArrayList<>();

        // Matematyka 5C
        HashMap<String, List<Integer>> studentGrades5C = new HashMap<>();
        studentGrades5C.put("Jan Kowalski", createGradeList(4, 5, 5, 3, 4));
        studentGrades5C.put("Anna Nowak", createGradeList(5, 4, 3, 5));
        studentGrades5C.put("Piotr Wiśniewski", createGradeList(4, 3, 4, 4, 5));
        studentGrades5C.put("Katarzyna Zielińska", createGradeList(5, 5, 4, 5));
        studentGrades5C.put("Michał Woźniak", createGradeList(2, 3, 3, 4));
        classGradesList.add(new ClassGrades( "Matematyka", studentGrades5C));

        // Informatyka 8C
        HashMap<String, List<Integer>> studentGrades8C = new HashMap<>();
        studentGrades8C.put("Paweł Nowicki", createGradeList(4, 5, 5, 3, 4));
        studentGrades8C.put("Marcin Kowalczyk", createGradeList(5, 4, 3, 5));
        studentGrades8C.put("Ewa Piotrowska", createGradeList(4, 3, 4, 4, 5));
        studentGrades8C.put("Agnieszka Zielińska", createGradeList(5, 5, 4, 5));
        studentGrades8C.put("Tomasz Woźniak", createGradeList(2, 3, 3, 4));
        classGradesList.add(new ClassGrades( "Informatyka", studentGrades8C));

        SubjectReportForTeacher subjectReportForTeacher = new SubjectReportForTeacher("Adam", "Bobek","8C", classGradesList);
        subjectReportForTeacher.generate();


        // raport dla dyrektora na temat danego nauczyciela
        Map<String, SubjectTaskInfo> subjectTaskInfoMap = new HashMap<>();

        subjectTaskInfoMap.put("Matematyka 8C", new SubjectTaskInfo(10, 8));
        subjectTaskInfoMap.put("Fizyka 8D", new SubjectTaskInfo(8, 7));
        subjectTaskInfoMap.put("Chemia 8C", new SubjectTaskInfo(5, 5));
        subjectTaskInfoMap.put("Historia 5A", new SubjectTaskInfo(7, 6));


        TeacherReport teacherReport = new TeacherReport("Jan", "Kowalski", LocalDate.of(2023, 1, 1), LocalDate.of(2023, 12, 31), subjectTaskInfoMap);
        teacherReport.generate();

        Map<String, ClassInfo> classInfoMap = new HashMap<>();
        classInfoMap.put("5A", new ClassInfo(10,15));
        classInfoMap.put("6A", new ClassInfo(12,2));
        classInfoMap.put("7B", new ClassInfo(16,12));

        AdminReport adminReport = new AdminReport("Dyrektor", "Essior", classInfoMap);
        adminReport.generate();

    }

    private static List<Integer> createGradeList(Integer... grades) {
        return new ArrayList<>(Arrays.asList(grades));
    }
}