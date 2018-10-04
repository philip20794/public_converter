package com.overswayy.angular_spring_inbuild.logic;

import com.overswayy.angular_spring_inbuild.models.Triple;

import static com.overswayy.angular_spring_inbuild.logic.HTMLStuff.getPageNumber;
import static com.overswayy.angular_spring_inbuild.logic.TripleFunctions.findTripleIfExists;

public class Checkboxen {

    public static boolean getHasCheckbox(Triple tripleToCheck) {
        try {
            Triple triple = getCheckbox(tripleToCheck);
            return (triple.getContent().contains("☒") || triple.getContent().contains("☐"));
        }catch (NullPointerException e){
            return false;
        }
    }

    public static Triple getCheckbox(Triple triple){
        float heightOfBoxMax = triple.getHeight() + 6.5f;
        float heightOfBoxMin = triple.getHeight() + 6f;
        int pageNumberOfTripleToCheck = getPageNumber(triple);
        return findTripleIfExists(heightOfBoxMin, heightOfBoxMax, pageNumberOfTripleToCheck);
    }

    public static boolean getIsChecked(Triple currentTriple) {
        float heightOfBoxMax = currentTriple.getHeight() + 6.5f;
        float heightOfBoxMin = currentTriple.getHeight() + 6f;
        int pageNumberOfTripleToCheck = getPageNumber(currentTriple);
        Triple triple = findTripleIfExists(heightOfBoxMin, heightOfBoxMax, pageNumberOfTripleToCheck);
        return triple.getContent().contains("☒");
    }
    
}
