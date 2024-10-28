import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})

// Contiene:
// - ciascun task nell'elenco
// - i button per segnarlo come completato/in sospeso, o per eliminarlo/modificarlo

export class TaskCardComponent {

  // Riceve i task dal componente genitore.
  @Input() task!: Task;

  // Emette eventi verso il componente genitore per segnare il task come completato/in sospeso, o per modificarlo/eliminarlo
  @Output() delete = new EventEmitter<void>;
  @Output() edit = new EventEmitter<Task>();
  @Output() markAsComplete = new EventEmitter<void>;
  @Output() markAsPending = new EventEmitter<void>;

  constructor(private taskListService: TaskListService) { }

  onDelete(): void {
    this.delete.emit();
  }

  onMarkAsComplete(): void {
    this.markAsComplete.emit();
  }

  onMarkAsPending(): void {
    this.markAsPending.emit();
  }

  onEdit() {
    this.taskListService.setCurrentTask(this.task); // Setta il task come "current task" per passarlo all'edit task component
    this.edit.emit(this.task);
  }

}