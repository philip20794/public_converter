package com.overswayy.angular_spring_inbuild.models;

public class Triple {
    /*
    A Triple is the content of one line in the html File.

    e.g.: <word xMin="106.800192" yMin="162.833552" xMax="147.134742" yMax="173.045548">schnelle</word>
           content = schnelle ; height = 162.833552 ; x = 106.800192
     */

    public String content;
    public float height;
    public float x;
    public String preFixForWordVariable;

    public Triple(String content, float height, float x, String preFixForWordVariable) {
        this.content = content;
        this.height = height;
        this.x = x;
        this.preFixForWordVariable = preFixForWordVariable;
    }

    public String getContent() {
        return content;
    }

    public float getHeight() {
        return height;
    }

    public float getX(){
        return x;
    }

    public String getPreFixForWordVariable() {
        return preFixForWordVariable;
    }
    public void setContent(String newContetnt){
        this.content = newContetnt;
    }
    public void setHeight(float newHeight){
        this.height = newHeight;
    }
    public void setX(float newX){
        this.x = newX;
    }
    public void setPreFixForWordVariable(String newPreFix){
        this.preFixForWordVariable = newPreFix;
    }
}
