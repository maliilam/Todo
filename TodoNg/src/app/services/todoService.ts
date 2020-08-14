import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo'

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos:Todo[];
    constructor() {
        this.todos = [{
            id: 1,
            title: "task 1",
            done: false
          },
          {
            id: 2,
            title: "task 2",
            done: false
          }]    
    }
    getTodos() {
        return this.todos;
    }
    updateTodo(todoUpdate) {
        let todo = this.todos.find( todo => todo.id === todoUpdate.id)
        todo.title = todoUpdate.title
        todo.done = todoUpdate.done
    }
    addTodo(todo) {
        let id = this.todos.length === 0 ? 0 : this.todos[this.todos.length - 1].id + 1
        this.todos.push({...todo, id : id})
    }
    deleteTodo(todo) {
        this.todos = [...this.todos.filter(td => td.id !== todo.id)]
    }
}
