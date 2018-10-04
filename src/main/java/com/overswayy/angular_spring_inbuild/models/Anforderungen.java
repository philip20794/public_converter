package com.overswayy.angular_spring_inbuild.models;

import java.util.ArrayList;

public class Anforderungen{
    public final ArrayList<AnforderungsItem> items;
    public final Triple question;

    public Anforderungen(ArrayList<AnforderungsItem> items, Triple question){
        this.items = items;
        this.question = question;
    }

    public ArrayList<AnforderungsItem> getItems() {
        return items;
    }

    public Triple getQuestion() {
        return question;
    }
}
