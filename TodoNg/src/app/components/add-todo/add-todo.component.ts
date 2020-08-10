import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:String
  @Output() update: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  add(): void {
    let todo = { title: this.title, done: false }
    this.update.emit(todo)
  }
}
