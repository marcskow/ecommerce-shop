import { Component, OnInit } from '@angular/core';
import {OrderService} from '../service/order.service';
import {Order} from '../order/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  realized = 'ordered';
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
    this.orderService.changeOrderRealizationState(this.orders[i].id, 'realized')
      .subscribe((id: string) => {
        this.orders = this.orders.filter(obj => obj.id !== this.orders[i].id);
      }, (error: any) => {
        console.log(error);
      });
  }

  archive(i) {
    this.orderService.changeOrderRealizationState(this.orders[i].id, 'archived')
      .subscribe((id: string) => {
        this.orders = this.orders.filter(obj => obj.id !== this.orders[i].id);
      }, (error: any) => {
        console.log(error);
      });
  }

  removeOrder(i) {
    this.orderService.deleteOrder(this.orders[i].id)
      .subscribe((id: string) => {
        this.orders = this.orders.filter(obj => obj.id !== this.orders[i].id);
      }, (error: any) => {
        console.log(error);
      });
  }

  details(i) {
    this.selectedOrder = this.orders[i];
  }

  changeData(realized) {
    this.realized = realized;
    this.orderService.getOrders(this.realized)
      .subscribe((response: Order[]) => {
        this.orders = response;
      });
  }
}
