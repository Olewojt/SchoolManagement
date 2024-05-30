package org.example;

import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.layout.Style;
import com.itextpdf.layout.borders.SolidBorder;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.element.Text;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.layout.properties.UnitValue;

import java.io.IOException;

import static com.itextpdf.io.font.constants.StandardFonts.HELVETICA;
import static com.itextpdf.kernel.colors.ColorConstants.BLACK;
import static com.itextpdf.layout.properties.TextAlignment.CENTER;

class TableMaker {

    /*
    * params: eachColWidth - represents percentage width of each col
    * ret: Table with then number of columns corresponding to eachColWidth
    * */
    static Table createTable(float[] eachColWidth) {
        return new Table(UnitValue.createPercentArray(eachColWidth));
    }
    static Cell createCell(String content, float borderWidth, int rowspan, int colspan, TextAlignment alignment) {
        Cell cell = new Cell(rowspan, colspan).add(new Paragraph(content));
        cell.setTextAlignment(alignment);
        cell.setBorder(new SolidBorder(borderWidth));
        return cell;
    }
}
