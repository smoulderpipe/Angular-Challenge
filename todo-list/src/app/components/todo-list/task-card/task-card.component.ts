import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {

  // Rappresenta ciascun task nell'elenco.

  // Riceve i task dal componente genitore.
  @Input() task!: Task;

  // Emette eventi verso il componente genitore per segnare il task come completato/in sospeso, o per modificare/eliminare il task.
  @Output() delete = new EventEmitter<void>;
  @Output() edit = new EventEmitter<Task>();
  @Output() markAsComplete = new EventEmitter<void>;
  @Output() markAsPending = new EventEmitter<void>;

  constructor(private taskListService: TaskListService) { }

  // Gestisce i pulsanti per cancellare, segnare come completato e modificare il task
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
    this.taskListService.setCurrentTask(this.task);
    this.edit.emit(this.task);
  }

}