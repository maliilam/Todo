import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo'
import { TodoApi } from './todoApi'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class JsonApiService implements TodoApi {
  todosUrl:string;
  params:string;

  constructor(protected http:HttpClient) { }
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.params}`, httpOptions);
  }
  updateTodo(todoUpdate):Observable<Todo> {
    const url = `${this.todosUrl}/${todoUpdate.id}`
    return this.http.put<Todo>(url, todoUpdate, httpOptions);
  }
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl,
      todo, httpOptions);
  }
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
