package com.overswayy.angular_spring_inbuild.logic;

import com.overswayy.angular_spring_inbuild.doc.Hints;
import com.overswayy.angular_spring_inbuild.models.Anforderungen;
import com.overswayy.angular_spring_inbuild.models.AnforderungsItem;
import com.overswayy.angular_spring_inbuild.models.Triple;

import java.util.ArrayList;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.A_KRITERIEN_ZEILENBEGINN;
import static com.overswayy.angular_spring_inbuild.Strings.Variables.BULLETPOINT_ZEILENBEGINN;
import static com.overswayy.angular_spring_inbuild.logic.BoolsToSeparatBlocks.areWeInAAuflistung;
import static com.overswayy.angular_spring_inbuild.logic.Checkboxen.getHasCheckbox;
import static com.overswayy.angular_spring_inbuild.logic.Checkboxen.getIsChecked;
import static com.overswayy.angular_spring_inbuild.logic.ContentFunctions.mergeContent;
import static com.overswayy.angular_spring_inbuild.logic.TripleFunctions.getTriplesInSameHeight;

public class GenAnforderungen {

    public static Anforderungen getAnforderungen(ArrayList<Triple> triplesInOneBlock) {
        Triple question = new Triple("",0, 0, "");
        ArrayList<AnforderungsItem> items = new ArrayList<>();
        for (Triple currentTriple:triplesInOneBlock) {
            boolean tripleIsFirstInLine = areWeInAAuflistung(currentTriple);
            ArrayList<Triple> allInThisLine = getTriplesInSameHeight(currentTriple);
            if (tripleIsFirstInLine) {
                boolean hasCheckbox = getHasCheckbox(currentTriple);
                float xPositOfFirstTriple = currentTriple.getX();
                boolean positionLikeAuflistungsItem = (xPositOfFirstTriple > BULLETPOINT_ZEILENBEGINN && xPositOfFirstTriple < BULLETPOINT_ZEILENBEGINN + 1);
                if (hasCheckbox || positionLikeAuflistungsItem){
                    Triple item = new Triple("",0, 0, "");
                    for (Triple triple:allInThisLine) {
                        mergeContent(item,triple);
                    }
                    boolean itemHasACheckbox;
                    boolean isChecked;
                    if (hasCheckbox) {
                        itemHasACheckbox = true;
                        isChecked = getIsChecked(currentTriple);
                    } else {
                        itemHasACheckbox = false;
                        isChecked = false;
                    }
                    String hint = Hints.getHint(item, question);
                    AnforderungsItem anforderungsItem = new AnforderungsItem(itemHasACheckbox, isChecked,
                            item, hint);
                    items.add(anforderungsItem);
                } else { //it's part od the question
                    for (Triple triple:allInThisLine) {
                        mergeContent(question, triple);
                    }
                }
            } else if (currentTriple.getX() < A_KRITERIEN_ZEILENBEGINN ){
                for (Triple triple:allInThisLine) {
                    mergeContent(question, triple);
                }
            }
        }
        return new Anforderungen(items, question);
    }
    
}
