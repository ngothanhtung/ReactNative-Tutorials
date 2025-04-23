import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks(): any[] {
    return [
      { id: 1, name: 'Task 1', description: 'Description of Task 1' },
      { id: 2, name: 'Task 2', description: 'Description of Task 2' },
      { id: 3, name: 'Task 3', description: 'Description of Task 3' },
    ];
  }
}
