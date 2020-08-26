package com.maliilam.api.todo;

import java.util.List;

import com.maliilam.api.todo.model.Todo;
import com.maliilam.api.todo.service.TodoService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TodoApiController {
    private TodoService todoService;
    
    TodoApiController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/todos")
    public List<Todo> getTodos() {
        return todoService.getTodos();
    }
}