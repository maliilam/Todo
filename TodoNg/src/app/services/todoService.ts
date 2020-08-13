import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo'
import { Observable, of } from 'rxjs';

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

    getTodos():Observable<Todo[]> {
        return of(this.todos);
    }
}
