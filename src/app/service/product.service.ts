import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Filter } from '../products/filter.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:5555';

  constructor(private http: HttpClient) { }

  getProductsInit() {
    return this.getProducts('', [])
  }

  getProducts(term: string, filters: Filter[]) {
    if (term == '' && filters.length == 0) {
      return this.http.get(`${this.uri}/products`);
    } else if (term == '') {
      let params = new HttpParams().set('filters', JSON.stringify(filters));
      return this.http.get(`${this.uri}/products`, { params: params });
    } else {
      let params = new HttpParams().set('term', term);
      params.set('filters', JSON.stringify(filters));
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
