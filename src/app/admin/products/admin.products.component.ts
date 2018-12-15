import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from 'src/app/product/product.model';

const DEFAULT_PAGE_SIZE = 4;

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin.products.component.html',
  styleUrls: ['./admin.products.component.css']
})
export class AdminProductsComponent implements OnInit {

  currentPage = 1;
  products: Product[] = [];
  total: Number = 0;

  show = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    var response = this.productService.getProducts(0, DEFAULT_PAGE_SIZE);
    this.products = this.products.concat(response.payload);
    this.total = response.total;
    this.endOfData();
  }

  showMore() {
    var response = this.productService.getProducts(this.currentPage, DEFAULT_PAGE_SIZE);
    this.products = this.products.concat(response.payload);
    this.total = response.total;
    this.currentPage++;
    this.endOfData();
  }

  endOfData() {
    this.show = (this.total > this.currentPage * DEFAULT_PAGE_SIZE);
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(item => item !== product);
  }
}
