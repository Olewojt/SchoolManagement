package org.example;

import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.layout.Style;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Text;

import java.io.IOException;

import static com.itextpdf.io.font.constants.StandardFonts.HELVETICA;
import static com.itextpdf.kernel.colors.ColorConstants.BLACK;
import static com.itextpdf.layout.properties.TextAlignment.CENTER;

class PdfContent {

    static Paragraph createHeader(String reportTitle) throws IOException {
        PdfFont code = PdfFontFactory.createFont(HELVETICA);
        Style titleStyle = new Style()
                .setFont(code)
                .setFontSize(42)
                .setFontColor(BLACK)
                .setMarginBottom(28.0f);



        return new Paragraph()
                .add(new Text(reportTitle + "\n").addStyle(titleStyle))
                .setTextAlignment(CENTER)
                .setMarginBottom(20.0f);
    }

    static Paragraph createFooter() {
        return null;  // TODO: footer in future
    }
}
