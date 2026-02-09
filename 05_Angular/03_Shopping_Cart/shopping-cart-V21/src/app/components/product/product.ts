import { Component, signal } from '@angular/core';
import { ProductServices } from '../../services/product';
import { Product } from '../../interfaces/product';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class ProductComponent {
  products = signal<Product[]>([]);

  constructor(private productServices: ProductServices) {
    this.products.set(this.productServices.getProducts());
  }

  addToCart(product: Product) {
    this.productServices.addToCart(product);
  }
}
