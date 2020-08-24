package com.maliilam.api.todo;

import java.util.List;

import com.maliilam.api.todo.model.Todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TodoApiController {
    @GetMapping("/todos")
    public List<Todo> getTodos() {
        return List.of();
    }
}