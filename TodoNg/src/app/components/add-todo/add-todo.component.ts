import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:String
  @Input() todo: Todo;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if (this.todo) {
      this.title = this.todo.title
    }    
  }
  add(): void {
    let todo = { title: this.title, done: false }
    this.update.emit(todo)
  }
  onCancel(): void {
    this.cancel.emit()
  }
}
