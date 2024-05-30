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
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import static com.itextpdf.io.font.constants.StandardFonts.HELVETICA;
import static com.itextpdf.kernel.colors.ColorConstants.BLACK;
import static com.itextpdf.kernel.colors.ColorConstants.GRAY;
import static com.itextpdf.layout.properties.TextAlignment.CENTER;
import static org.example.PdfContent.createHeader;
import static org.example.TableMaker.createCell;

public class AdminReport {

    private String firstNameOfCreator;
    private String lastNameOfCreator;

    private Map<String, ClassInfo> classInfoMap;
    public static final String DEST = "./target/sandbox/tables/admin-report-%s-%s.pdf";

    public AdminReport(String firstNameOfCreator, String lastNameOfCreator, Map<String, ClassInfo> classInfoMap) {
        this.firstNameOfCreator = firstNameOfCreator;
        this.lastNameOfCreator = lastNameOfCreator;
        this.classInfoMap = classInfoMap;
    }

    public void generate() throws IOException {
        File file = new File(DEST.formatted(firstNameOfCreator, lastNameOfCreator));
        file.getParentFile().mkdirs();

        PdfDocument pdf = new PdfDocument(new PdfWriter(String.format(DEST, firstNameOfCreator, lastNameOfCreator)));

        Document document = new Document(pdf);
        document.add(createHeader("Class info report"));
        document.add(createUserInfoParagraph(firstNameOfCreator, lastNameOfCreator));
        document.add(createTable(classInfoMap));
        document.close();
    }

    private Paragraph createUserInfoParagraph(String firstName,
                                              String lastName) throws IOException {
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
                .add(new Text("First Name: ").addStyle(labelStyle))
                .add(new Text(firstName + '\n').addStyle(userInfoStyle))
                .add(new Text("Last Name: ").addStyle(labelStyle))
                .add(new Text(lastName + '\n').addStyle(userInfoStyle))
                .setMarginBottom(25.0f);
    }

    private Table createTable(Map<String, ClassInfo> classInfoMap) {

        Table table = TableMaker.createTable(new float[]{3, 1, 1, 1});
        table.setWidth(UnitValue.createPercentValue(100));
        table.setHorizontalAlignment(HorizontalAlignment.CENTER);

        table.addCell(createCell("Class", 1.0f, 1, 1, CENTER));
        table.addCell(createCell("Village members", 1.0f, 1, 1, CENTER));
        table.addCell(createCell("City members", 1.0f, 1, 1, CENTER));
        table.addCell(createCell("% of city members", 1.0f, 1, 1, CENTER));

        for (Map.Entry<String, ClassInfo> entry : classInfoMap.entrySet()) {
            String className = entry.getKey();
            ClassInfo info = entry.getValue();
            double ratio = (double) info.getCityMembers() / (info.getCityMembers() + info.getVillageMembers());
            table.addCell(createCell(className, 1, 1, 1, CENTER));
            table.addCell(createCell(String.valueOf(info.getVillageMembers()), 1, 1, 1, CENTER));
            table.addCell(createCell(String.valueOf(info.getCityMembers()), 1, 1, 1, CENTER));
            table.addCell(createCell(String.format("%.2f",ratio ), 1, 1, 1, CENTER));
        }

        return table;
    }
}

