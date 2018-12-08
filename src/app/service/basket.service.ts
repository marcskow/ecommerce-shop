import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';
import { BasketItem } from './basket.item.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket: Map<String, BasketItem> = new Map();

  constructor() { }

  addToBasket(product: Product) {
    if (this.basket.has(product.name)) {
      this.basket.set(product.name, new BasketItem(product.name, this.basket.get(product.name).amount + 1, product.price))
    } else {
      this.basket.set(product.name, new BasketItem(product.name, 1, product.price))
    }
  }

  removeFromBasket(product: Product) {
    if (this.basket.has(product.name)) {
      this.basket.get(product.name).amount--;
    }
  }

  getInBasketAmount(productName: string) {
    if (!this.basket.has(productName)) {
      return 0;
    }
    return this.basket.get(productName).amount;
  }

  getBasket() {
    var result: BasketItem[] = []
    this.basket.forEach((value, key, map) => result.push(value))    
    return result;
  }

  getBasketSize() {
    var itemsSum = 0;
    var priceSum = 0;
    this.basket.forEach((value, key, map) => {
      priceSum += (value.price * value.amount);
      itemsSum += value.amount;
    })
    return {itemsSum, priceSum}
  }
}
