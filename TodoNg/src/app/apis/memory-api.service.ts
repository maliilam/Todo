import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo'

@Injectable({
  providedIn: 'root'
})
export class MemoryApiService {
  todos:Todo[];
  constructor() {
    this.todos = [];
  }
  getTodos() {
    return this.todos;
  }
  updateTodo(todoUpdate) {
      let todo = this.todos.find( todo => todo.id === todoUpdate.id)
      todo.title = todoUpdate.title
      todo.completed = todoUpdate.completed
  }
  addTodo(todo) {
      let id = this.todos.length === 0 ? 0 : this.todos[this.todos.length - 1].id + 1
      this.todos.push({...todo, id : id})
  }
  deleteTodo(todo) {
      this.todos = [...this.todos.filter(td => td.id !== todo.id)]
  }
}
