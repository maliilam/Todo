import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderApiService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
  updateTodo(todoUpdate) {
    const url = `${this.todosUrl}/${todoUpdate.id}`
    return this.http.put(url, todoUpdate, httpOptions);
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
