import { Injectable } from '@angular/core';
import { Order } from '../order/order.model';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  uri = 'http://localhost:5555';

  constructor(private http: HttpClient) { }

  getOrders(realized: string) {
      const params = new HttpParams().set('realized', realized);
      return this.http.get(`${this.uri}/orders`, { params: params });
  }

  addOrder(order: Order) {
    return this.http.post(`${this.uri}/orders`, order);
  }

  changeOrderRealizationState(id: string, state: string) {
    return this.http.post(`${this.uri}/orders/realized/change`, { id: id, realized: state });
  }

  deleteOrder(id: string) {
    return this.http.get(`${this.uri}/orders/delete/${id}`);
  }
}
