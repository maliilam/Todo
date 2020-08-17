import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    TodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
