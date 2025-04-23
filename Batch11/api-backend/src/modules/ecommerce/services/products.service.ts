import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts(): any {
    return [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
    ];
  }

  getProductById(id: number): any {
    console.log(`Fetching product with ID: ${id}`);
    // Code here to fetch a product from the database
    // ...
    // Returning a mock product for demonstration
    return { id: id, name: 'P1', price: 100 };
  }

  getProductByCategoryId(categoryId: number): any {
    console.log(`Fetching products with categoryID: ${categoryId}`);
    // Code here to fetch a product from the database
    // ...
    // Returning a mock product for demonstration
    return { categoryId: categoryId, name: 'P1', price: 100 };
  }

  createProduct(data: any): any {
    console.log('Creating product with data:', data);
    // Code here to create a product and save it to the database
    // data
    // ...
    // Returning a mock product for demonstration
    return { message: 'Product created successfully' };
  }

  updateProduct(id: number, data: any): any {
    console.log(`Updating product with ID ${id} and data:`, data);
    // Code here to update a product in the database
    // ...
    // Returning a mock response for demonstration
    return { message: 'Product updated successfully' };
  }

  deleteProduct(id: number): any {
    console.log(`Deleting product with ID ${id}`);
    // Code here to delete a product from the database
    // ...
    // Returning a mock response for demonstration
    return { message: 'Product deleted successfully' };
  }

  searchProducts(text: string): any {
    console.log(`Searching products with text: ${text}`);
    // Code here to search for products in the database
    // ...
    // Returning a mock product for demonstration
    return { id: 1, name: 'P1', price: 100 };
  }
}
