import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})

// Contiene la logica per ottenere i task, contarli, aggiungerli, modificarli, segnarli come completati/in sospeso
export class TaskListService {

  private tasks: Task[] = [];
  private nextId = 1;
  private currentTask: Task | null = null;

  // Prepara una lista di placeholder tasks
  constructor() {
    this.tasks = [
      { id: 1, name: 'Task 1', description: 'Example description for task 1', completed: false },
      { id: 2, name: 'Task 2', description: 'Example description for task 2, this is a really long description made for testing character limits', completed: false },
    ];
  }

  // Ottiene tutti i task
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Ottiene tutti i task completati
  getCompletedTasks(): Task[] {
    return this.tasks.filter(task => task.completed);
  }

  // Ottiene tutti i task in sospeso
  getPendingTasks(): Task[] {
    return this.tasks.filter(task => !task.completed)
  }

  // Conta tutti i task
  countAllTasks(): number {
    return this.tasks.length;
  }

  // Conta i task completati
  countCompletedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  // Aggiunge un nuovo task
  addTask(task: any): void {
    task.id = this.nextId++;
    task.completed = false;
    this.tasks.push(task);
  }

  // Ottiene il "current task"
  getCurrentTask(): Task | null {
    return this.currentTask;
  }

  // Imposta il "current task"
  setCurrentTask(task: Task) {
    this.currentTask = task;
  }

  // Svuota il "current task"
  clearCurrentTask() {
    this.currentTask = null;
  }

  // Aggiorna il task per il quale si è richiesta una modifica
  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id); // se non lo trova, restituisce -1
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      console.log(`Task with ID ${updatedTask.id} updated.`);
    } else {
      console.log(`Task with ID ${updatedTask.id} not found.`);
    }
  }

  // Segna un task come "completato"
  toggleTaskCompletion(index: number): void {
    this.tasks[index].completed = true;
  }

  // Segna un task come "in sospeso"
  unToggleTaskCompletion(index: number): void {
    this.tasks[index].completed = false;
  }

  // Rimuove un task
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

}
