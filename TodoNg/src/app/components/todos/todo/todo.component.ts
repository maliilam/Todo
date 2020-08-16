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
  editing: boolean;

  constructor() {
    this.editing = false;
   }

  ngOnInit(): void {
  }
  onToggle(update) {
    let todoUpdate = {...this.todo, done: !update.done}
    this.update.emit(todoUpdate)
  }
  onDelete(todo) {
    this.delete.emit(todo)
  }
  onUpdate(update) {
    let todoUpdate = {...this.todo, title: update.title}
    this.update.emit(todoUpdate)
    this.editing = false;
  }
  todoClasses(todo) {
    return todo.done ? "done" : "open"
  }

}
