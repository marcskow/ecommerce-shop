import { Component, OnInit, Input } from '@angular/core';
import { BasketService } from '../../service/basket.service';
import { Product } from 'src/app/product/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin.product.component.html'
})
export class AdminProductComponent implements OnInit {

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
