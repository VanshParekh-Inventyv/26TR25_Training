import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productServices: ProductService) {}

  ngOnInit() {
    this.products = this.productServices.getProducts();
  }

  addToCart(product: Product): void {
    this.productServices.addToCart(product);
  }
}
