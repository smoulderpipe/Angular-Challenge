import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})

// Visualizza i dettagli di un task e permette di modificarli.
export class EditTaskComponent implements OnInit {

  // Riceve un task
  task!: Task | null;

  // Costruisce l'edit task component e inietta servizio e router
  constructor(
    private taskListService: TaskListService,
    private router: Router
  ) { }

  // Usa il servizio per ottenere il "current task" da modificare
  ngOnInit() {
    this.task = this.taskListService.getCurrentTask();
    if (this.task) {
      console.log("Editing task:", this.task);
    } else {
      console.log("No task found for editing.");
    }
  }

  // Modifica il task, lo rimuove dallo stato "current task" e naviga verso la homepage
  onEdit(updatedTask: Task) {
    this.taskListService.updateTask(updatedTask);
    alert("Task with id " + this.task?.id + " correctly edited.");
    this.taskListService.clearCurrentTask();
    this.router.navigate(['']);
  }
  
}
