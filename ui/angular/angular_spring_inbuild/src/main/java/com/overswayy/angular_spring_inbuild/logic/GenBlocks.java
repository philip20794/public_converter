package com.overswayy.angular_spring_inbuild.logic;

import com.overswayy.angular_spring_inbuild.doc.Hints;
import com.overswayy.angular_spring_inbuild.models.Anforderungen;
import com.overswayy.angular_spring_inbuild.models.Block;
import com.overswayy.angular_spring_inbuild.models.Triple;

import java.util.ArrayList;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.*;
import static com.overswayy.angular_spring_inbuild.logic.BlockBools.*;
import static com.overswayy.angular_spring_inbuild.logic.BoolsToSeparatBlocks.*;
import static com.overswayy.angular_spring_inbuild.logic.Checkboxen.getCheckbox;
import static com.overswayy.angular_spring_inbuild.logic.Checkboxen.getHasCheckbox;
import static com.overswayy.angular_spring_inbuild.logic.GenAnforderungen.getAnforderungen;

public class GenBlocks {

    public static Block genBlock(ArrayList<Triple> triplesInOneBlock, Triple currentTriple, boolean isCurrentlyAuflistung){
        Block result;
        triplesInOneBlock.add(currentTriple);
        boolean checked = isBlockChecked(triplesInOneBlock);
        String hint = Hints.getHint(triplesInOneBlock);
        if (isCurrentlyAuflistung){
            Anforderungen anforderungen = getAnforderungen(triplesInOneBlock);
            boolean isAuflistung = isBlockAuflistung(triplesInOneBlock);
            result = new Block(checked, triplesInOneBlock,
                    isAuflistung, anforderungen, hint);
        }else {
            result = new Block(checked, triplesInOneBlock, hint);
        }
        return result;
    }
    
    

    public static ArrayList<Block> getBlocks() {
        ArrayList<Block> result = new ArrayList<>();
        ArrayList<Triple> triplesInOneBlock = new ArrayList<>();

        boolean isCurrentlyAuflistung = false;
        for (int i = 0; i < neededTriples.size(); i++) {
            boolean isLastBlock = (i == neededTriples.size() - 1);
            Triple currentTriple = neededTriples.get(i);
            if (isLastBlock) { //Gen Last Block
                Block lastBlock = genBlock(triplesInOneBlock, currentTriple, isCurrentlyAuflistung);
                result.add(lastBlock);
                break;
            }
            Triple nextTriple = neededTriples.get(i + 1);
            if (nextIsNewBlock(currentTriple, nextTriple, isCurrentlyAuflistung, triplesInOneBlock)) {
                //Gen a Block
                Block lastBlock = genBlock(triplesInOneBlock, currentTriple, isCurrentlyAuflistung);
                result.add(lastBlock);
                triplesInOneBlock = new ArrayList<>();
                isCurrentlyAuflistung = false;

            } else {
                triplesInOneBlock.add(currentTriple);
            }
            if (!isCurrentlyAuflistung) {
                isCurrentlyAuflistung = areWeInAAuflistung(currentTriple);
            }
        }
        return result;
    }



    public static boolean nextIsNewBlock(Triple currentTriple, Triple nextTriple,
                                          boolean isCurrentlyAuflistung, ArrayList<Triple> currentBlock) {
        float currentHeight = currentTriple.getHeight();
        float nextHeight = nextTriple.getHeight();
        float nextX = nextTriple.getX();
        float difference = Math.abs(nextHeight - currentHeight);
        currentBlock.add(nextTriple);
        boolean containWordFolgenden = doseBlockContainFolgenden(currentBlock);
        boolean containBulletpoint = doseBlockContainBulletpoints(currentBlock);
        boolean currentTripleHasCheckbox = getHasCheckbox(currentTriple);
        boolean nextTripleHasCheckbox = getHasCheckbox(nextTriple);
        currentBlock.remove(nextTriple);
        boolean pageCut = isPageCut(difference);
        if (pageCut){
            boolean nextHasCheckbox = getHasCheckbox(nextTriple);
            boolean currentIsLong = isNextLong(currentTriple);
            boolean currentHastCheckbox = getHasCheckbox(currentTriple);
            if (nextHasCheckbox && !currentIsLong && !currentHastCheckbox){
                return true;
            }
            return  (nextHasCheckbox && currentIsLong);
        }
        if (containBulletpoint){
            return (nextX < A_KRITERIEN_ZEILENBEGINN );
        }
        if (currentTripleHasCheckbox && nextTripleHasCheckbox){
            Triple currentCheckBox = getCheckbox(currentTriple);
            Triple nextCheckBox = getCheckbox(nextTriple);
            boolean isSameCheckbox = (currentCheckBox == nextCheckBox);
            if (isSameCheckbox){return false;}
            float currentCheckBoxHeight = currentCheckBox.getHeight();
            float nextCheckBoxHeight = nextCheckBox.getHeight();
            float differenceCheckBoxes = Math.abs(currentCheckBoxHeight - nextCheckBoxHeight);
            return (differenceCheckBoxes > BEGINN_NEUER_ZELLE_IN_AUFLISTUNG && differenceCheckBoxes < 20);
        }

        if (containWordFolgenden){
            return (difference > BEGINN_NEUER_ZELLE_IN_AUFLISTUNG && difference < 20);
        }

        if (isCurrentlyAuflistung){
            return ( (difference > BEGINN_NEUER_ZELLE ));
        }

        return (difference > BEGINN_NEUER_ZELLE && difference < BEGINN_NEUER_ZELLE_IN_AUFLISTUNG || difference > 30);
    }
    
}
