import { Injectable } from '@angular/core';
import { JsonApiService } from './json-api.service'


@Injectable({
  providedIn: 'root'
})
export class SpringRestApiService extends JsonApiService {
  todosUrl:string = 'https://localhost:8080/api/todos';
  todosLimit = '';
}
