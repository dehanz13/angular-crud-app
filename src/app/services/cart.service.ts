import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  // add items to cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  // return cart items
  getItems() {
    return this.items;
  }

  // clear cart items
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    // https://angular-ynqttp--4200.local.webcontainer.io/shipping
    return this.http.get<{type: string, price: number}[]>('../../assets/shipping.json');
  }
}
