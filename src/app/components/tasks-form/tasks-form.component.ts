import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html'
})
export class TasksFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tasks: string[] = []; 
  newTask: string = ''; 

  addTask() {
    if (this.newTask.trim() !== '') { 
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
    console.log(this.tasks);
  }

}
