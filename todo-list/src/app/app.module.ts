import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskFormComponent } from './components/todo-list/task-form/task-form.component';
import { TaskCardComponent } from './components/todo-list/task-card/task-card.component';
import { FilterButtonsComponent } from './components/todo-list/filter-buttons/filter-buttons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountersComponent } from './components/todo-list/counters/counters.component';
import { EditTaskComponent } from './components/todo-list/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskFormComponent,
    TaskCardComponent,
    FilterButtonsComponent,
    CountersComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
