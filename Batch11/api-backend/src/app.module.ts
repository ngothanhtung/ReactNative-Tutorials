import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EcommerceModule } from './modules/ecommerce/ecommerce.module';
import { TasksManagementModule } from './modules/tasks-management/tasks-management.module';

import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tasks',
      entities: ['dist/modules/tasks-management/**/*.entity{.ts,.js}'],
      synchronize: true, // Chỉ dùng cho môi trường phát triển
      dropSchema: false,
    }),
    // Máy thầy Tùng:
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'server.aptech.io',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'HBkb2012@trungvuong',
    //   database: 'tasks',
    //   entities: ['dist/modules/tasks-management/**/*.entity{.ts,.js}'],
    //   synchronize: true, // Chỉ dùng cho môi trường phát triển
    //   dropSchema: false,
    // }),
    EcommerceModule,
    TasksManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
