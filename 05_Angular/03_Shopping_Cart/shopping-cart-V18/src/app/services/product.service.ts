import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly PRODUCTS: Product[] = [
    {
      id: 'P001',
      name: 'Wireless Headphones',
      description:
        'Over-ear wireless headphones with active noise cancellation and 30-hour battery life.',
      imageUrl: 'wireless-headphones.png',
      price: 7999,
    },
    {
      id: 'P002',
      name: 'Mechanical Keyboard',
      description:
        'RGB mechanical keyboard with blue switches and aluminum body.',
      imageUrl: 'mechanical-keyboard.png',
      price: 6499,
    },
    {
      id: 'P003',
      name: 'Gaming Mouse',
      description:
        'High-precision gaming mouse with adjustable DPI and ergonomic design.',
      imageUrl: 'gaming-mouse.png',
      price: 2499,
    },
    {
      id: 'P004',
      name: 'Smart Watch',
      description:
        'Fitness-focused smartwatch with heart-rate monitoring and GPS support.',
      imageUrl: 'smart-watch.png',
      price: 11999,
    },
    {
      id: 'P005',
      name: 'USB-C Hub',
      description:
        '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.',
      imageUrl: 'usb-c-hub.png',
      price: 3299,
    },
  ];

  private cart: Cart[] = [];

  getProducts(): Product[] {
    return this.PRODUCTS;
  }

  getCart(): Cart[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    const item = this.cart.find((c) => c.product.id === product.id);

    if (item) {
      item.count += 1;
    } else {
      this.cart.push({ product, count: 1 });
    }
  }

  increment(productId: string): void {
    const item = this.cart.find((c) => c.product.id === productId);
    if (item) {
      item.count++;
    }
  }

  decrement(productId: string): void {
    const item = this.cart.find((c) => c.product.id === productId);
    if (item) {
      if (item.count > 1) {
        item.count--;
      } else {
        this.removeFromCart(productId);
      }
    }
  }

  removeFromCart(productId: string): void {
    const index = this.cart.findIndex((item) => item.product.id === productId);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  clearCart(): void {
    this.cart.length = 0;
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.product.price * item.count,
      0,
    );
  }
}
