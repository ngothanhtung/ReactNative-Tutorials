import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EcommerceModule } from './modules/ecommerce/ecommerce.module';
import { TasksManagementModule } from './tasks-management/tasks-management.module';

@Module({
  imports: [EcommerceModule, TasksManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
