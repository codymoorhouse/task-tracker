import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  @Input() task: Task;
  @Output() deleted = new EventEmitter<number>();

  private _showTooltip = false;

  get showTooltip() {
      return this._showTooltip;
  }

  get availableStatuses(): String[] {
    return Task.statuses;
  }

  delete() {
    this.deleted.emit(this.task.id);
  }

  getStatusLabel(status): String {
    return Task.getStatusLabel(status);
  }

  updateTaskStatus(event) {
    this.task.status = event.target.value;
    alert('TODO: PATCH TO SERVER');
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