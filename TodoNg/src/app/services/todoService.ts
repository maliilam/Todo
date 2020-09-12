import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { MemoryApiService } from '../apis/memory-api.service'
import { JsonPlaceholderApiService } from '../apis/json-placeholder-api.service'
import { SpringRestApiService } from '../apis/spring-rest-api.service'
import { Todo } from '../models/Todo'
import { TodoApi } from '../apis/todoApi';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    todos:Todo[];
    apis: TodoApi[];
    api: TodoApi;
    constructor(
        private memoryApi: MemoryApiService, 
        private jsonApi: JsonPlaceholderApiService,
        private springRestApi: SpringRestApiService) {
        this.apis = [memoryApi, jsonApi, springRestApi];
        this.api = this.apis[0];
        this.todos = [];
        this.api.getTodos().subscribe( todos => {
            this.todos = todos;
        });
    }

    getApiName() {
        return this.api.constructor.name
    }

    getApis() {
        return this.apis.map(api => ({
            name: api.constructor.name,
            selected: api === this.api
        }));
    }
    changeApi(name) {
        this.api = this.apis.find(api => api.constructor.name === name)
        this.api.getTodos().subscribe( todos => {
            this.todos = todos;
        });
        console.log("service api change to:", this.api)
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
        this.api.addTodo(newTodo).subscribe( todo => {
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
