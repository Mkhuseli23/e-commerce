import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
  private productsCollection;

  constructor(private firestore: Firestore) {
    this.productsCollection = collection(this.firestore, 'products');
  }

  getProducts(): Observable<Product[]> {
    return collectionData(this.productsCollection, { idField: 'id' }) as Observable<Product[]>;
  }

  addProduct(product: Product): Promise<void> {
    return addDoc(this.productsCollection, { ...product }).then(() => {});
  }

  updateProduct(id: string, product: Product): Promise<void> {
    const productDoc = doc(this.firestore, `products/${id}`);
    return updateDoc(productDoc, { ...product });
  }

  deleteProduct(id: string): Promise<void> {
    const productDoc = doc(this.firestore, `products/${id}`);
    return deleteDoc(productDoc);
  }
}
