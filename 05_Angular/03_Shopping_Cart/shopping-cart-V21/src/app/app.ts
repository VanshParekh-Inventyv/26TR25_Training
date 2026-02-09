import { Component, signal } from '@angular/core';
import { ProductComponent } from './components/product/product';
import { CartComponent } from './components/cart/cart';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('shopping-cart-V21');
}
