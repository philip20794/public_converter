package com.overswayy.angular_spring_inbuild.doc;

import com.overswayy.angular_spring_inbuild.Strings.Variables;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.xwpf.usermodel.*;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.*;

public class DocFunctions {

    public static void deltetRest(XWPFDocument doc){
        for (int i = 0 ; i < buchstabenToRemove.length; i++) {
            String var = "Akrit"+buchstabenToRemove[i];
            delteRow(doc,var);
            String var2 = "Bkrit"+buchstabenToRemove[i];
            delteRow(doc,var2);
            for (int j = 0 ; j < buchstabenToRemove.length; j++) {
                String varToDelet = "Akritlist"+buchstabenToRemove[i]+buchstabenToRemove[j];
                delteRow(doc,varToDelet);
                String var2ToDelet = "Bkritlist"+buchstabenToRemove[i]+buchstabenToRemove[j];
                delteRow(doc,var2ToDelet);
            }
        }
    }

    public static XWPFDocument replaceText(XWPFDocument doc, String findText, String replaceText, Boolean isGreen){
        for (XWPFParagraph p : doc.getParagraphs()) {
            List<XWPFRun> runs = p.getRuns();
            if (runs != null) {
                for (XWPFRun r : runs) {
                    String text = r.getText(0);

                    if (text != null && text.contains(findText)) {
                        r.setBold(isGreen);
                        text = text.replace(findText, replaceText);
                        r.setText(text, 0);
                    }
                }
            }
        }
        for (XWPFTable tbl : doc.getTables()) {
            for (XWPFTableRow row : tbl.getRows()) {
                for (XWPFTableCell cell : row.getTableCells()) {
                    for (XWPFParagraph p : cell.getParagraphs()) {
                        for (XWPFRun r : p.getRuns()) {
                            String text = r.getText(0);
                            if (text != null && text.contains(findText)) {
                                r.setBold(isGreen);
                                text = text.replace(findText, replaceText);
                                r.setText(text,0);
                            }
                        }
                    }
                }
            }
        }
        return doc;
    }

    public static void delteRow( XWPFDocument document, String varInRow ) {
        List<XWPFTable> tables = document.getTables();
        XWPFTable theTable = tables.get( 0 );
        int rowPosToDelete = -1;
        for (XWPFTableRow row : theTable.getRows()) {
            rowPosToDelete += 1;
            for (XWPFTableCell cell : row.getTableCells()) {
                for (XWPFParagraph p : cell.getParagraphs()) {
                    for (XWPFRun r : p.getRuns()) {
                        String text = r.getText(0);
                        if (text != null && text.contains(varInRow)) {
                            theTable.removeRow(rowPosToDelete);
                            return;
                        }
                    }
                }
            }
        }
    }

    public static void saveWord(XWPFDocument doc, String fileName) throws IOException {
        String patheTOSave = Variables.path_to_save + fileName + ".doc";
        doc.write(new FileOutputStream(patheTOSave));
        System.out.println("SAVED");
    }


    public static void genWordVorlage() throws InvalidFormatException, IOException{
        String filePath = pathDocVorlage;
        OPCPackage opcPackage;
        opcPackage = OPCPackage.open(filePath);
        if (opcPackage != null) {
            doc = new XWPFDocument(opcPackage);
        }
    }

}
