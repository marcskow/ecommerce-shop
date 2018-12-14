import { Component, OnInit } from '@angular/core';
import {OrderService} from '../service/order.service';
import {Order} from '../order/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  realized = false;
  orders: Order[];
  selectedOrder: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders(this.realized)
      .subscribe((response: Order[]) => {
        this.orders = response;
      });
  }

  realize(i) {
    this.orderService.markOrderAsRealized(this.orders[i].id);
  }

  details(i) {
    this.selectedOrder = this.orders[i];
  }
}
