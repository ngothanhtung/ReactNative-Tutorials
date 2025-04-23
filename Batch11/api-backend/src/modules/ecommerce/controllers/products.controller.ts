/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('/ecommerce/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Promise<any> {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: number): Promise<any> {
    return this.productsService.getProductById(id);
  }

  @Post()
  createProduct(@Body() body: any): Promise<any> {
    return this.productsService.createProduct(body);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: number, @Body() body: any): Promise<any> {
    return this.productsService.updateProduct(id, body);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): Promise<any> {
    return this.productsService.deleteProduct(id);
  }

  @Get('search/name')
  searchProducts(
    @Query('text') text: string,
    @Query('price') price: number,
  ): Promise<any> {
    console.log('Searching products with text:', text);
    console.log('Searching products with price:', price);
    return this.productsService.searchProducts(text);
  }
}
