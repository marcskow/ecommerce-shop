import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../service/product.service';

const DEFAULT_PAGE_SIZE = 4;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  perPage = 5;
  page = 1;
  all: Product[] = [];
  products: Product[] = [];
  total: Number = 0;

  show = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((data: Product[]) => {
        this.all = data;
        this.total = data.length;
      });
    this.products = this.all.slice((this.page - 1) * this.perPage, this.page * this.perPage)
  }
}
