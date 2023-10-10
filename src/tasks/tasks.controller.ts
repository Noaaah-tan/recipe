import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { get } from 'http';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
   

    constructor(private taskService:TasksService){}

    @Get('/fetch')
    getAllTasks() {
        return this.taskService.getAllTasks();

    }

    @Post('/create')
    createTask(
        @Body('Title') title: string,
        @Body('Description') description: string
    ): Task{
        return this.taskService.createTask(title,description);
    }
    
  


}
