import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task';
@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
  @Output() added = new EventEmitter<Task>();
  @Output() closed = new EventEmitter<boolean>();

  protected name: string;
  protected description: string;
  protected estimate: number;

  protected errors: {
    name: string,
    description: string,
    estimate: string
  } = {name: null, description: null, estimate: null}
  constructor() { }

  ngOnInit(): void {
    this.name = null;
    this.description = null;
    this.estimate = null;
  }

  add() {
    if (this.isValidTask()) {
      this.added.emit(new Task(this.name, this.description, this.estimate));
      this.closed.emit(true);
    } else {
      this.setErrors();
    }
  }

  isValidTask() {
    return this.name && this.description && this.estimate;
  }

  hasErrors() {
    return this.errors.name || this.errors.description && this.errors.estimate;
  }

  setErrors() {
    this.errors.name = !this.name ? 'A name must be specified' : null;
    this.errors.description = !this.description ? 'The description must be specified' : null;
    this.errors.estimate = !this.estimate ? 'A valid estimate must be specified.' : null;
  }

  close(event) {
    if (event.srcElement.id == 'task-modal-wrapper') {
      this.closed.emit(true);
    }
  }

}
