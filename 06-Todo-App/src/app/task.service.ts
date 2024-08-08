import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([
    { id: uuidv4(), title: 'Task 1', dueDate: new Date(), completed: false },
    { id: uuidv4(), title: 'Task 2', dueDate: new Date(), completed: true },
  ]);

  getAllTasks = this.tasks.asReadonly();

  addTask(title: string, dueDate: Date) {
    const task: Task = {
      id: uuidv4(),
      title,
      dueDate,
      completed: false,
    };
    this.tasks.update((prevTasks) => [...prevTasks, task]);
  }

  removeTask(id: string) {
    this.tasks.update((prevTasks) =>
      [...prevTasks].filter((task) => task.id !== id)
    );
  }

  toggleTaskCompletion(id: string) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
}
