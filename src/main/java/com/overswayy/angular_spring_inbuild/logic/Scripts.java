package com.overswayy.angular_spring_inbuild.logic;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;

public class Scripts {

    public static void dockerInit() throws Exception{
      System.out.println("docker init");
        String command = ".\\scripts\\init.bat";
        String command_linux = "sudo bash scripts/init.sh";
        checkDockerState();
        runCommand(command_linux, "Can't create Docker-Container");
    }

    public static void dockerConvert(String fileName) throws Exception{
      System.out.println("docker convert: " +fileName);
        String command = ".\\scripts\\convert.bat " + fileName;
        String command_linux = "sudo bash scripts/convert.sh " + fileName;
        checkDockerState();
        runCommand(command_linux, "File has a bad Format");
    }
    

    private static void checkDockerState() throws Exception{
          String command = "sudo docker ps";
          runCommand(command, "Docker is not Running");
    }

    private static void runCommand(String command, String exception) throws Exception{
        String line;
        Process process = Runtime.getRuntime().exec(command);
        BufferedReader input = new BufferedReader(new InputStreamReader(process.getInputStream()));
        while ((line = input.readLine()) != null) {
            System.out.println(line);
        }
        input.close();
        process.waitFor();
        if (process.exitValue() != 0) {
            throw new Exception(exception);
        }
    }

}
