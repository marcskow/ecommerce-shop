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
  prevPage = 1;
  page = 1;
  all: Product[] = [];
  products: Product[] = [];
  total: Number = 0;
  headers = [
      { name: 'Avatar', width: '10%' },
      { name: 'Model', width: '15%' },
      { name: 'Order', width: '15%' },
      { name: 'Price', width: '10%' },
      { name: 'Description', width: '40%' },
      { name: 'Max', width: '10%' }];

  show = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((data: Product[]) => {
        this.all = data;
        this.total = data.length;
        this.products = this.all.slice((this.page - 1) * this.perPage, this.page * this.perPage)
      });
  }

  onPageChange(pageNumber: number) {
    if (pageNumber !== this.prevPage) {
      this.prevPage = this.page;
      this.page = pageNumber;
      this.products = this.all.slice((this.page - 1) * this.perPage, this.page * this.perPage)
    }
  }

  sortTable(index: number) {
    this.all.sort()
  }

  getPage() {
    return this.products = this.all.slice((this.page - 1) * this.perPage, this.page * this.perPage)
  }
}
