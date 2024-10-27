import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent {
  // Deve permettere di contare i task mostrati nella lista ("tutti", "completati").

  @Input() totalTasks!: number;
  @Input() completedTasks!: number;
  @Input() pendingTasks!: number;
}
