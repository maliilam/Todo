import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  title:String
  okLabel:String
  @Input() todo: Todo;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.okLabel = "Add"
    if (this.todo) {
      this.title = this.todo.title
      this.okLabel = "Update"
    }
  }
  onConfirm(): void {
    let todo = { title: this.title, completed: false }
    this.update.emit(todo)
  }
  onCancel(): void {
    this.cancel.emit()
  }
}
