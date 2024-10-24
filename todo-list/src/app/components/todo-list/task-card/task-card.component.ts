import { Component } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {

}

// Rappresenta ciascun task nell'elenco.
// Visualizza il nome e la descrizione del task, e i pulsanti per completare, cancellare e modificare il task.
// Può emettere eventi verso il componente genitore per segnare il task come completato.