import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:5555';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.uri}/products`);
  }

  getProductById(id: string) {
    return this.http.get(`${this.uri}/products/${id}`);
  }

  addProduct(product: Product) {
    return this.http.post(`${this.uri}/products`, product);
  }

  updateProduct(id: string, product: Product) {
    return this.http.post(`${this.uri}/products/${id}`, product);
  }

  removeProduct(id: string) {
    return this.http.get(`${this.uri}/products/delete/${id}`);
  }
}
