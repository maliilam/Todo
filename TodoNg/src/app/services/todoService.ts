import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { MemoryApiService } from '../apis/memory-api.service'
import { JsonPlaceholderApiService } from '../apis/json-placeholder-api.service'
import { Todo } from '../models/Todo'

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos:Todo[];
    constructor(private api: MemoryApiService) {
        this.todos = [];
        this.api.getTodos().subscribe( todos => {
            this.todos = todos;
        });
    }
    getTodos() {
        return this.todos;
    }
    updateTodo(todoUpdate) {
        this.api.updateTodo(todoUpdate).subscribe( () => {
            let idx = this.todos.findIndex(td => td.id === todoUpdate.id);
            this.todos.splice(idx, 1, todoUpdate);
        });
    }
    addTodo(newTodo) {
        console.log("service add todo:", newTodo)
        this.api.addTodo(newTodo).subscribe( todo => {
            console.log("service add todo subscribe:", todo)
            this.todos.push(todo)
        });
    }
    deleteTodo(todo) {
        this.api.deleteTodo(todo).subscribe( () => {
            let idx = this.todos.findIndex(td => td.id === todo.id);
            this.todos.splice(idx, 1);
        });
    }
}
