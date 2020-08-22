import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Todo } from '../models/Todo'
import { TodoApi } from './todoApi'

@Injectable({
  providedIn: 'root'
})
export class MemoryApiService implements TodoApi {
  todos:Todo[];
  constructor() {
    this.todos = [];
  }
  getTodos():Observable<Todo[]> {
    return new Observable(subscriber => subscriber.next(this.todos.map(todo => ({...todo}))))
  }
  updateTodo(todoUpdate):Observable<Todo> {
    let todo = this.todos.find( todo => todo.id === todoUpdate.id)
    todo.title = todoUpdate.title
    todo.completed = todoUpdate.completed
    return new Observable(Subscriber => Subscriber.next({...todo}))
  }
  addTodo(todo):Observable<Todo> {
    let id = this.todos.length === 0 ? 0 : (this.todos[this.todos.length - 1].id + 1)
    let newTodo = {...todo, id : id}
    this.todos.push(newTodo)    
    return new Observable(Subscriber => Subscriber.next(newTodo))
  }
  deleteTodo(todo):Observable<Todo> {
    this.todos = [...this.todos.filter(td => td.id !== todo.id)]
    return new Observable(Subscriber => Subscriber.next(todo))
  }
}
