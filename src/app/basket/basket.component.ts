import { Component, OnInit } from '@angular/core';
import { BasketService } from '../service/basket.service';
import { BasketItem } from '../service/basket.item.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: BasketItem[] = []

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basket = this.basketService.getBasket();
  }
}
