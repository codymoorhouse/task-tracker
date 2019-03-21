import { Component } from '@angular/core';

import { Task } from './task';
import { TaskDetailsComponent } from './task-details.component';
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

  getTimeEstimate(status: string) {
    if (status == 'all') {
      return this.tasks.reduce((acc, task) => acc + task.estimate, 0);
    } else if (Task.statuses.includes(status)) {
      return this.tasks.reduce((acc, task) => task.status == status ? acc + task.estimate : acc, 0);
    }
    return 0;
  }

  deleteTask(taskId: number) {
    /* Remove Element */
    let idx = this.tasks.findIndex(t => t.id == taskId);
    this.tasks.splice(idx, 1);

    /* Reorder tasks */
    this.updateTaskIds();
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTaskIds() {
    this.tasks.forEach((t, idx) => t.id = idx + 1); 
  }
}
