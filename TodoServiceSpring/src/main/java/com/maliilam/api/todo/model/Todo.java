package com.maliilam.api.todo.model;

import java.util.Map;

public class Todo {
    public Integer id;
    public String title;
    public boolean completed;
    
    public Todo() {}

    public Todo(Map<String, Object> todoMap) {
        id = (Integer) todoMap.get("id");
        title = (String) todoMap.get("title");
        completed = (Boolean) todoMap.get("completed");
    }
}