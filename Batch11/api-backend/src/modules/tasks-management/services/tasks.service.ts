import { GoneException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dto';

@Injectable()
export class TasksService {
  // Repository là một lớp trong TypeORM giúp tương tác với cơ sở dữ liệu
  constructor(
    @InjectRepository(Task)
    private repository: Repository<Task>,
  ) {}

  // Tạo một task mới
  async createTask(task: CreateTaskDto): Promise<Task> {
    return await this.repository.save(task);
  }

  // Lấy danh sách tất cả các task
  getTasks(): Promise<Task[]> {
    return this.repository.find();
  }

  // Lấy danh sách các task theo id
  async getTask(id: number): Promise<Task | null> {
    // Tìm kiếm task theo id
    // Nếu không tìm thấy, trả về lỗi 410 GONE
    // Nếu tìm thấy, trả về task
    const found = await this.repository.findOneBy({ id });
    if (!found) {
      throw new GoneException({
        statusCode: HttpStatus.GONE,
        message: ['Task not found'],
        error: 'Bad Request',
      });
    }

    return found;
  }

  // Cập nhật task theo id
  async updateTask(id: number, task: UpdateTaskDto): Promise<Task | null> {
    const found = await this.repository.findOneBy({ id });
    if (!found) {
      throw new GoneException({
        statusCode: HttpStatus.GONE,
        message: ['Task not found'],
        error: 'Bad Request',
      });
    }

    await this.repository.update(id, task);
    return this.getTask(id);
  }

  // Xóa task theo id
  async deleteTask(id: number): Promise<void> {
    const found = await this.repository.findOneBy({ id });
    if (!found) {
      throw new GoneException({
        statusCode: HttpStatus.GONE,
        message: ['Task not found'],
        error: 'Bad Request',
      });
    }

    await this.repository.delete(id);
  }
}
