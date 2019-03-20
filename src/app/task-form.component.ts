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

  get submitMessage() {
    if (!this.form.valid) {
      this._submitMessage = '';
    }
    return this._submitMessage;
  }

  onSubmit(form: NgForm) {
    this._submitMessage =  'Submitted. form value is ' + JSON.stringify(form.value);
  }
}