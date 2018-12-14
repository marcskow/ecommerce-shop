import {BasketItem} from '../service/basket.item.model';

export class Order {
  constructor(
    public id: string,
    public products: BasketItem[],
    public address: string,
    public totalPrice: number,
    public name: string,
    public shippingType: string,
    public shippingPrice: number,
    public realized: boolean,
    public message: string) {}
}

export class ShippingType {
  constructor(
    public name: string,
    public price: number
  ) {}
}
