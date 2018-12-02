import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../service/product.service';
import { FirebaseProductsRepository } from '../service/firebase.product.repository';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const DEFAULT_PAGE_SIZE = 4;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // currentPage = 1;
  // products: Product[][] = [];
  // total: Number = 0;
  products: Observable<Product[][]>;
  // productsRows: Observable<Product[][]>;

  show = true;

  // .map(arr => arr.reduce((a, b) => a + b.value, 0));

  constructor(private productService: FirebaseProductsRepository) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  
    // var response = this.productService.getProducts(0, DEFAULT_PAGE_SIZE);
    // this.products.push(response.payload);
    // this.total = response.total;
    // this.endOfData();
  }

  showMore() {
    // var response = this.productService.getProducts(this.currentPage, DEFAULT_PAGE_SIZE);
    // this.products.push(response.payload);
    // this.total = response.total;
    // this.currentPage++;
    // this.endOfData();
  }

  endOfData() {
    return true;
  }

  // endOfData() {
  //   this.show = (this.total > this.currentPage * DEFAULT_PAGE_SIZE);
  // }
}
