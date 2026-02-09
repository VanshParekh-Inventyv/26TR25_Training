import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productServices: ProductService) {}

  ngOnInit() {
    this.products = this.productServices.getProducts();
  }

  addToCart(product: Product): void {
    this.productServices.addToCart(product);
  }
}
