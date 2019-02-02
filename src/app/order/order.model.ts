import {BasketItem} from '../service/basket.item.model';
import {UUID} from 'angular2-uuid';

export class Order {

  public id: string;
  public products: BasketItem[];
  public address: string;
  public totalPrice: number;
  public name: string;
  public shippingType: string;
  public shippingPrice: number;
  public realized: string;
  public message: string;

  constructor(
    products: BasketItem[] = [],
    address: string = '',
    totalPrice: number = 0,
    name: string = '',
    shippingType: string = '',
    shippingPrice: number = 0,
    realized: string = 'ordered',
    message: string = '') {
    this.id = UUID.UUID();
    this.products = products;
    this.address = address;
    this.totalPrice = totalPrice;
    this.address = address;
    this.name = name;
    this.shippingPrice = shippingPrice;
    this.shippingType = shippingType;
    this.realized = realized;
    this.message = message;
  }
}

export class ShippingType {
  constructor(
    public name: string,
    public price: number
  ) {
  }
}
