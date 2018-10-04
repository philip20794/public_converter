package com.overswayy.angular_spring_inbuild.doc;

import com.overswayy.angular_spring_inbuild.logic.ContentFunctions;
import com.overswayy.angular_spring_inbuild.models.Triple;

import java.util.ArrayList;
import java.util.concurrent.ThreadLocalRandom;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.*;

public class Hints {

    private static boolean kenntnisse;
    private static boolean guteKenntnisse;
    private static boolean sehrGuteKenntnisse;
    private static boolean ersteErfahrungen;
    private static boolean praktischeErfahrungen;
    private static boolean umfangreichePraktischeErfahrungen;
    private static boolean sprachkenntnisse;


    public static String getHint(Triple item, Triple question){
        klassifizierung(question.getContent());
        String[] hints = hintsItem(item.getContent());
        String result = getHintText(hints) ;
        return result;
    }

    public static String getHint(ArrayList<Triple> triples){
        String content = ContentFunctions.getContent(triples);
        klassifizierung(content);
        String anforderung = getAnforderung(content);
        String[] hints = hintsBlock(anforderung);
        String result = getHintText(hints);
        return result;
    }

    private static String getHintText(String[] hints){
        String result;
        if (sprachkenntnisse){
            result = hintSprachkentnisse;
        }else {
            int randomNum = ThreadLocalRandom.current().nextInt(0, hints.length);
            result = hints[randomNum] + mindestAnforderung();
        }
        return result;
    }

    private static String getAnforderung(String content) {
        StringBuilder stringBuilder = new StringBuilder();
        String[] words = content.split(" ");
        boolean add = false;
        for (String word:words) {
            if (add){
                stringBuilder.append(" ");
                stringBuilder.append(word);
            }
            if ((word.equals("in") || word.equals("im")) && !add){
                add = true;
                stringBuilder.append(word);
            }
        }
        return stringBuilder.toString();
    }

    private static void klassifizierung(String content){
        kenntnisse= content.toLowerCase().contains("kenntnisse");
        guteKenntnisse= content.toLowerCase().contains("gute kenntnisse");
        sehrGuteKenntnisse= content.toLowerCase().contains("sehr gute kentnisse");
        ersteErfahrungen= content.toLowerCase().contains("erste erfahrungen");
        praktischeErfahrungen= content.toLowerCase().contains("praktische erfahrungen");
        umfangreichePraktischeErfahrungen = content.toLowerCase().contains("umfangreiche praktische erfahrungen");
        sprachkenntnisse = content.toLowerCase().contains("sprachkenntnisse:");
    }

    private static String mindestAnforderung(){
        String result;
        if (umfangreichePraktischeErfahrungen){
            result = "\n" + "[Muss mindesten 3 Jahre in Projekten verwendet worden sein]";
        } else if (praktischeErfahrungen){
            result = "\n" + "[Muss mindesten 1 Jahr in Projekten verwendet worden sein]";
        } else if (ersteErfahrungen){
            result = "\n" + "[Muss mindesten in einem Projekt verwendet worden sein]";
        } else if (sehrGuteKenntnisse){
            result = "\n" + "[Muss lediglich sehr gute theoretische Kentnisse besitzen]";
        } else if (guteKenntnisse){
            result = "\n" + "[Muss lediglich gute theoretische Kentnisse besitzen]";
        } else if (kenntnisse){
            result = "\n" + "[Muss lediglich theoretische Kentnisse besitzen]";
        } else {
            result = "";
        }
        return result;
    }

}
