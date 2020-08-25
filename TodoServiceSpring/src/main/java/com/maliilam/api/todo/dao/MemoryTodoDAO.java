package com.maliilam.api.todo.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.maliilam.api.todo.model.Todo;

public class MemoryTodoDAO implements TodoDAO {
    private List<Todo> todos = new ArrayList<Todo>();
    private Integer maxId = 0;
    public List<Todo> getTodos() {
        return todos;
    }
    public Optional<Todo> getTodo(String id) {
        return todos.stream().filter(todo -> todo.id.equals(id)).findFirst();
    }
    public Optional<Todo> addTodo(Todo todo) {
        todo.id = (maxId++).toString();
        this.todos.add(todo);
        return Optional.of(todo);
    }
    public Optional<Todo> updateTodo(Todo todoUpdate) {
        Optional<Todo> foundTodo = todos.stream()
            .filter(todo -> todo.id.equals(todoUpdate.id))
            .findFirst();
        foundTodo.ifPresent(todo -> {
            todo.title = todoUpdate.title;
            todo.completed = todoUpdate.completed;
        });
        return foundTodo;
    }
    public Optional<Todo> deleteTodo(String id) {
        Optional<Todo> foundTodo = todos.stream().filter(todo -> todo.id.equals(id)).findFirst();
        foundTodo.ifPresent( td -> todos.removeIf(todo -> todo.id.equals(id)));
        return foundTodo;        
    }
}