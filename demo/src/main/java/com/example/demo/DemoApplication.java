package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@CrossOrigin
public class DemoApplication {

    public static void main(String[] args) {

        SpringApplication.run(
            DemoApplication.class,
            args
        );

    }

    // Test backend
    @GetMapping("/")
    public String home() {

        return "Prins Kumar Portfolio Backend is Running!";

    }

    // Contact form
    @PostMapping("/contact")
    public String contact(
            @RequestBody ContactMessage message) {

        System.out.println("==============================");
        System.out.println("New Contact Message");
        System.out.println("Name: " + message.name());
        System.out.println("Email: " + message.email());
        System.out.println("Subject: " + message.subject());
        System.out.println("Message: " + message.message());
        System.out.println("==============================");

        return "Thank you, "
                + message.name()
                + "! Your message was received.";
    }

    public record ContactMessage(
        String name,
        String email,
        String subject,
        String message
    ) {}

}