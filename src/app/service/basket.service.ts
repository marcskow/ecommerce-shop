import { Injectable } from '@angular/core';
import { BasketItem } from './product.model';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket: Map<String, BasketItem> = new Map();

  constructor() { }

  addToBasket(product: Product) {
    if (this.basket.has(product.name)) {
      this.basket[product.name].amount++;
    } else {
      this.basket[product.name] = new BasketItem(product.name, 1, product.price)
    }
  }

  removeFromBasket(product: Product) {
    if (this.basket.has(product.name)) {
      this.basket[product.name].amount--;
    }
  }

  getInBasketAmount(productName: string) {
    if (!this.basket.has(productName)) {
      return 0;
    }
    return this.basket[productName].amount
  }
}