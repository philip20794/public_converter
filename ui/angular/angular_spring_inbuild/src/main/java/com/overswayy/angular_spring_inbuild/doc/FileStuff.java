package com.overswayy.angular_spring_inbuild.doc;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import static com.overswayy.angular_spring_inbuild.Strings.Variables.stringPathGeneratedFiles;
import static com.overswayy.angular_spring_inbuild.logic.Scripts.dockerConvert;

public class FileStuff {

    private static Boolean fileExists(String path) {
        File f = new File(path);
        return f.exists();
    }

    public static void genFiles(String fileName) throws Exception{
        String file_html = fileName + "_html.txt";
        String file = fileName + ".txt";
        String file_green = fileName + "_only_green.txt";
        Boolean htmlFileExists = fileExists(stringPathGeneratedFiles + file_html);
        Boolean txtFileExists = fileExists(stringPathGeneratedFiles + file);
        Boolean greenFileExists = fileExists(stringPathGeneratedFiles + file_green);
        Boolean filesExists = (htmlFileExists && txtFileExists && greenFileExists);
        if (!filesExists) {
            System.out.println("It not exists: "+stringPathGeneratedFiles + file_html);
            System.out.println("It not exists: "+stringPathGeneratedFiles + file);
            System.out.println("It not exists: "+stringPathGeneratedFiles + file_green);
            dockerConvert(fileName);
        }
    }



    public static String getText(String name) throws IOException {
        String path = stringPathGeneratedFiles +name;
        StringBuilder builder = new StringBuilder();
        if (fileExists(path)) {
            System.out.println("It exists: "+path);
            File file = new File(path);
            String sCurrentLine;
            BufferedReader reader = new BufferedReader(new FileReader(file));
            while ((sCurrentLine = reader.readLine()) != null) {
                builder.append(sCurrentLine);
                builder.append("\n");
            }
            reader.close();
            return builder.toString();
        } else {
            System.out.println("NOT exists: "+path);
        }
        return "";
    }
    
}
