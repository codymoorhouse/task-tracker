import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
  @Output() added = new EventEmitter<Task>();

  private task: Task;

  constructor() { }

  ngOnInit() {
    this.task = new Task(4, 'echk', 'cec', 2);
  }

  add() {
    this.added.emit(this.task);
  }

}