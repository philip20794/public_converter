package com.overswayy.angular_spring_inbuild.logic;

import com.overswayy.angular_spring_inbuild.models.Triple;

import java.util.ArrayList;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.BULLETPOINT_ZEILENBEGINN;
import static com.overswayy.angular_spring_inbuild.Strings.Variables.B_KRITERIEN_ZEILENBEGINN;
import static com.overswayy.angular_spring_inbuild.logic.TripleFunctions.getTriplesInSameHeight;

public class BoolsToSeparatBlocks {


    public static boolean areWeInAAuflistung(Triple nextTriple) {
        float nextX = nextTriple.getX();
        return (nextX > BULLETPOINT_ZEILENBEGINN && nextX < BULLETPOINT_ZEILENBEGINN + 1) || (nextX > B_KRITERIEN_ZEILENBEGINN && nextX < B_KRITERIEN_ZEILENBEGINN + 1);
    }


    public static boolean isNextLong(Triple nextTriple) {
        ArrayList<Triple> allTriplesInLine = getTriplesInSameHeight(nextTriple);
        StringBuilder content = new StringBuilder();
        for (Triple triple:allTriplesInLine) {
            content.append(triple.getContent());
        }
        return (content.toString().length() > 30);
    }


    public static boolean isPageCut(float difference) {
        return (difference > 400);
    }



}
