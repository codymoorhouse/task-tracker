import { Component, Input, ViewChild } from '@angular/core';
import { NgForm }                      from '@angular/forms';

import { Task } from './task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Input() task: Task;
  @ViewChild('taskForm') form: NgForm;

  private _submitMessage = '';
  private _showTooltip = false;

  get showTooltip() {
      return this._showTooltip;
  }

  get submitMessage() {
    if (!this.form.valid) {
      this._submitMessage = '';
    }
    return this._submitMessage;
  }

  get availableStatuses(): String[] {
    return Task.statuses;
  }

  getStatusLabel(status): String {
    return Task.getStatusLabel(status);
  }

  onSubmit(form: NgForm) {
    this._submitMessage =  'Submitted. form value is ' + JSON.stringify(form.value);
  }

  saveTask(event) {
    console.log('test');
    alert('Saved!');
  }

  mouseEnter(event) {
    this._showTooltip = true;
  }
  
  mouseLeave(event) {
    this._showTooltip = false;
  }
}