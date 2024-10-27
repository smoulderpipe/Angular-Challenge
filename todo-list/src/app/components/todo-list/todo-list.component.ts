import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

// Componente principale che gestisce lo stato dell'applicazione (l'elenco dei task) e le interazioni generali.
// Delega al task list service la logica per aggiungere, modificare e filtrare i task
// Deve tenere traccia della lista di task e dello stato corrente ("completati", "attivi").
// Deve collegare i vari componenti figli, passando i dati e gestendo gli eventi.

export class TodoListComponent implements OnInit {

  tasks: Task[] = [];
  totalTasks: number = 0;
  completedTasks: number = 0;
  pendingTasks: number = 0;

  constructor(private taskListService: TaskListService, private router: Router) { }

  ngOnInit() {
    this.loadTasksAndUpdateCounters();
  }

  updateCounters() {
    this.totalTasks = this.taskListService.countAllTasks();
    this.completedTasks = this.taskListService.countCompletedTasks();
    this.pendingTasks = this.taskListService.countPendingTasks();
  }

  loadTasksAndUpdateCounters() {
    this.updateCounters();
    this.tasks = this.taskListService.getAllTasks();
    console.log("Current tasks:", this.tasks);
  }

  createTask(task: Task) {
    this.taskListService.addTask(task);
    this.loadTasksAndUpdateCounters();
  }

  editTask(task: Task) {
    this.router.navigate(['/edit-task', task.id]);
  }

  removeTask(index: number) {
    this.taskListService.deleteTask(index);
    this.loadTasksAndUpdateCounters();
  }

  markTaskAsComplete(index: number) {
    this.taskListService.toggleTaskCompletion(index);
    this.loadTasksAndUpdateCounters();
  }

  markTaskAsPending(index: number) {
    this.taskListService.unToggleTaskCompletion(index);
    this.loadTasksAndUpdateCounters();
  }

}