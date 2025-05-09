import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id?: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): Promise<void> {
    return new Promise((resolve) => {
      const newProduct = { ...product, id: this.generateId() };
      this.products.push(newProduct);
      resolve();
    });
  }

  updateProduct(id: string, product: Product): Promise<void> {
    return new Promise((resolve) => {
      const index = this.products.findIndex(p => p.id === id);
      if (index !== -1) {
        this.products[index] = { ...product, id };
      }
      resolve();
    });
  }

  deleteProduct(id: string): Promise<void> {
    return new Promise((resolve) => {
      this.products = this.products.filter(p => p.id !== id);
      resolve();
    });
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
