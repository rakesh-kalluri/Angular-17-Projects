import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  private tasksService = inject(TaskService);

  tasks = computed(() => this.tasksService.getAllTasks);

  enteredTitle = '';
  enteredTaskDueDate = '';

  addTask() {
    console.log(this.tasks());
  }
}
