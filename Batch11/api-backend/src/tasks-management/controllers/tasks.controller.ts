import { Controller, Get } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';

@Controller('tasks-management/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): any[] {
    return this.tasksService.getTasks();
  }
}
