import {Component, OnInit} from '@angular/core';
import {Order, ShippingType} from './order.model';
import {OrderService} from '../service/order.service';
import {BasketService} from '../service/basket.service';
import {BasketItem} from '../service/basket.item.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  shippingTypes: ShippingType[] = [
    new ShippingType('InPost', 12),
    new ShippingType('DHL', 24),
    new ShippingType('Pocztex24', 15)];
  order: Order;
  selectedShippingType = new ShippingType('Shipping Type', 0);
  basket: BasketItem[] = [];
  totalItems: number;
  totalPrice: number;

  sortOrders: string[] = ["Year", "Title", "Author"];
  selectedSortOrder: string = "Sort by...";

  ChangeSortOrder(newSortOrder: string) {
    this.selectedSortOrder = newSortOrder;
  }

  constructor(private basketService: BasketService, private orderService: OrderService) {
  }

  ngOnInit() {
    const basketSize = this.basketService.getBasketSize();
    this.totalPrice = basketSize.priceSum;
    this.totalItems = basketSize.itemsSum;
    this.order.products = this.basketService.getBasket();
  }

  changeShippingType(shippingType: ShippingType) {
    this.selectedShippingType = shippingType;
    this.order.shippingPrice = shippingType.price;
    this.order.shippingType = shippingType.name;
  }

  onSubmit() {
    this.order.totalPrice = this.totalPrice + this.selectedShippingType.price;
    this.order.shippingType = this.selectedShippingType.name;
    this.order.shippingPrice = this.selectedShippingType.price;
    this.order.realized = false;
    this.orderService.addOrder(this.order);
  }
}
