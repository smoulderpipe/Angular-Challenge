import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

// Componente principale che gestisce l'elenco dei task e le interazioni generali:
//    - Usa il task list service per ottenere i task, contarli, aggiungerli, modificarli, segnarli come completati/in sospeso e filtrarli
//    - Tiene traccia della lista di task e dello stato corrente ("completati", "in sospeso").
//    - Collega i vari componenti figli, passando i dati e gestendo gli eventi.

export class TodoListComponent implements OnInit {

  // tasks
  tasks: Task[] = [];
  task: Task | null = null;

  // contatori
  totalTasks: number = 0;
  completedTasks: number = 0;

  constructor(private taskListService: TaskListService, private router: Router) { }

  // durante l'inizializzazione ottiene la lista dei task e aggiorna i contatori, filtrando i task ottenuti dal service
  ngOnInit() {
    this.loadAllTasksAndUpdateCounters();
  }

  updateCounters() {
    this.totalTasks = this.taskListService.countAllTasks();
    this.completedTasks = this.taskListService.countCompletedTasks();
  }

  loadAllTasksAndUpdateCounters() {
    this.updateCounters();
    this.tasks = this.taskListService.getAllTasks();
  }

  loadPendingTasks(){
    this.tasks = this.taskListService.getPendingTasks();
  }

  loadCompletedTasks(){
    this.tasks = this.taskListService.getCompletedTasks();
  }

  // Crea il task che gli viene passato come parametro dal task form durante l'onSave
  createTask(task: Task | null) {
    if (task) {
      this.taskListService.addTask(task);
      this.loadAllTasksAndUpdateCounters();
    } else {
      console.error("Task is null and cannot be created.");
    }
  }

  // Naviga verso la route di editing quando riceve una richiesta di edit e un task dalla task card
  editTask(task: Task) {
    this.router.navigate(['/edit-task', task.id]);
  }

  // Rimuove il task con l'indice associato a una task card specifica
  removeTask(index: number) {
    this.taskListService.deleteTask(index);
    this.loadAllTasksAndUpdateCounters();
  }

  // Segna come "completato" il task con l'indice associato a una task card specifica
  markTaskAsComplete(index: number) {
    this.taskListService.toggleTaskCompletion(index);
    this.loadAllTasksAndUpdateCounters();
  }

  // Segna come "in sospeso" il task con l'indice associato a una task card specifica 
  markTaskAsPending(index: number) {
    this.taskListService.unToggleTaskCompletion(index);
    this.loadAllTasksAndUpdateCounters();
  }

}