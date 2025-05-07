import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Kids T-Shirt', image: 'assets/images/WIN28454@1.5x.jpg', price: 100, sizes: ['4-5', '5-6', '6-7', '7-8', '8-9'], selectedSize: '' },
    { id: 2, name: 'Kids Jacket', image: 'assets/images/WIN28575@1.5x.jpg', price: 150, sizes: ['4-5', '5-6', '6-7', '7-8', '8-9'], selectedSize: '' },
    { id: 3, name: 'Kids Jacket', image: 'assets/images/WIN28405@1.5x.jpg', price: 150, sizes: ['4-5', '5-6', '6-7', '7-8', '8-9'], selectedSize: '' },
    { id: 4, name: 'Kids Jacket', image: 'assets/images/WIN28436@1.5x.jpg', price: 150, sizes: ['4-5', '5-6', '6-7', '7-8', '8-9'], selectedSize: '' },
    { id: 5, name: 'Kids Jacket', image: 'assets/images/WIN28454@1.5x.jpg', price: 150, sizes: ['4-5', '5-6', '6-7', '7-8', '8-9'], selectedSize: '' },
    { id: 6, name: 'Kids Jacket', image: 'assets/images/WIN28572@1.5x.jpg', price: 150, sizes: ['4-5', '5-6', '6-7', '7-8', '8-9'], selectedSize: '' },
    { id: 7, name: 'Kids Jacket', image: 'assets/images/WIN28575@1.5x.jpg', price: 150, sizes: ['4-5', '5-6', '6-7', '7-8', '8-9'], selectedSize: '' },
    { id: 8, name: 'Kids Jacket', image: 'assets/images/WIN28575@1.5x.jpg', price: 150, sizes: ['4-5', '5-6', '6-7', '7-8', '8-9'], selectedSize: '' },
    { id: 9, name: 'Kids Jacket', image: 'assets/images/WIN28575@1.5x.jpg', price: 150, sizes: ['4-5', '5-6', '6-7', '7-8', '8-9'], selectedSize: '' },
    { id: 10, name: 'Kids Jacket', image: 'assets/images/WIN28575@1.5x.jpg', price: 150, sizes: ['4-5', '5-6', '6-7', '7-8', '8-9'], selectedSize: '' }
  ];

  addToCart(product: any) {
    console.log('Adding to cart:', product);
    // Implement add to cart logic here
  }
}
