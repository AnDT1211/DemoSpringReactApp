package com.example.demobe.controller;

import com.example.demobe.model.Car;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MainController {
    @GetMapping
    List<Car> getAllCar() {
        return List.of(new Car("Vinfast", 2020), new Car("BMW", 2010), new Car("Toyota", 2015));
    }
}
