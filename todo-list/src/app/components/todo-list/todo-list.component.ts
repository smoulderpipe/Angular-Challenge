declare var bootstrap: any;
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

//To-Do List Component (Genitore)

// Questo sarà il componente principale che gestisce lo stato dell'applicazione (l'elenco dei task) e le interazioni generali.
// Gestisce la logica per aggiungere, modificare e filtrare i task.
// Tiene traccia della lista di task e dello stato corrente (e.g., task completati, attivi).
// Collegherà i vari componenti figli, passando i dati e gestendo gli eventi.

export class TodoListComponent {

  newTask: boolean = true;

  constructor() { }

  // Questo metodo verrà eseguito dopo che il DOM è stato caricato completamente
  
}