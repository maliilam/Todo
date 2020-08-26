package com.maliilam.api.todo.service;

import java.util.List;
import java.util.Optional;

import com.maliilam.api.todo.dao.TodoDAO;
import com.maliilam.api.todo.model.Todo;

import org.springframework.stereotype.Component;

@Component
public class TodoService {

    private TodoDAO todoDAO;
    public TodoService(TodoDAO todoDAO) {
        this.todoDAO = todoDAO;
    }

    public List<Todo> getTodos() {
        return todoDAO.getTodos();
    }
    public Optional<Todo> getTodo(String id) {
        return todoDAO.getTodo(id);
    }
    public Optional<Todo> addTodo(Todo todo) {
        return todoDAO.addTodo(todo);
    }
    public Optional<Todo> updateTodo(Todo todo) {
        return this.todoDAO.updateTodo(todo);
    }
    public Optional<Todo> deleteTodo(String id) {
        return this.todoDAO.deleteTodo(id);
    }

}