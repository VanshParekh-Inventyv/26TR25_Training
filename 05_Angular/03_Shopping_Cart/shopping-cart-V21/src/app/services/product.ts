import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../interfaces/product';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  readonly PRODUCTS: Product[] = [
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
      description: 'RGB mechanical keyboard with blue switches and aluminum body.',
      imageUrl: 'mechanical-keyboard.png',
      price: 6499,
    },
    {
      id: 'P003',
      name: 'Gaming Mouse',
      description: 'High-precision gaming mouse with adjustable DPI and ergonomic design.',
      imageUrl: 'gaming-mouse.png',
      price: 2499,
    },
    {
      id: 'P004',
      name: 'Smart Watch',
      description: 'Fitness-focused smartwatch with heart-rate monitoring and GPS support.',
      imageUrl: 'smart-watch.png',
      price: 11999,
    },
    {
      id: 'P005',
      name: 'USB-C Hub',
      description: '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.',
      imageUrl: 'usb-c-hub.png',
      price: 3299,
    },
  ];

  cart = signal<Cart[]>([]);

  totalPrice = computed(() =>
    this.cart().reduce((sum, item) => sum + item.product.price * item.count, 0),
  );

  getProducts() {
    return this.PRODUCTS;
  }

  addToCart(product: Product) {
    const item = this.cart().find((c) => c.product.id === product.id);
    if (item) {
      this.cart.set(
        this.cart().map((c) => (c.product.id === product.id ? { ...c, count: c.count + 1 } : c)),
      );
    } else {
      this.cart.set([...this.cart(), { product, count: 1 }]);
    }
  }

  increment(productId: string) {
    this.cart.set(
      this.cart().map((c) => (c.product.id === productId ? { ...c, count: c.count + 1 } : c)),
    );
  }

  decrement(productId: string) {
    const item = this.cart().find((c) => c.product.id === productId);
    if (!item) return;

    if (item.count > 1) {
      this.cart.set(
        this.cart().map((c) => (c.product.id === productId ? { ...c, count: c.count - 1 } : c)),
      );
    } else {
      this.removeFromCart(productId);
    }
  }

  removeFromCart(productId: string) {
    this.cart.set(this.cart().filter((c) => c.product.id !== productId));
  }

  clearCart() {
    this.cart.set([]);
  }
}
