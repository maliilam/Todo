package com.maliilam.api.todo;

import java.util.List;
import java.util.Optional;

import com.maliilam.api.todo.model.Todo;
import com.maliilam.api.todo.service.TodoService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
        return this.todoService.getTodos();
    }

    @GetMapping(value = "/todos", params = "id")
    public Optional<Todo> getTodo(@PathVariable Integer id) {
        return this.todoService.getTodo(id);
    }

    @PostMapping("/todos")
    public Optional<Todo> addTodo(@RequestBody Todo todo) {
        return this.todoService.addTodo(todo);
    }

    @PutMapping("/todos/{id}")
    public Optional<Todo> updateTodo(@RequestBody Todo todo) {
        return this.todoService.updateTodo(todo);
    }

    @DeleteMapping("/todos/{id}")
    public Optional<Todo> deleteTodo(@PathVariable Integer id) {
        return this.todoService.deleteTodo(id);
    }
}