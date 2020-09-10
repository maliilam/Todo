package com.maliilam.api.todo.dao;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import com.maliilam.api.todo.model.Todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.jdbc.support.GeneratedKeyHolder;
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
        String sql = "SELECT * FROM todo WHERE id = ?";
        Todo todo = getJdbcTemplate().queryForObject(sql, Todo.class);
        return Optional.of(todo);
    }
    public Optional<Todo> addTodo(Todo todo) {
        String sql = "INSERT INTO todo (title, completed) VALUES (?, ?)";
        //getJdbcTemplate().update(sql, todo.title, todo.completed);
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        getJdbcTemplate().update(con -> {
            //PreparedStatement ps = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            PreparedStatement ps = con.prepareStatement(sql, new String[]{"id"});
            ps.setString(1, todo.title);
            ps.setBoolean(2, todo.completed);
            return ps;
        }, keyHolder);
        BigInteger d = (BigInteger) keyHolder.getKeys().get("GENERATED_KEY");// why?
        todo.id = d.toString();
        return Optional.of(todo);
    }
    public Optional<Todo> updateTodo(Todo todo) {
        String sql = "UPDAET todo SET title = ?, completed = ? WHERE id = ?";
        getJdbcTemplate().update(sql, todo.title, todo.completed, todo.id);
        return Optional.of(todo);
    }
    public Optional<Todo> deleteTodo(String id) {
        Optional<Todo> todo = this.getTodo(id);
        String sql = "DELETE FROM todo WHERE id = ?";
        getJdbcTemplate().update(sql, id);
        return todo;
    }
}