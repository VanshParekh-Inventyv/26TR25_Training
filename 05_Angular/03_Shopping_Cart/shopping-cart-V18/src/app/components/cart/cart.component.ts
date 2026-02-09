import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Cart } from '../../interfaces/cart';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];
  constructor(private productServices: ProductService) {}

  ngOnInit(): void {
    this.cart = this.productServices.getCart();
  }

  increment(productId: string): void {
    this.productServices.increment(productId);
  }

  decrement(productId: string): void {
    this.productServices.decrement(productId);
  }

  remove(productId: string): void {
    this.productServices.removeFromCart(productId);
  }

  clearCart(): void {
    this.productServices.clearCart();
  }

  get total(): number {
    return this.productServices.getTotalPrice();
  }
}
