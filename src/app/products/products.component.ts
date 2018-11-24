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

  currentPage = 1;
  products: Product[][] = []

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products.push(this.productService.getProducts(0, DEFAULT_PAGE_SIZE));
  }

  showMore() {
    this.products.push(this.productService.getProducts(this.currentPage, DEFAULT_PAGE_SIZE));
    this.currentPage++;
  }

}
