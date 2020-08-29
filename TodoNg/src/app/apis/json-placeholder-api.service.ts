import { Injectable } from '@angular/core';
import { JsonApiService } from './json-api.service'

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderApiService extends JsonApiService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  params:string = '?_limit=5';
}
