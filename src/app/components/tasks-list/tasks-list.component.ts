import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent implements OnInit {
  @Input() tasks: string[];
  constructor() { }

  ngOnInit(): void {
  }

  removeTask(task: string) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
