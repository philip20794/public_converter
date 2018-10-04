package com.overswayy.angular_spring_inbuild.models;

public class AnforderungsItem {
    public final boolean isChecked;
    public final boolean hasCheckbox;
    public final Triple triple;
    public final String hint;

    public AnforderungsItem(boolean hasCheckbox, boolean isChecked, Triple triple, String hint){
        this.hasCheckbox = hasCheckbox;
        this.isChecked = isChecked;
        this.triple = triple;
        this.hint = hint;
    }

    public Triple getTriple() {
        return triple;
    }

    public boolean isIsChecked() {
        return isChecked;
    }

    public boolean isHasCheckbox() {
        return hasCheckbox;
    }

    public String getHint() {
        return hint;
    }
}