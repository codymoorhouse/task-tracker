import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Task } from './task';
import { ROOT_URL } from '../config';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};

@Injectable()
export class TasksService {
  constructor(private http: HttpClient) { }

  tasksUrl = ROOT_URL + '/tasks';

  /** GET tasks from the server */
  getTasks() {
      return this.http.get<Task[]>(this.tasksUrl)
  }

  /** POST: add a new task to the database */
  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions);
  }

  /** DELETE: delete the task from the server */
  deleteTask(id: number): Observable<{}> {
    return this.http.delete(`${this.tasksUrl}/${id}`, httpOptions);
  }
  
  /** PUT: update the task on the server. Returns the updated task upon success. */
  updateTask (task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.tasksUrl}/${task.id}`, task, httpOptions);
  }
}