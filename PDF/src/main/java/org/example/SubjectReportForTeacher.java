package org.example;

import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.Style;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.element.Text;
import com.itextpdf.layout.properties.HorizontalAlignment;
import com.itextpdf.layout.properties.UnitValue;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import static com.itextpdf.io.font.constants.StandardFonts.HELVETICA;
import static com.itextpdf.kernel.colors.ColorConstants.BLACK;
import static com.itextpdf.kernel.colors.ColorConstants.GRAY;
import static com.itextpdf.layout.properties.TextAlignment.CENTER;
import static org.example.PdfContent.createHeader;
import static org.example.TableMaker.createCell;

public class SubjectReportForTeacher {
    private String firstName;
    private String lastName;
    private String className;
    private List<ClassGrades> classGradesList;

    public static final String DEST = "./target/sandbox/tables/subject-report-%s-%s.pdf";

    public SubjectReportForTeacher(String firstName, String lastName, String className, List<ClassGrades> classGradesList) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.className = className;
        this.classGradesList = classGradesList;
    }

    public void generate() throws IOException {
        File file = new File(DEST.formatted(firstName, lastName));
        file.getParentFile().mkdirs();

        PdfDocument pdf = new PdfDocument(new PdfWriter(String.format(DEST, firstName, lastName)));

        Document document = new Document(pdf);
        document.add(createHeader("SUBJECT REPORT"));

        document.add(createUserInfoParagraph(firstName, lastName));

        for (ClassGrades classGrades : classGradesList) {
            document.add(createClassHeader(classGrades.getSubjectName()));
            document.add(createTable(classGrades.getStudentGrades()));
        }

        document.close();
    }

    private Paragraph createUserInfoParagraph(String firstName, String lastName) throws IOException {
        PdfFont code = PdfFontFactory.createFont(HELVETICA);
        Style labelStyle = new Style()
                .setFont(code)
                .setFontSize(12)
                .setFontColor(GRAY);
        Style userInfoStyle = new Style()
                .setFont(code)
                .setFontSize(12)
                .setFontColor(BLACK)
                .setBold();

        return new Paragraph()
                .add(new Text("Teacher: ").addStyle(labelStyle))
                .add(new Text(firstName + ' ' + lastName + '\n').addStyle(userInfoStyle))
                .add(new Text("Class: ").addStyle(labelStyle))
                .add(new Text(className).addStyle(userInfoStyle));


    }

    private Paragraph createClassHeader(String subjectName) {
        return new Paragraph()
                .add(new Text('\n'+"Subject: " + subjectName + '\n')
                        .setFontSize(12)
                        .setItalic())
                        .setMarginBottom(10);
    }

    private Table createTable(Map<String, List<Integer>> studentGrades) {
        Table table = TableMaker.createTable(new float[]{1, 1, 1, 1});
        table.setWidth(UnitValue.createPercentValue(100));
        table.setHorizontalAlignment(HorizontalAlignment.CENTER);

        table.addCell(createCell("Student", 1.0f, 1, 1, CENTER));
        table.addCell(createCell("Grades", 1.0f, 1, 2, CENTER));
        table.addCell(createCell("Average", 1.0f, 1, 1, CENTER));

        for (Map.Entry<String, List<Integer>> entry : studentGrades.entrySet()) {
            String student = entry.getKey();
            List<Integer> grades = entry.getValue();

            table.addCell(createCell(student, 1, 1, 1, CENTER));
            String gradesJoined = String.join(", ", grades.stream().map(String::valueOf).toList());
            table.addCell(createCell(gradesJoined, 1, 1, 2, CENTER));
            double average = grades.stream().mapToInt(grade -> grade).average().getAsDouble();
            average = Math.round(average * 100.00) / 100.00;

            table.addCell(createCell(String.valueOf(average), 1, 1, 1, CENTER));
        }

        return table;
    }
}
