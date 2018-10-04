package com.overswayy.angular_spring_inbuild.logic;

import com.overswayy.angular_spring_inbuild.models.Triple;

import java.util.ArrayList;

import static com.overswayy.angular_spring_inbuild.logic.TripleFunctions.getAllTripelsBetween;
import static com.overswayy.angular_spring_inbuild.logic.Checkboxen.*;

public class BlockBools {

    public static boolean isBlockAuflistung(ArrayList<Triple> triplesInOneBlock) {
        boolean blockContainsMoreThenOneCheckbox = doseBlockContainMoreThenOneCheckbox(triplesInOneBlock);
        boolean blockContainsBulletpoints = doseBlockContainBulletpoints(triplesInOneBlock);
        return (blockContainsBulletpoints || blockContainsMoreThenOneCheckbox);
    }

    public static boolean doseBlockContainFolgenden(ArrayList<Triple> triplesInThisBlock) {
        if (triplesInThisBlock.isEmpty()){
            return false;
        }
        ArrayList<Triple> allTripelsBetween = getAllTripelsBetween(triplesInThisBlock);
        for (Triple triple:allTripelsBetween) {
            if (triple.getContent().equals("folgenden")){
                return true;
            }
        }
        return false;
    }

    public static boolean doseBlockContainBulletpoints(ArrayList<Triple> triplesInThisBlock) {
        if (triplesInThisBlock.isEmpty()){
            return false;
        }

        ArrayList<Triple> allTripelsBetween = getAllTripelsBetween(triplesInThisBlock);
        for (Triple triple:allTripelsBetween) {
            if (triple.getContent().equals("•")){
                return true;
            }
        }
        return false;
    }

    public static boolean doseBlockContainMoreThenOneCheckbox(ArrayList<Triple> triplesInThisBlock) {
        if (triplesInThisBlock.isEmpty()){
            return false;
        }
        int countCheckboxes = 0;
        Triple checkBoxFromBefore = null;
        for (Triple triple:triplesInThisBlock) {
            if(getHasCheckbox(triple)){
                Triple checkBox = getCheckbox(triple);
                if (checkBoxFromBefore == null){
                    checkBoxFromBefore = checkBox;
                    countCheckboxes += 1;
                }
                if (checkBox != checkBoxFromBefore){
                    countCheckboxes += 1;
                    checkBoxFromBefore = checkBox;
                }
            }
        }
        return (countCheckboxes > 1);
    }

    public static boolean doseBlockContainAtLeastOneCheckedCheckbox(ArrayList<Triple> triplesInOneBlock) {
        for (Triple tripe:triplesInOneBlock) {
            boolean tripleHasCheckbox = getHasCheckbox(tripe);
            if (tripleHasCheckbox){
                boolean isChecked = getIsChecked(tripe);
                if (isChecked){
                    return true;
                }
            }
        }
        return false;
    }

    public static boolean isBlockChecked(ArrayList<Triple> triplesInOneBlock) {
        Triple firstTripleInBlock = triplesInOneBlock.get(0);
        boolean blockIsAuflistung = isBlockAuflistung(triplesInOneBlock);
        if (blockIsAuflistung){
            boolean containsMoreThenOneCheckbox = doseBlockContainMoreThenOneCheckbox(triplesInOneBlock);
            if (containsMoreThenOneCheckbox){
                boolean atLestOneIsChecked = doseBlockContainAtLeastOneCheckedCheckbox(triplesInOneBlock);
                return atLestOneIsChecked;
            }else {
                return true;
            }
        }
        boolean blockHasCheckbox = getHasCheckbox(firstTripleInBlock);
        if (blockHasCheckbox){
            return getIsChecked(firstTripleInBlock);
        } else {
            return true;
        }

    }

}
