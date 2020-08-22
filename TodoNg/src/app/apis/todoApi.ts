import { Observable } from 'rxjs';
import { Todo } from '../models/Todo'

export interface TodoApi {
  getTodos():Observable<Todo[]>;
  updateTodo(todoUpdate):Observable<Todo>;
  addTodo(todo:Todo):Observable<Todo>;
  deleteTodo(todo:Todo):Observable<Todo>;
}
