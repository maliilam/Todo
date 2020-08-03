import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:object[];
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

}
