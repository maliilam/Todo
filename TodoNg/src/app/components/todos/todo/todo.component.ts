import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(todo) {
    let todoUpdate = {...todo, done: !todo.done}
    this.update.emit(todoUpdate)
  }
  onDelete(todo) {
    this.delete.emit(todo)
  }
  todoClasses(todo) {
    return todo.done ? "done" : "open"
  }

}
