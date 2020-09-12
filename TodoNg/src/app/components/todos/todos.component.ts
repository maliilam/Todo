import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todoService'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }
  get apiName() {
    return this.todoService.getApiName();
  }
  get todos() {
    return this.todoService.getTodos();
  }
  update(todoUpdate) {
    this.todoService.updateTodo(todoUpdate);
  }
  add(todo) {
    this.todoService.addTodo(todo)
  }
  delete(todo) {
    this.todoService.deleteTodo(todo)
  }
}
