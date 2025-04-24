import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// https://typeorm.io/entities
// Ánh xạ với bảng tasks trong cơ sở dữ liệu
@Entity({ name: 'Tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  start_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  due_date?: Date;

  @Column({ length: 500, nullable: true })
  description?: string;

  @Column({ default: 'pending', length: 50 })
  status: 'pending' | 'in_progress' | 'completed';
}
