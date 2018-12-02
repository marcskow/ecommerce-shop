import { Injectable } from '@angular/core';
import { ProductsRepository } from './product.repository';
import { Product } from '../product/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Observable<Product[]>

  constructor(private productsRepository: ProductsRepository) { }

  getProducts(page: number, size: number) {
    this.products = this.productsRepository.getProducts();

    var total = this.productsRepository.products.length
    var payload = this.productsRepository.products.slice(page * size, page * size + size)
    this.productsRepository.getProducts()
    return { payload, total }
  }

  addProduct(product: Product) {
    this.productsRepository.addProduct(product)
  }

  removeProduct(name: string) {
    this.productsRepository.removeProduct(name)
  }
}
