package com.example.pizza.controller;

import com.example.pizza.model.Employee;
import com.example.pizza.payload.*;
import com.example.pizza.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/api/employee")
@PreAuthorize("hasRole('ADMIN')")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<?> createEmployee(@RequestBody EmployeeRequest employeeRequest) {
        try {
            employeeService.createEmployee(new Employee(employeeRequest.getFirstName(), employeeRequest.getLastName(), employeeRequest.getTelephone(), employeeRequest.getHireDate()));
            return new ResponseEntity<>(new ApiResponse(true, "Employee created"), CREATED);
        } catch (DataAccessException exception) {
            return new ResponseEntity<>(new ApiResponse(false, "Employee did not create"), INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public List<EmployeeResponse> getEmployee() {
        return employeeService.getAllEmployee();
    }
}