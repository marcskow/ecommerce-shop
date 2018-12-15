import {Component, OnInit} from '@angular/core';
import {BasketService} from '../service/basket.service';
import {BasketItem} from '../service/basket.item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: BasketItem[] = [];
  totalItems: number;
  totalPrice: number;

  constructor(private basketService: BasketService,
              private router: Router) {
  }

  ngOnInit() {
    this.basket = this.basketService.getBasket();
    const basketSize = this.basketService.getBasketSize();
    this.totalPrice = basketSize.priceSum;
    this.totalItems = basketSize.itemsSum;
  }

  order() {
    this.router.navigate(['/order'])
  }
}
