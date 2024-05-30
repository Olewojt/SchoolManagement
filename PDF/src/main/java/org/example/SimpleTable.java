package org.example;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.borders.SolidBorder;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.element.Text;
import com.itextpdf.layout.properties.HorizontalAlignment;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.layout.properties.UnitValue;

import java.io.File;

// Labs
public class SimpleTable {
    public static final String DEST = "./target/sandbox/tables/simple_table13.pdf";
    private String[][] DATA = {
            {"ABC123", "The descriptive text may be more than one line and the text should wrap automatically",
                    "$5.00", "10", "$50.00"},
            {"QRS557", "Another description", "$100.00", "15", "$1,500.00"},
            {"XYZ999", "Some stuff", "$1.00", "2", "$2.00"}
    };

    public static void main(String[] args) throws Exception {
        File file = new File(DEST);
        file.getParentFile().mkdirs();

        new SimpleTable().manipulatePdf(DEST);
    }

    protected void manipulatePdf(String dest) throws Exception {
        PdfDocument pdfDoc = new PdfDocument(new PdfWriter(dest));
        Document doc = new Document(pdfDoc);

        Table table = new Table(UnitValue.createPercentArray(new float[]{1, 1, 2, 1, 1, 1, 1, 1, 1, 1}));
        Table table2 = new Table(UnitValue.createPercentArray(new float[]{1, 1, 1, 1, 1}));
        table2.setHorizontalAlignment(HorizontalAlignment.RIGHT);

        table.addCell(createCell("L.p", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("Index", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("Name", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("J.m", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("Quantity", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("Netto", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("Stawka VAT", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("Netto Value", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("VAT", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("Wartosc brutto", 2, 1, 1, TextAlignment.LEFT));

        table.addCell(createCell("1.", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("T000021", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("amortyzacja", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("szt", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("1", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("1222,00", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("23%", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("1222,00", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("281,06", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("1503,06", 2, 1, 1, TextAlignment.LEFT));

        table.addCell(createCell("2.", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("T000016", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("cos", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("szt", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("1", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("1,88", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("5%", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("1,88", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("0,09", 2, 1, 1, TextAlignment.LEFT));
        table.addCell(createCell("1,97", 2, 1, 1, TextAlignment.LEFT));

        table2.addCell(createCell("Podsumowanie", 1, 2, 1, TextAlignment.LEFT));
        table2.addCell(createCell("Stawka VAT", 1, 1, 1, TextAlignment.LEFT));
        table2.addCell(createCell("Wartosc netto", 1, 1, 1, TextAlignment.LEFT));
        table2.addCell(createCell("VAT", 1, 1, 1, TextAlignment.LEFT));
        table2.addCell(createCell("Wartosc brutto", 1, 1, 1, TextAlignment.LEFT));

        table2.addCell(createCell("23%", 1, 1, 1, TextAlignment.LEFT));
        table2.addCell(createCell("1222,00", 1, 1, 1, TextAlignment.LEFT));
        table2.addCell(createCell("281,06", 1, 1, 1, TextAlignment.LEFT));
        table2.addCell(createCell("1503,06", 1, 1, 1, TextAlignment.LEFT));

        table2.addCell(createCell("Razem", 1, 1, 2, TextAlignment.LEFT));
        table2.addCell(createCell("1223,88", 1, 1, 1, TextAlignment.LEFT));
        table2.addCell(createCell("281,15", 1, 1, 1, TextAlignment.LEFT));
        table2.addCell(createCell("1505,03", 1, 1, 1, TextAlignment.LEFT));

        Paragraph paragraph = new Paragraph()
                .add("Razem do zaplaty 1503,03zl\n")
                .add("Kwota zaplacona 0,00\n")
                .add("Pozostalo do zaplaty 1503,03zl\n")
                .add(new Text("Podkreslone").setUnderline().setItalic());

        paragraph.setTextAlignment(TextAlignment.RIGHT);


        doc.add(table);
        doc.add(table2);

        doc.add(paragraph);

        doc.close();
    }

    private static Cell createCell(String content, float borderWidth, int rowspan, int colspan, TextAlignment alignment) {
        Cell cell = new Cell(rowspan, colspan).add(new Paragraph(content));
        cell.setTextAlignment(alignment);
        cell.setBorder(new SolidBorder(borderWidth));
        return cell;
    }
}
