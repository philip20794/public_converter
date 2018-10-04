package com.overswayy.angular_spring_inbuild;

import com.overswayy.angular_spring_inbuild.storage.StorageProperties;
import com.overswayy.angular_spring_inbuild.storage.StorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@SpringBootApplication

@EnableConfigurationProperties(StorageProperties.class)
public class AngularSpringInbuildApplication {

    public static void main(String[] args) {
        SpringApplication.run(AngularSpringInbuildApplication.class, args);
    }

    @Bean
    CommandLineRunner init(StorageService storageService) {
        return (args) -> {
            storageService.deleteAll();
            storageService.init();
        };
    }
}
