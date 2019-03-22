import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task, TaskStatuses, TaskStatusLabels } from '../task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  @Input() task: Task;
  @Input() order: number;
  @Output() deleted = new EventEmitter<number>();
  @Output() updated = new EventEmitter<Task>();

  private _showTooltip = false;

  get showTooltip() {
      return this._showTooltip;
  }

  get availableStatuses(): String[] {
    return TaskStatuses;
  }

  delete() {
    this.deleted.emit(this.task.id);
  }

  getStatusLabel(status): String {
    return TaskStatusLabels[status] || 'N/A';
  }

  updateTaskStatus(event) {
    this.updated.emit(this.task);
  }

  mouseEnter(event) {
    this._showTooltip = true;
  }
  
  mouseLeave(event) {
    if (event.toElement.className != 'task-tooltip') {
      this._showTooltip = false;
    }
  }
}