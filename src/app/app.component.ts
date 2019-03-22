import { Component, OnInit } from '@angular/core';

import { Task, TaskStatuses } from './tasks/task';
import { TasksService } from './tasks/task.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ TasksService ],
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = "Task Tracker";
  
  tasks: Task[];

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/codymoorhouse/task-tracker';
  
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
  
  getTimeEstimate(status: string) {
    let estimate = 0;
    if (this.tasks && status == 'all') {
      estimate = this.tasks.reduce((acc, task) => acc + task.estimate, 0);
    } else if (this.tasks && TaskStatuses.includes(status)) {
      estimate = this.tasks.reduce((acc, task) => task.status == status ? acc + task.estimate : acc, 0);
    }
    return estimate.toFixed(1); // TODO: toFixed is unreliable for rounding...
  }

  deleteTask(taskId: number) {
    this.tasksService.deleteTask(taskId)
      .subscribe(task => this.tasks = this.tasks.filter(t => t.id !== taskId));
  }

  updateTask(task: Task) {
    this.tasksService.updateTask(task)
      .subscribe(task => {
        console.log(task);
        
      });
  }

  addTask(task: Task) {
    this.tasksService.addTask(task)
      .subscribe(task => this.tasks.push(task));
  }
}
