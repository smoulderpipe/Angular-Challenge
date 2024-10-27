import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

// Gestisce il form per aggiungere o modificare un task.
// Deve utilizzare il two-way data binding per mantenere i dati sincronizzati con il componente genitore.

export class TaskFormComponent implements OnInit {

  //Riceve il task da modificare, se esiste
  @Input() task!: Task | null;

  //Emette il task aggiunto o modificato
  @Output() onSave = new EventEmitter<Task>();
  @Output() onEdit = new EventEmitter<Task>();
  taskForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    if (this.task !== null && this.task !== undefined) {
      this.isEditMode = true;
    }

    this.taskForm = this.fb.group({
      taskName: [this.task?.name || '', Validators.required],
      taskDescription: [this.task?.description || '', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      if (this.isEditMode) {
        if (this.task) {
          const editedTask: Task = this.task;
          this.task.name = this.taskForm.value.taskName;
          this.task.description = this.taskForm.value.taskDescription;
          this.task.completed = this.taskForm.value.completed;
          this.onEdit.emit(editedTask);
        } else {
          console.log("error: task not found");
        }

      } else {
        const newTask: Task = {
          id: 0,
          name: this.taskForm.value.taskName,
          description: this.taskForm.value.taskDescription,
          completed: false
        }
        this.onSave.emit(newTask);
        this.taskForm.reset();
      }
    }
    else {
      console.log("Error");
    }
  }

  checkRoute(): void {
    this.router.events.subscribe(() => {
      this.isEditMode = this.router.url.includes('/edit-task');
    });
  }
}
