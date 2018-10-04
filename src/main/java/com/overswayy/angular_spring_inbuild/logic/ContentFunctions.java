package com.overswayy.angular_spring_inbuild.logic;

import com.overswayy.angular_spring_inbuild.models.Triple;

import java.util.ArrayList;

public class ContentFunctions {

    public static String getContent(ArrayList<Triple> triples) {
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < triples.size(); i++) {
            Triple currentTriple = triples.get(i);
            Triple nextTriple = null;
            if (i + 1 < triples.size()){
                nextTriple = triples.get(i + 1);
            }
            if (nextTriple != null) {
                String content = getContentOfCurrentTripleAndMergeIfLinebreak(currentTriple, nextTriple);
                boolean notMerge = content.equals(currentTriple.getContent());
                stringBuilder.append(content);
                stringBuilder.append(" ");
                if (!notMerge){
                    i += 1;
                }
            } else {
                stringBuilder.append(currentTriple.getContent());
            }
        }
        return stringBuilder.toString();
    }

    private static String getContentOfCurrentTripleAndMergeIfLinebreak(Triple currentTriple, Triple nextTriple) {
        String currentContent = currentTriple.getContent();
        String result = currentContent;
        String nextContent = nextTriple.getContent();

        char[] charsInCurrentContent = currentContent.toCharArray();
        char lastCharCurrent = charsInCurrentContent[charsInCurrentContent.length - 1];
        boolean lastCharIsMinus = String.valueOf(lastCharCurrent).equals("-");

        char[] charsInNextContent = nextContent.toCharArray();
        char firstCharNext = charsInNextContent[0];
        boolean nextIsCapital = Character.isUpperCase(firstCharNext);

        boolean sameHeight = (currentTriple.getHeight() == nextTriple.getHeight());

        if (lastCharIsMinus && !sameHeight && !nextIsCapital){
            result = result.substring(0, result.length() - 1) + nextContent;
        }
        return result;
    }

    public static void mergeContent(Triple oldTriple, Triple updateWith) {
        String contend;
        if (oldTriple.getContent().equals("")) {
            contend = updateWith.getContent();
        } else {
            contend = oldTriple.getContent() + " " + updateWith.getContent();
        }
        oldTriple.setContent(contend);
        oldTriple.setHeight(updateWith.getHeight());
        oldTriple.setX(updateWith.getX());
        oldTriple.setPreFixForWordVariable(updateWith.getPreFixForWordVariable());
    }

    public static String pars(String input){
        if ((input.contains("(") && !input.contains(")"))
                || (!input.contains("(") && input.contains(")"))){
            input = input.replace("(", "");
            input = input.replace(")", "");
        }
        String output = input
                .replace("\n","")
                .replace("  "," ")
                .replace("&amp;", "&");
        return output;
    }

}
