import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor() { }

  ngOnInit(): void {
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

  onUpdate(todoUpdate) {
    let todo = this.todos.find( todo => todo.id === todoUpdate.id)
    todo.title = todoUpdate.title
    todo.done = todoUpdate.done
  }

}
