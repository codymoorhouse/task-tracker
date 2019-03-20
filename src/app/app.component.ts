import { Component } from '@angular/core';

import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Task Tracker';
  tasks: Task[];

  ngOnInit() {
    this.setTasks();
  }

  setTasks() {
    this.tasks = Task.tasks.map(task => task.clone());
  }
}
