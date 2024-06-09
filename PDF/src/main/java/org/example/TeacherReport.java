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
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import static com.itextpdf.io.font.constants.StandardFonts.HELVETICA;
import static com.itextpdf.kernel.colors.ColorConstants.BLACK;
import static com.itextpdf.kernel.colors.ColorConstants.GRAY;
import static com.itextpdf.layout.properties.TextAlignment.CENTER;
import static org.example.PdfContent.createHeader;
import static org.example.TableMaker.createCell;

public class TeacherReport {
    private String firstName;
    private String lastName;
    private LocalDate startDate;
    private LocalDate endDate;
    private Map<String, SubjectTaskInfo> subjectTaskInfoMap;

    private static final String USER_HOME = System.getProperty("user.home");

    private static final String DOWNLOADS_DIR = Paths.get(USER_HOME, "Downloads").toString();

    public static final String DEST = DOWNLOADS_DIR + "/teacher-report-%s-%s.pdf";

    public TeacherReport(String firstName, String lastName, LocalDate startDate, LocalDate endDate, Map<String, SubjectTaskInfo> subjectTaskInfoMap) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.subjectTaskInfoMap = subjectTaskInfoMap;
    }

    public void generate() throws IOException {
        File file = new File(DEST.formatted(firstName, lastName));
        file.getParentFile().mkdirs();

        PdfDocument pdf = new PdfDocument(new PdfWriter(String.format(DEST, firstName, lastName)));

        Document document = new Document(pdf);
        document.add(createHeader("TEACHER REPORT"));
        document.add(createUserInfoParagraph(firstName, lastName, startDate, endDate));
        document.add(createTable(subjectTaskInfoMap));
        document.close();
    }

    private Paragraph createUserInfoParagraph(String firstName, String lastName, LocalDate startDate, LocalDate endDate) throws IOException {
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

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        return new Paragraph()
                .add(new Text("Teacher: ").addStyle(labelStyle))
                .add(new Text(firstName + " " + lastName + '\n').addStyle(userInfoStyle))
                .add(new Text("Report Date Range: ").addStyle(labelStyle))
                .add(new Text(startDate.format(formatter) + " to " + endDate.format(formatter) + '\n').addStyle(userInfoStyle))
                .setMarginBottom(25.0f);
    }

    private Table createTable(Map<String, SubjectTaskInfo> subjectTaskInfoMap) {

        Table table = TableMaker.createTable(new float[]{3, 1, 1, 1});
        table.setWidth(UnitValue.createPercentValue(100));
        table.setHorizontalAlignment(HorizontalAlignment.CENTER);

        table.addCell(createCell("Subject and class", 1.0f, 1, 1, CENTER));
        table.addCell(createCell("Total Tasks", 1.0f, 1, 1, CENTER));
        table.addCell(createCell("Graded Tasks", 1.0f, 1, 1, CENTER));
        table.addCell(createCell("Grading Ratio", 1.0f, 1, 1, CENTER));

        for (Map.Entry<String, SubjectTaskInfo> entry : subjectTaskInfoMap.entrySet()) {
            String subject = entry.getKey();
            SubjectTaskInfo info = entry.getValue();

            table.addCell(createCell(subject, 1, 1, 1, CENTER));
            table.addCell(createCell(String.valueOf(info.getTotalTasks()), 1, 1, 1, CENTER));
            table.addCell(createCell(String.valueOf(info.getGradedTasks()), 1, 1, 1, CENTER));
            table.addCell(createCell(String.format("%.2f", info.getGradingRatio()), 1, 1, 1, CENTER));
        }

        return table;
    }
}
