import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo'
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoryApiService {
  todos:Todo[];
  constructor() {
    this.todos = [];
  }
  getTodos():Observable<Todo[]> {
    console.log("get todos:", this.todos)
    return new Observable(subscriber => subscriber.next(this.todos))
  }
  updateTodo(todoUpdate):Observable<Todo> {
      let todo = this.todos.find( todo => todo.id === todoUpdate.id)
      todo.title = todoUpdate.title
      todo.completed = todoUpdate.completed
      console.log("update todo:", todo, this.todos)
      return new Observable(Subscriber => Subscriber.next(todo))
  }
  addTodo(todo):Observable<Todo> {
    console.log("add todo before: ", todo, this.todos)  
    let id = this.todos.length === 0 ? 0 : this.todos[this.todos.length - 1].id + 1
      let newTodo = {...todo, id : id}
      this.todos.push(newTodo)
      console.log("add todo after: ", newTodo, this.todos)
      return new Observable(Subscriber => Subscriber.next(newTodo))
  }
  deleteTodo(todo):Observable<Todo> {
      this.todos = [...this.todos.filter(td => td.id !== todo.id)]
      return new Observable(Subscriber => Subscriber.next(todo))
  }
}
