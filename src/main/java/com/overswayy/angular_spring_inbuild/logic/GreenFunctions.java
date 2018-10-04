package com.overswayy.angular_spring_inbuild.logic;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.ocr_only_green;
import static com.overswayy.angular_spring_inbuild.logic.ContentFunctions.pars;

public class GreenFunctions {

    public static float getProcentOfGreenLinesMatching(String lineToCheck) {
        String[] greenLines = ocr_only_green.split("\n");
        float bestProcent = 0;
        for (String greenLine:greenLines) {
            float machtingProcent = getMatchingProcent(pars(greenLine), lineToCheck);
            if (machtingProcent > bestProcent){
                bestProcent = machtingProcent;
            }
        }
        return bestProcent;
    }


    public static float getMatchingProcent(String greenLine, String lineToCheck) {
        float result = 0;
        String[] greenWords = greenLine.replace("  "," ").split(" ");
        String[] wordsToCheck = lineToCheck.replace("  "," ").split(" ");
        int numberOfMachtingElements = getNumberOfMatchingElements(greenWords, wordsToCheck);
        if (greenWords.length != 0) {
            result = (numberOfMachtingElements*100) / greenWords.length;
        }
        return result;

    }

    public static int getNumberOfMatchingElements(String[] greenWords, String[] wordsToCheck) {
        int result = 0;
        int len;
        if (greenWords.length > wordsToCheck.length){
            len = wordsToCheck.length;
        }else {
            len = greenWords.length;
        }
        for (int i = 0; i < len; i++) {
            if (wordsAreAlmosteSame(greenWords[i], wordsToCheck[i])){
                result += 1;
            }
        }
        return result;
    }

    public static boolean wordsAreAlmosteSame(String word1, String word2) {
        char[] chars1 = word1.toCharArray();
        char[] chars2 = word2.toCharArray();
        int matches = 0;
        int lenSmaler;
        int lenLagerne;
        if (chars1.length > chars2.length){
            lenSmaler = chars2.length;
            lenLagerne = chars1.length;
        }else {
            lenSmaler = chars1.length;
            lenLagerne = chars2.length;
        }
        for (int i = 0; i < lenSmaler; i++) {
            if (chars1[i]==chars2[i]){
                matches += 1;
            }
        }
        float wordMachtingPercent = 0;
        if (lenLagerne != 0) {
            wordMachtingPercent = (matches * 100) / lenLagerne;
        }
        return (wordMachtingPercent > 80);
    }


}
