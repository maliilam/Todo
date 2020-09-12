package com.maliilam.api.todo.dao;

import java.util.List;
import java.util.Optional;

import com.maliilam.api.todo.model.Todo;

public interface TodoDAO {
    public List<Todo> getTodos();
    public Optional<Todo> getTodo(Integer id);
    public Optional<Todo> addTodo(Todo todo);
    public Optional<Todo> updateTodo(Todo todo);
    public Optional<Todo> deleteTodo(Integer id);
}