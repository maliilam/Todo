package com.maliilam.api.todo.dao;

import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import com.maliilam.api.todo.model.Todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

@Repository
@Primary
public class MySQLTodoDAO extends JdbcDaoSupport implements TodoDAO {
    @Autowired
    DataSource dataSource;

    @PostConstruct
    private void initialize() {
        setDataSource(dataSource);
        
    }
    
    public List<Todo> getTodos() {
        String sql = "SELECT * FROM todo";
        List<Todo> todos = getJdbcTemplate().queryForList(sql, Todo.class);
        return todos;
    }
    public Optional<Todo> getTodo(String id) {
        return Optional.empty();
    }
    public Optional<Todo> addTodo(Todo todo) {
        String sql = "INSERT INTO todo (title, completed) VALUES (?, ?)";
        getJdbcTemplate().update(sql, todo.title, todo.completed );
        return Optional.of(todo);
    }
    public Optional<Todo> updateTodo(Todo todoUpdate) {
        return Optional.empty();
    }
    public Optional<Todo> deleteTodo(String id) {
        return Optional.empty();
    }
}