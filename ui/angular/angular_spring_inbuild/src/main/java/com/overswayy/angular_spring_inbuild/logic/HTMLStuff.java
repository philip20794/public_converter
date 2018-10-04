package com.overswayy.angular_spring_inbuild.logic;

import com.overswayy.angular_spring_inbuild.models.Triple;

import java.util.ArrayList;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.pagesContainingTriples;

public class HTMLStuff {

    public static boolean isHTMLinRightFormat(String htmlLine) {
        return (htmlLine.contains("<word xMin="));
    }

    public static float getLineHeight(String htmlLine) {
        float result = 0;
        String[] wordsInLine = htmlLine.split(" ");
        for (String word:wordsInLine) {
            if (word.contains("yMin")){
                String onlyDigitals = word.replaceAll("[^\\.0123456789]","");
                result = Float.valueOf(onlyDigitals);
            }
        }
        return result;
    }

    public static float getLineX(String htmlLine) {
        float result = 0;
        String[] wordsInLine = htmlLine.split(" ");
        for (String word:wordsInLine) {
            if (word.contains("xMin")){
                String onlyDigitals = word.replaceAll("[^\\.0123456789]","");
                result = Float.valueOf(onlyDigitals);
            }
        }
        return result;
    }

    public static int getPageNumber(Triple tripleToCheck) {
        int result = -1;
        for (ArrayList<Triple> tripelsOnPage: pagesContainingTriples) {
            result += 1;
            boolean tripleToCheckIsOnThisPage = tripelsOnPage.contains(tripleToCheck);
            if (tripleToCheckIsOnThisPage){
                return result;
            }
        }
        return -1;
    }

    public static String findRightNr(String input[]){
        for (String anforderung:input) {
            if (anforderung.contains("Mini-Wettbewerb-Nr.")){
                return anforderung;
            }
        }
        return "";
    }


    public static String removeMiniWettbewerbNr(String input){
        String miniWet = findRightNr(input.split("\n"));;
        return input.replace(miniWet,"");
    }


}
