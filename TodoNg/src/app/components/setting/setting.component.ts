import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todoService'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private todoService:TodoService) {
  }

  ngOnInit(): void {
  }

  get apis() {
    return this.todoService.getApis();
  }

  onApiChange(apiName) {
    this.todoService.changeApi(apiName);
  }

}
