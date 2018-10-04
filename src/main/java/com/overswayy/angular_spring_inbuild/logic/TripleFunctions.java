package com.overswayy.angular_spring_inbuild.logic;

import com.overswayy.angular_spring_inbuild.models.Triple;

import java.util.ArrayList;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.*;
import static com.overswayy.angular_spring_inbuild.logic.GreenFunctions.getProcentOfGreenLinesMatching;
import static com.overswayy.angular_spring_inbuild.logic.HTMLStuff.*;
import static com.overswayy.angular_spring_inbuild.logic.Prefix.getPreFix;

public class TripleFunctions {

    public static boolean areAllTriplesGreen(ArrayList<Triple> triplesToCheck){
        ArrayList<Triple> triplesInLine = new ArrayList<>();
        for (Triple triple:triplesToCheck) {
            if (! (triplesInLine == getTriplesInSameHeight(triple))){
                triplesInLine = getTriplesInSameHeight(triple);
                String line = ContentFunctions.getContent(triplesInLine);
                float procent = getProcentOfGreenLinesMatching(line);
                boolean lineIsGreen = (procent > 80);
                if (!lineIsGreen){
                    return false;
                }
            }
        }
        return true;
    }

    public static boolean isTripleGreen(Triple tripleToCheck){
        float procent = getProcentOfGreenLinesMatching(tripleToCheck.getContent());
        return (procent > 80);
    }

    public static ArrayList<Triple> getAllTripelsBetween(ArrayList<Triple> triplesInThisBlock) {
        Triple firstTripel = triplesInThisBlock.get(0);
        Triple lastTripel = triplesInThisBlock.get(triplesInThisBlock.size() - 1);
        ArrayList<Triple> result = new ArrayList<>();
        boolean addTriple = false;
        for (Triple triple:allTriples) {
            if (triple == firstTripel){
                addTriple = true;
            }
            if (addTriple){
                result.add(triple);
            }
            if (triple == lastTripel){
                break;
            }
        }
        return result;
    }

    public static ArrayList<Triple> getAllTripelsOnPage(int pageNummer) {
        if (pageNummer == -1 || pageNummer > pagesContainingTriples.size()){
            return allTriples;
        }
        return pagesContainingTriples.get(pageNummer);
    }

    public static Triple findTripleIfExists(float heightMinToSearce, float heightMaxToSearce, int pageNummer) {
        ArrayList<Triple> triplesOnPage = getAllTripelsOnPage(pageNummer);
        for (Triple tripe:triplesOnPage) {
            float height = tripe.getHeight();
            if (height > heightMinToSearce && height < heightMaxToSearce){
                return tripe;
            }
        }
        return null;
    }

    public static ArrayList<Triple> getTriplesInSameHeight(Triple currentTriple) {
        int pageNumber = getPageNumber(currentTriple);
        ArrayList<Triple> result = new ArrayList<>();
        float height = currentTriple.getHeight();
        for (Triple triple:allTriples) {
            int pageNumberOfThisTriple = getPageNumber(triple);
            boolean samePage = pageNumber == pageNumberOfThisTriple;
            if (triple.getHeight() == height && samePage){
                result.add(triple);
            }
        }
        return result;
    }

    public static boolean isTripleNeeded(Triple triple) {
        String contet = triple.getContent();
        boolean notNeeded = contet.contains("•") ||
                contet.toLowerCase().contains("anforderungen") ||
                contet.toLowerCase().contains("zusätzliche") ||
                contet.toLowerCase().contains("wettbewerb")  ||
                contet.toLowerCase().contains("kriterien") ||
                contet.contains("JAVA-201") ||
                contet.contains("☐") ||
                contet.contains("☒");
        return (!notNeeded);
    }

    public static void createTriples() {
        String[] htmlTextSplietedByPage = text_from_html.split("</page>");
        for (String page:htmlTextSplietedByPage) {
            String[] linesOnThisPage = page.split("\n");
            ArrayList<Triple> triplesOnThisPage = new ArrayList<>();
            for (String line:linesOnThisPage) {
                boolean rightFormat = isHTMLinRightFormat(line);
                if (!rightFormat){
                    continue;
                }
                Triple triple = createTriple(line);
                allTriples.add(triple);
                triplesOnThisPage.add(triple);
                boolean tripleNeeded = isTripleNeeded(triple);
                if (tripleNeeded) {
                    neededTriples.add(triple);
                }
            }
            pagesContainingTriples.add(triplesOnThisPage);
        }
    }

    public static Triple createTriple(String line){
        String content = "";
        float height = getLineHeight(line);
        float x = getLineX(line);
        String[] splited_line = line.replace("</word>", "").split(">");
        try {
            content = splited_line[1];
        } catch (Exception e){
            System.out.print(e);
        }
        String preFix = getPreFix(content);
        return new Triple(content,height,x, preFix);
    }

}
