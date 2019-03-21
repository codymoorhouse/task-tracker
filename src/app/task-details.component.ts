import { Component, Input, ViewChild } from '@angular/core';

import { Task } from './task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  @Input() task: Task;

  private _showTooltip = false;

  get showTooltip() {
      return this._showTooltip;
  }

  get availableStatuses(): String[] {
    return Task.statuses;
  }

  getStatusLabel(status): String {
    return Task.getStatusLabel(status);
  }

  saveTask(event) {
    alert('Saved!');
  }

  mouseEnter(event) {
    this._showTooltip = true;
  }
  
  mouseLeave(event) {
    this._showTooltip = false;
  }
}