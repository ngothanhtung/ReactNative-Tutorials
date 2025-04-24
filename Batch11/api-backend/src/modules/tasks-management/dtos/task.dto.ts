/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, Length } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

// DTO: Data Transfer Object
// Class validator: Thư viện giúp kiểm tra và xác thực dữ liệu đầu vào
export class CreateTaskDto {
  @IsNotEmpty({ message: 'Title is required' })
  @Length(1, 255, {
    message:
      'Title must be greater than $constraint1 and less than or equal to $constraint2 characters',
  })
  title: string;

  @IsNotEmpty({ message: 'Start date is required' })
  start_date: Date;
  due_date?: Date;
  description?: string;

  @IsNotEmpty({ message: 'Status is required' })
  status: 'pending' | 'in_progress' | 'completed';
}

// PartialType: Tạo một DTO mới từ một DTO đã có, nhưng không bao gồm các thuộc tính được chỉ định
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
