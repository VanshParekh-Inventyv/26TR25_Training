import { Component, signal, effect } from '@angular/core';
import { ProductServices } from '../../services/product';
import { Cart } from '../../interfaces/cart';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class CartComponent {
  cart = signal<Cart[]>([]);
  total = signal(0);

  constructor(private productServices: ProductServices) {
    this.cart.set(this.productServices.cart());

    effect(() => {
      this.cart.set(this.productServices.cart());
      this.total.set(this.productServices.totalPrice());
    });
  }

  increment(id: string) {
    this.productServices.increment(id);
  }

  decrement(id: string) {
    this.productServices.decrement(id);
  }

  remove(id: string) {
    this.productServices.removeFromCart(id);
  }

  clear() {
    this.productServices.clearCart();
  }
}
