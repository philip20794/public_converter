package com.overswayy.angular_spring_inbuild;


import com.overswayy.angular_spring_inbuild.logic.ContentFunctions;
import com.overswayy.angular_spring_inbuild.models.Anforderungen;
import com.overswayy.angular_spring_inbuild.models.AnforderungsItem;
import com.overswayy.angular_spring_inbuild.models.Block;
import com.overswayy.angular_spring_inbuild.models.Triple;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;

import java.io.IOException;
import java.util.ArrayList;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.*;
import static com.overswayy.angular_spring_inbuild.doc.DocFunctions.*;
import static com.overswayy.angular_spring_inbuild.logic.ContentFunctions.pars;
import static com.overswayy.angular_spring_inbuild.logic.GenBlocks.getBlocks;
import static com.overswayy.angular_spring_inbuild.logic.TripleFunctions.*;

public class GenDoc {

    public static void main(String[] args) throws IOException, InvalidFormatException {
        genFileName(args);
        genWordVorlage();
        if (doc != null){
            genStaticVariables();
            createTriples();
            blocks = new ArrayList<>();
            blocks = getBlocks();
            int i = -1;
            String currentPrefix="";
            for (int x = 0; x < blocks.size(); x++) {
                Block tableBlock = blocks.get(x);
                String content = pars(ContentFunctions.getContent(tableBlock.getTriples()));
                String contentHint = tableBlock.getHint();
                String questionPreFix = tableBlock.getQuestionPreFix();
                if (questionPreFix.equals("") || questionPreFix.equals("notNeeded")){
                    System.out.println("contine: "+content);
                    continue;
                }
                System.out.println("---------------------------");
                i += 1;
                int j = 0;
                if (i == buchstaben.length){
                    break;
                }
                boolean isAuflistung = tableBlock.isAuflistung();
                if (isAuflistung){
                    System.out.println("Auflistung");
                    Anforderungen anforderungen = tableBlock.getAnforderungen();
                    String question = pars(anforderungen.getQuestion().getContent());
                    currentPrefix = anforderungen.getQuestion().getPreFixForWordVariable();
                    String wordVar = currentPrefix +"list"+ buchstaben[i] + buchstaben[j];
                    boolean questionIsNeedet = tableBlock.isChecked();
                    if (!questionIsNeedet){
                        System.out.println("NOT needet "+wordVar + " " + question);
                        continue;
                    }
                    replaceText(doc, wordVar, question, false);
                    System.out.println(wordVar + " " + question);
                    ArrayList<AnforderungsItem> items = anforderungen.getItems();
                    for (AnforderungsItem item:items) {
                        Triple triple = item.getTriple();
                        String itemContent = pars(item.getTriple().getContent());
                        String itemHint = item.getHint();
                        boolean itemIsGreen = isTripleGreen(triple);
                        boolean tripelNeeded = !item.isHasCheckbox() || (item.isHasCheckbox() && item.isIsChecked());
                        if (tripelNeeded){
                            j += 1;
                            String wordVarForItem = currentPrefix +"list"+ buchstaben[i] + buchstabenToRemove[j];
                            String varHint = currentPrefix.replace("krit", "")
                                    +"hintlist"+ buchstaben[i] + buchstabenToRemove[j];
                            replaceText(doc, wordVarForItem, itemContent, itemIsGreen);
                            replaceText(doc, varHint, itemHint,false);
                            System.out.println(wordVarForItem+" "+item.isIsChecked()+"  "+ triple.getContent());
                        } else {
                            System.out.println("X triple not Needed: "+itemContent);
                        }
                    }

                }else { // Not Auflistung
                    boolean tripleIsGreen = areAllTriplesGreen(tableBlock.getTriples());
                    boolean tripleNeeded = tableBlock.isChecked();
                    if (tripleNeeded) {
                        currentPrefix = tableBlock.getQuestionPreFix();
                        String var = currentPrefix + buchstaben[i];
                        String varHint = currentPrefix.replace("krit", "")
                                + "hint" + buchstaben[i];
                        replaceText(doc, var, content, tripleIsGreen);
                        replaceText(doc, varHint, contentHint, false);
                        System.out.println(var+" "+tableBlock.isChecked()+" "+ content);
                    } else {
                        System.out.println("X triple not Needed: "+content);
                    }
                }
                // Switch from A-Kriterien to B-Kriterien
                if (x+1 < blocks.size()) {
                    Block nextBlock = blocks.get(x + 1);
                    boolean nextIsBKriterien = currentPrefix.equals("Akrit") &&
                            nextBlock.getQuestionPreFix().equals("Bkrit");
                    if (nextIsBKriterien) {
                        i = -1;
                    }
                }
            }
            deltetRest(doc);
            saveWord(doc, fileName);
        }
    }

}
