import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

// Deve gestire il form per aggiungere e modificare i task.
// Deve utilizzare il two-way data binding per mantenere i dati sincronizzati con il componente genitore.
// Deve emettere un evento al completamento dell'aggiunta o della modifica di un task.
// Fa uso dei Reactive Forms Module, importati nell'app module

export class TaskFormComponent implements OnInit {

  taskForm!: FormGroup;

  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.checkRoute();

    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      taskDescription: ['', Validators.required]
    })
  }

  onSubmit(){
    if (this.taskForm.valid){
      console.log(this.taskForm.value);
    } else {
      console.log("Error");
    }
  }

  // Se la rotta è edit-task deve impostare EditMode su true
  checkRoute(): void{
    this.router.events.subscribe(() => {
      this.isEditMode = this.router.url.includes('/edit-task');
    });
  }
}
