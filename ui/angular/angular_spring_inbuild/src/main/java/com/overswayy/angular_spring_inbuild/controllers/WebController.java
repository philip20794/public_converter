package com.overswayy.angular_spring_inbuild.controllers;

import com.overswayy.angular_spring_inbuild.GenDoc;
import com.overswayy.angular_spring_inbuild.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Iterator;

import static com.overswayy.angular_spring_inbuild.doc.FileStuff.genFiles;
import static com.overswayy.angular_spring_inbuild.logic.Scripts.dockerInit;


@Controller
public class WebController{

    private final StorageService storageService;

    @Autowired
    public WebController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping("/")
    public String index(){
        return "index.html";
    }


    @PostMapping("/")
    @ResponseBody
    public ResponseEntity<?> handleFileUpload(MultipartHttpServletRequest request) {
        try {
            Iterator<String> itr = request.getFileNames();
            MultipartFile file = request.getFile(itr.next());
            storageService.store(file);
            return ResponseEntity.ok().body("File Uploaded");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }


    @RequestMapping(path = "/convert/{fileName}",  method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> handleConvertFile(@PathVariable String fileName) {
        try {
            convertFile(fileName);
            return ResponseEntity.ok().body("File Converted");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @RequestMapping(path = "/download/{fileName}",  method = RequestMethod.POST)
    public ResponseEntity<Resource> download(@PathVariable String fileName) throws IOException {
        try {
            System.out.println("Downlaoding: "+fileName);
            fileName = fileName.replace(".pdf", ".doc");
            Path path = storageService.load(fileName);
            File file = new File(path.toString());
            ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

            HttpHeaders headers = new HttpHeaders();
            headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
            headers.add("Pragma", "no-cache");
            headers.add("Expires", "0");

            return ResponseEntity.ok().headers(headers).contentLength(file.length())
                    .contentType(MediaType.parseMediaType("application/octet-stream"))
                    .body(resource);
        } catch (Exception e){
            return ResponseEntity.badRequest().body(null);
        }

    }

    @RequestMapping(path = "/clear",  method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> clearAll() {
        try {
            storageService.deleteAll();
            storageService.init();
            return ResponseEntity.ok().body("");
        }catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    private void convertFile(String fileName) throws Exception{
        dockerInit();
        fileName = fileName.replace(".pdf", "");
        String[] arg = {fileName};
        genFiles(fileName);
        GenDoc.main(arg);
    }


}



