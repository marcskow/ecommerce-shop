import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from 'src/app/product/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin.products.component.html',
  styleUrls: ['./admin.products.component.css']
})
export class AdminProductsComponent implements OnInit {

  all: Product[] = [];
  currentPage = 1;
  products: Product[] = [];
  total: Number = 0;

  show = true;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService
      .getProductsInit()
      .subscribe((data: Product[]) => {
        this.all = data;
        this.total = data.length;
        this.products = this.all.slice(0, 5);
        this.endOfData();
      });
  }

  showMore() {
    this.products = this.all.slice(0, 5 * this.currentPage);
    this.currentPage++;
    this.endOfData();
  }

  endOfData() {
    this.show = (this.total > this.currentPage * 5);
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(item => item !== product);
  }
}
