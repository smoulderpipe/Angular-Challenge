import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private tasks: Task[] = [];
  private nextId = 1;
  private currentTask: Task | null = null;

  constructor() {
    this.tasks = [
      { id: 1, name: 'Task 1', description: 'Description 1', completed: false },
      { id: 2, name: 'Task 2', description: 'Description 2', completed: false },
    ];
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  countAllTasks(): number {
    return this.tasks.length;
  }

  countCompletedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  countPendingTasks(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  addTask(task: any): void {
    task.id = this.nextId++;
    task.completed = false;
    this.tasks.push(task);
  }

  getCurrentTask(): Task | null {
    return this.currentTask;
  }

  setCurrentTask(task: Task) {
    this.currentTask = task;
  }

  clearCurrentTask() {
    this.currentTask = null;
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id); // se non lo trova, restituisce -1
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      console.log(`Task with ID ${updatedTask.id} updated.`);
    } else {
      console.log(`Task with ID ${updatedTask.id} not found.`);
    }
  }

  toggleTaskCompletion(index: number): void {
    this.tasks[index].completed = true;
  }

  unToggleTaskCompletion(index: number): void {
    this.tasks[index].completed = false;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

}
