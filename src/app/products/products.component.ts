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
  products: Product[][] = [];
  total: Number = 0;

  show = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    var response = this.productService.getProducts(0, DEFAULT_PAGE_SIZE);
    this.products.push(response.payload);
    this.total = response.total;
    this.endOfData();
  }

  showMore() {
    var response = this.productService.getProducts(this.currentPage, DEFAULT_PAGE_SIZE);
    this.products.push(response.payload);
    this.total = response.total;
    this.currentPage++;
    this.endOfData();
  }

  endOfData() {
    this.show = (this.total > this.currentPage * DEFAULT_PAGE_SIZE);
  }
}
