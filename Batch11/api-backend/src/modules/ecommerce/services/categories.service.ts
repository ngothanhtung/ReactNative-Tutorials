import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  getCategories(): any {
    return [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' },
    ];
  }

  getCategoryById(id: number): any {
    console.log(`Fetching category with ID: ${id}`);
    // Code here to fetch a category from the database
    // ...
    // Returning a mock category for demonstration
    return { id: id, name: 'C1' };
  }

  createCategory(data: any): any {
    console.log('Creating category with data:', data);
    // Code here to create a category and save it to the database
    // data
    // ...
    // Returning a mock category for demonstration
    return { message: 'Category created successfully' };
  }

  updateCategory(id: number, data: any): any {
    console.log(`Updating category with ID ${id} and data:`, data);
    // Code here to update a category in the database
    // ...
    // Returning a mock response for demonstration
    return { message: 'Category updated successfully' };
  }

  deleteCategory(id: number): any {
    console.log(`Deleting category with ID ${id}`);
    // Code here to delete a category from the database
    // ...
    // Returning a mock response for demonstration
    return { message: 'Category deleted successfully' };
  }
}
