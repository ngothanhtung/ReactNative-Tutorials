import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';

@Module({
  imports: [],
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService, CategoriesService],
})
export class EcommerceModule {}
