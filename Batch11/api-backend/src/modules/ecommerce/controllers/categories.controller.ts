/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Controller('/ecommerce/categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly productsService: ProductsService,
  ) {}

  @Get()
  getCategories(): Promise<any> {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('id') id: number): Promise<any> {
    return this.categoriesService.getCategoryById(id);
  }

  @Get(':categoryId/products')
  getProductsByCategoryId(
    @Param('categoryId') categoryId: number,
  ): Promise<any> {
    return this.productsService.getProductByCategoryId(categoryId);
  }

  @Post()
  @HttpCode(200)
  @Header('Cache-Control', 'no-store')
  createCategory(@Body() body: any): Promise<any> {
    return this.categoriesService.createCategory(body);
  }

  @Patch(':id')
  updateCategory(@Param('id') id: number, @Body() body: any): Promise<any> {
    return this.categoriesService.updateCategory(id, body);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number): Promise<any> {
    return this.categoriesService.deleteCategory(id);
  }
}
