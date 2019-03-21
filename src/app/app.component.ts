import { Component } from '@angular/core';

import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Task Tracker';
  tasks: Task[] = Task.tasks;

  getTimeEstimate(status: string) {
    if (status == 'all') {
      return this.tasks.reduce((acc, task) => acc + task.estimate, 0);
    } else if (Task.statuses.includes(status)) {
      return this.tasks.reduce((acc, task) => task.status == status ? acc + task.estimate : acc, 0);
    }
    return 0;
  }

  deleteTask(taskId: number) {
    Task.remove(taskId);
    alert('TODO: DELETE FROM SERVER');
  }

  addTask(task: Task) {
    Task.add(task);
  }
}
