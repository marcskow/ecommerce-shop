import { Injectable } from '@angular/core';
import { ProductsRepository } from './product.repository';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsReposistory = new ProductsRepository

  constructor() { }

  getProducts(page: number, size: number) {
    var total = this.productsReposistory.products.length
    var payload = this.productsReposistory.products.slice(page * size, page * size + size)
    return { payload, total }
  }

  addProduct(product: Product) {
    this.productsReposistory.addProduct(product)
  }

  removeProduct(name: string) {
    this.productsReposistory.removeProduct(name)
  }
}
