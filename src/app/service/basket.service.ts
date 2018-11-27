import { Injectable } from '@angular/core';
import { BasketItem } from './product.model';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket: BasketItem[] = [];

  constructor() { }

  addToBasket(product: Product) {
    
  }
}
