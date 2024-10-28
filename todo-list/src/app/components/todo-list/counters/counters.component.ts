import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})

// Visualizza i contatori dei task ("totali", "completati").
export class CountersComponent {

  // Riceve i valori dalla to do list (genitore)
  @Input() totalTasks!: number;
  @Input() completedTasks!: number;
}
