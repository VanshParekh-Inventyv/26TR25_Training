import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
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
