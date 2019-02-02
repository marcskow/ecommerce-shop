import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../service/product.service';
import { Filter } from './filter.model';
import { FilterForm } from './filter.form';

const DEFAULT_PAGE_SIZE = 4;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
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
  defaultSort: (a: Product, b: Product) => number = (a, b) => (a.name > b.name) ? 1 : -1
  currentSort: (a: Product, b: Product) => number = this.defaultSort

  headers = [
      { name: 'Avatar', width: '10%', sortable: false, order: 'none' },
      { name: 'Model', width: '15%', sortable: true, order: 'asc' },
      { name: 'Order', width: '15%', sortable: false, order: 'none' },
      { name: 'Price', width: '10%', sortable: true, order: 'none' },
      { name: 'Description', width: '40%', sortable: true, order: 'none' },
      { name: 'Max', width: '10%', sortable: false, order: 'none' }];

  providers: FilterForm[] = []
  memories: FilterForm[] = []
  rams: FilterForm[] = []
  oses: FilterForm[] = []

  dualsim: boolean = false
  externalMemory: boolean = false

  show = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts('', this.filters)
      .subscribe((data: Product[]) => {
        this.all = data;
        this.all.forEach(product => {
          if (this.providers.find(p => p.value === product.provider) == null) {
            this.providers.push(new FilterForm("provider", product.provider, false));
          }
          if (this.memories.find(p => p.value === "" + product.memory) == null) {
            this.memories.push(new FilterForm("memory", "" + product.memory, false));
          }
          if (this.rams.find(p => p.value === "" + product.ram) == null) {
            this.rams.push(new FilterForm("ram", "" + product.ram, false));
          }
          if (this.oses.find(p => p.value === product.os) == null) {
            this.oses.push(new FilterForm("os", product.os, false));
          }
        });
        
        this.total = data.length;
        this.products = this.all
          .sort(this.currentSort)
          .slice((this.page - 1) * this.perPage, this.page * this.perPage);
      });
  }

  checkAll(providerCheck: FilterForm) {
    if (providerCheck.checked) {
      this.filters.push(new Filter(providerCheck.type, 'eq', providerCheck.value));
    } else {
      this.filters = this.filters.filter(check => !((check.attribute == providerCheck.type) && (check.value == providerCheck.value)));
    }
    this.productService
      .getProducts(this.searchText, this.filters)
      .subscribe((data: Product[]) => {
        this.all = data;
        this.total = data.length;
        this.products = this.all
          .sort(this.currentSort)
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
      .getProducts(text, this.filters)
      .subscribe((data: Product[]) => {
        this.all = data;
        this.total = data.length;
        this.products = this.all
          .sort(this.currentSort)
          .slice((this.page - 1) * this.perPage, this.page * this.perPage)
      });
  }

  changeOrder(index: number) {
    this.headers.filter(header => header.name !== this.headers[index].name).forEach(header => header.order = 'none');

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
        this.currentSort = (a, b) => (a.name < b.name) ? 1 : -1;
      } else if (order === 'asc') {
        this.currentSort = (a, b) => (a.name > b.name) ? 1 : -1;
      } else {
        this.currentSort = this.defaultSort;
      }
    } else if (name === 'Price') {
      if (order === 'desc') {
        this.currentSort = (a, b) => (a.price < b.price) ? 1 : -1;
      } else if (order === 'asc') {
        this.currentSort = (a, b) => (a.price > b.price) ? 1 : -1;
      } else {
        this.currentSort = this.defaultSort;
      }
    } else if (name === 'Description') {
      if (order === 'desc') {
        this.currentSort = (a, b) => (a.description < b.description) ? 1 : -1;
      } else if (order === 'asc') {
        this.currentSort = (a, b) => (a.description > b.description) ? 1 : -1;
      } else {
        this.currentSort = this.defaultSort;
      }
    }
    this.all.sort(this.currentSort);
    this.products = this.all.slice((this.page - 1) * this.perPage, this.page * this.perPage)
  }
}
