package com.overswayy.angular_spring_inbuild.logic;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.current_prefix;
import static com.overswayy.angular_spring_inbuild.Strings.Variables.prefixListForWordVariable;

public class Prefix {

    public static void nextPrefix() {
        int i = getCurrentPrefixPosition();
        if (i < prefixListForWordVariable.length){
            current_prefix = prefixListForWordVariable[i+1];
        }
    }

    public static int getCurrentPrefixPosition() {
        for (int i = 0; i < prefixListForWordVariable.length ; i++) {
            if (current_prefix.equalsIgnoreCase(prefixListForWordVariable[i])){
                return i;
            }
        }
        return 0;
    }

    public static String getPreFix(String content) {
        if (content.toLowerCase().contains("kriterien")){
            nextPrefix();
        }
        return current_prefix;
    }

}
