package com.overswayy.angular_spring_inbuild.models;

import java.util.ArrayList;

public class Block {
    public final boolean checked;
    public final ArrayList<Triple> triples;
    public final boolean isAuflistung;
    public final Anforderungen anforderungen;
    public final String questionPreFix;
    public final String hint;

    public Block(boolean checked, ArrayList<Triple> triples, String hint){
        this.checked = checked;
        this.triples = triples;
        this.isAuflistung = false;
        this.anforderungen = null; //TODO
        this.questionPreFix = triples.get(0).getPreFixForWordVariable();
        this.hint  = hint;
    }
    public Block(boolean checked, ArrayList<Triple> triples, boolean isAuflistung,
                Anforderungen anforderungen, String hint){
        this.checked = checked;
        this.triples = triples;
        this.isAuflistung = isAuflistung;
        this.anforderungen = anforderungen;
        this.questionPreFix = triples.get(0).getPreFixForWordVariable();
        this.hint = hint;
    }

    public boolean isChecked(){
        return checked;
    }

    public ArrayList<Triple> getTriples() {
        return triples;
    }

    public Anforderungen getAnforderungen() {
        return anforderungen;
    }

    public boolean isAuflistung() {
        return isAuflistung;
    }

    public String getQuestionPreFix() {
        return questionPreFix;
    }


    public String getHint() {
        return hint;
    }
}
