import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model'
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

  createTask(Title: string, Description: string ): Task{
    const task: Task = {
        Task_id: uuid() ,
        Title, 
        Description,
        status: TaskStatus.OPEN
    };

    this.tasks.push(task); 
 //task value mapupush sa tasks array
     return task;
  }
}

