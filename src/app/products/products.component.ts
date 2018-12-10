import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../service/product.service';
import { Filter } from './filter.model';

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
  total: number = 0;
  searchText: string = "";
  filters: Filter[] = [];

  headers = [
      { name: 'Avatar', width: '10%', sortable: false, order: 'none' },
      { name: 'Model', width: '15%', sortable: true, order: 'asc' },
      { name: 'Order', width: '15%', sortable: false, order: 'none' },
      { name: 'Price', width: '10%', sortable: true, order: 'none' },
      { name: 'Description', width: '40%', sortable: true, order: 'none' },
      { name: 'Max', width: '10%', sortable: false, order: 'none' }];

  show = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts('')
      .subscribe((data: Product[]) => {
        this.all = data;
        this.total = data.length;
        this.products = this.all
          .sort((a, b) => (a.name > b.name) ? 1 : -1)
          .slice((this.page - 1) * this.perPage, this.page * this.perPage)
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

  searchBy(text: string) {
    this.searchText = text;
    this.productService
      .getProducts(text)
      .subscribe((data: Product[]) => {
        this.all = data;
        this.total = data.length;
        this.products = this.all
          .sort((a, b) => (a.name > b.name) ? 1 : -1)
          .slice((this.page - 1) * this.perPage, this.page * this.perPage)
      });
  }

  changeOrder(index: number) {
    this.headers.forEach(header => header.order = 'none');

    var currentOrder = this.headers[index].order;
    if (currentOrder === 'none')
      this.headers[index].order = 'asc';
    else if (currentOrder === 'asc')
      this.headers[index].order = 'desc';
    else
      this.headers[index].order = 'none';

    this.sort(this.headers[index].name, this.headers[index].order)
  }

  sort(name: string, order: string) {
    if (name === 'Model') {
      if (order === 'desc') {
        this.all.sort((a, b) => (a.name < b.name) ? 1 : -1);
      } else {
        this.all.sort((a, b) => (a.name > b.name) ? 1 : -1);
      }
    } else if (name === 'Price') {
      if (order === 'desc') {
        this.all.sort((a, b) => (a.price < b.price) ? 1 : -1);
      } else if (order === 'asc') {
        this.all.sort((a, b) => (a.price > b.price) ? 1 : -1);
      } else {
        this.all.sort((a, b) => (a.name < b.name) ? 1 : -1);
      }
    } else if (name === 'Description') {
      if (order === 'desc') {
        this.all.sort((a, b) => (a.description < b.description) ? 1 : -1);
      } else if (order === 'asc') {
        this.all.sort((a, b) => (a.description > b.description) ? 1 : -1);
      } else {
        this.all.sort((a, b) => (a.name < b.name) ? 1 : -1);
      }
    }
    this.products = this.all.slice((this.page - 1) * this.perPage, this.page * this.perPage)
  }
}
