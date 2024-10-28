import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})

// Permette all'utente di filtrare i task mostrati nella lista ("tutti", "completati", "in sospeso").
// Emette un evento al componente genitore per cambiare il filtro attivo.
// Imposta un activeFilter per aggiungere dinamicamente la classe active al pulsante attivo

export class FilterButtonsComponent {

  activeFilter: string = 'all';

  @Output() onShowAll = new EventEmitter<void>();
  @Output() onShowPending = new EventEmitter<void>();
  @Output() onShowCompleted = new EventEmitter<void>();

  onShowAllTasks(): void {
    this.activeFilter = 'all';
    this.onShowAll.emit();
  }

  onShowPendingTasks(): void {
    this.activeFilter = 'pending'; 
    this.onShowPending.emit();
  }
  
  onShowCompletedTasks(): void {
    this.activeFilter = 'completed';
    this.onShowCompleted.emit();
  }

}