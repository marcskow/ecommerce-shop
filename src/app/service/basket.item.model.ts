export class BasketItem {
    name: string;
    amount: number;
    price: number;
    constructor(name: string, amount: number, price: number) {
        this.name = name;
        this.amount = amount;
        this.price = price;
    }
}