import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cart } from './cart';
import { Product } from './cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exp6');

  products = [
    { name: 'Smartphone', price: 500 },
    { name: 'Laptop', price: 1000 },
    { name: 'Smartwatch', price: 200 },
    { name: 'Headphones', price: 150 },
    { name: 'Camera', price: 700 }
  ];

  cart = new Cart;

  addToCart(item: any) {
    this.cart.addItem(item);
  }

  removeFromCart(item: Product) {
    this.cart.removeItem(item);
  }

  clearCart() {
    this.cart.clearCart();
  }
}
