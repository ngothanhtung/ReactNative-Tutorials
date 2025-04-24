import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { Task } from '../entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dto';

@Controller('tasks-management/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: number): Promise<Task | null> {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() body: CreateTaskDto): Promise<any> {
    return this.tasksService.createTask(body);
  }

  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe)
    id: number,
    @Body() body: UpdateTaskDto,
  ): Promise<Task | null> {
    return this.tasksService.updateTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
