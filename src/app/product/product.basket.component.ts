import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.model';
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-product-basket',
  templateUrl: './product.basket.component.html'
})
export class ProductBasketComponent implements OnInit {

  @Input() product : Product;
  inBasket : number = 0;

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.inBasket = this.basketService.getInBasketAmount(this.product.name);
  }

  increaseOrder() {
    this.inBasket++;
    this.basketService.addToBasket(this.product);
  }

  descreaseOrder() {
    if (this.inBasket != 0) {
      this.inBasket--;
      this.basketService.removeFromBasket(this.product);
    }
  }

}
