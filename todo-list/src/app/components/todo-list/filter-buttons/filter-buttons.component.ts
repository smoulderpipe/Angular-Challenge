import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent {

  // Deve permettere di filtrare i task mostrati nella lista (tutti, completati, in sospeso).
// Deve emettere un evento al componente genitore per cambiare il filtro attivo.


  @Output() onShowAll = new EventEmitter<void>();
  @Output() onShowPending = new EventEmitter<void>();
  @Output() onShowCompleted = new EventEmitter<void>();

  onShowAllTasks(): void {
    this.onShowAll.emit();
  }

  onShowPendingTasks(): void {
    this.onShowPending.emit();
  }
  
  onShowCompletedTasks(): void {
    this.onShowCompleted.emit();
  }

}