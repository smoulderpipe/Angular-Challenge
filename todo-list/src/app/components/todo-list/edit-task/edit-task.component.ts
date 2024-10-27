import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  // Visualizza i dettagli di un task e permette di modificarli.

  task!: Task | null;

  constructor(
    private taskListService: TaskListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.task = this.taskListService.getCurrentTask();
    if (this.task) {
      console.log("Editing task:", this.task);
    } else {
      console.log("No task found for editing.");
    }
  }

  onEdit(updatedTask: Task) {
    this.taskListService.updateTask(updatedTask);
    alert("Task with id " + this.task?.id + " correctly edited.");
    this.taskListService.clearCurrentTask();
    this.router.navigate(['']);
  }
}
