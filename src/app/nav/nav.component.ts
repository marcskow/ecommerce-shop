import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  basketItems = 0;
  basketSum = 0;

  constructor(
    private userService: UserService,
    private basketService: BasketService
  ) { }

  ngOnInit() {
    this.basketItems = this.basketService.getBasketSize().itemsSum;
    this.basketSum = this.basketService.getBasketSize().priceSum;
  }

  isAdmin() {
    return this.userService.getCurrentUser().role === "admin";
  }
}
