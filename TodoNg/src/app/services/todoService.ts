import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Todo } from '../models/Todo'
import { MemoryApiService } from '../apis/memory-api.service'

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    api: MemoryApiService;
    constructor(api: MemoryApiService) {  
        this.api = api;
    }
    getTodos() {
        return this.api.getTodos();
    }
    updateTodo(todoUpdate) {
        return this.api.updateTodo(todoUpdate);
    }
    addTodo(todo) {
        return this.api.addTodo(todo);
    }
    deleteTodo(todo) {
        return this.api.deleteTodo(todo);
    }
}
