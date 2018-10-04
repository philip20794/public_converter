package com.overswayy.angular_spring_inbuild.Strings;

import com.overswayy.angular_spring_inbuild.models.Block;
import com.overswayy.angular_spring_inbuild.models.Triple;
import org.apache.poi.xwpf.usermodel.XWPFDocument;

import java.io.IOException;
import java.util.ArrayList;

import static com.overswayy.angular_spring_inbuild.doc.FileStuff.getText;
import static com.overswayy.angular_spring_inbuild.logic.HTMLStuff.removeMiniWettbewerbNr;

public class Variables {

    public static String fileName = "";
    public static XWPFDocument doc = null;
    public static String stringPathGeneratedFilesWindows = ".\\src\\main\\resources\\generated_files\\";
    public static String stringPathGeneratedFiles = "src/main/resources/generated_files/";
    public static String text_form_abiWord;
    public static String ocr_only_green;
    public static String text_from_html;
    public static String current_prefix;
    public static String path_to_saveWindows = "upload-dir\\";
    public static String path_to_save = "upload-dir/";
    public static ArrayList<Block> blocks;
    public static ArrayList<Triple> allTriples;
    public static ArrayList<Triple> neededTriples;
    public static ArrayList<ArrayList<Triple>> pagesContainingTriples;
    public static float BEGINN_NEUER_ZELLE;
    public static float BEGINN_NEUER_ZELLE_IN_AUFLISTUNG;
    public static float A_KRITERIEN_ZEILENBEGINN;
    public static float BULLETPOINT_ZEILENBEGINN;
    public static float B_KRITERIEN_ZEILENBEGINN;
    public static String pathDocVorlageWindows = ".\\Word-Vorlage\\adesso_template.dotx";
    public static String pathDocVorlage = "Word-Vorlage/adesso_template.dotx";
    public static String hintSprachkentnisse = "Muttersprache ist Deutsch;\n" +
            "Englisch IELTS-Prüfung mit 6.5 abgeschlossen (=B2)";

    public static String[] prefixListForWordVariable
            ={"","notNeeded","Akrit","Bkrit","notNeeded"};

    public static String[] buchstaben
            = {"a","b","c","d","e","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","w","v","x","y","z"};
    public static String[] buchstabenToRemove
            = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","v","x","y","z"};

    public static String[] hintsBlock(String anforderung){
        String[] result = {String.format("Über 15 Jahre Erfahrungen %s." + "\n" +
                "Erfahrungen in diversen Projekten bei unterschiedlichsten Unternehmen und " +
                "Behörden und in den unterschiedlichsten Branchen gesammelt (Projekt1, Projekt2, Projekt3).", anforderung),
                String.format("Seit Beginn der Entwicklertätigkeit (1994) liegen die Erfahrungen %s vor." + "\n" +
                        "Er hat Erfahrungen in diversen Projekten bei unterschiedlichsten " +
                        "Unternehmen und Behörden und in den unterschiedlichsten Branchen " +
                        "gesammelt (Projekt1, Projekt2, Projekt3).", anforderung),
                String.format("Seit über 15 Jahre Erfahrungen %s." + "\n" +
                        "In Projekten wie Projekt1, Projekt2 und Projekt3 eingesetzt.", anforderung),
                String.format("Umfangreiche praktische Erfahrungen seit 10 Jahren %s." + "\n" +
                        "Bereits in diversen Projekten verwendet (Projekt1, Projekt2, Projekt3)", anforderung),
                String.format("Seit 15 Jahren tiefgehende Kenntnisse %s." + "\n" +
                        "Projekte: Projekt1, Projekt2, Projekt.",anforderung)

        };
        return result;
    }

    public static String[] hintsItem(String anforderung){
        String[] result = {String.format("%s setzt er seit Ende der 90-er ein, hat bereits " +
                "mehrere Bücher zu dem Thema gelesen und in diversen Projekten eingesetzt.", anforderung),
                String.format("Seit 15 Jahren Erfahrung mit %s in allen Projekten " +
                        "(u.a. Projekt1, Projekt2 und Projekt3 ).", anforderung),
                String.format("Seit 10 Jahren Erfahrungen mit %s.", anforderung),
                "Seit 10 Jahren in diversen Projekten (u.a. Projekt1, Projekt2 und Projekt3) eingesetzt.",
                "Bereits in diversen Projekten verwendet (Projekt1, Projekt2 und Projekt3)."
        };
        return result;
    }


    public static void genStaticVariables() throws IOException {
        text_form_abiWord = removeMiniWettbewerbNr(getText(fileName+".txt"));
        ocr_only_green = getText(fileName+"_only_green.txt")
                .replace("IVI", "M")
                .replace("I\\/I", "M");
        text_from_html = getText(fileName+"_html.txt");
        allTriples = new ArrayList<>();
        neededTriples = new ArrayList<>();
        pagesContainingTriples = new ArrayList<>();
        current_prefix = prefixListForWordVariable[0];
        float pageWide = getPageWide();
        if (pageWide > 594f && pageWide < 596f) {
            BEGINN_NEUER_ZELLE = 16.65f;
            BEGINN_NEUER_ZELLE_IN_AUFLISTUNG = 18.65f;
            A_KRITERIEN_ZEILENBEGINN = 71f;
            BULLETPOINT_ZEILENBEGINN = 106f;
            B_KRITERIEN_ZEILENBEGINN = 111f;
        } else if (pageWide > 611f && pageWide < 613f){
            BEGINN_NEUER_ZELLE = 15.65f;
            BEGINN_NEUER_ZELLE_IN_AUFLISTUNG = 17.65f;
            A_KRITERIEN_ZEILENBEGINN = 93f;
            BULLETPOINT_ZEILENBEGINN = 126f;
            B_KRITERIEN_ZEILENBEGINN = 130f;
        }
    }

    private static float getPageWide() {
        String[] htmlPages = text_from_html.split("<page");
        String[] words = htmlPages[1].split(" ");
        float result = 0;
        for (String word:words) {
            if (word.contains("width=")){
                String value = word.replace("width=", "")
                        .replace("\"", "");
                try {
                    result = Float.valueOf(value);
                } catch (Exception e){
                    System.out.println(e);
                }
            }
        }
        return result;
    }

    public static void genFileName(String[] args){
        try {
            fileName = args[0].replace(".pdf","");
        }catch (Exception e){
            fileName = "No_Name_Given";
        }
    }
}
