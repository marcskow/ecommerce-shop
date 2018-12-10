import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:5555';

  constructor(private http: HttpClient) { }

  getProducts(term: string) {
    if (term == '') {
      return this.http.get(`${this.uri}/products`);
    } else {
      let params = new HttpParams().set('term', term);
      return this.http.get(`${this.uri}/products`, { params: params });
    }
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
