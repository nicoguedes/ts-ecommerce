import Item from "./Item";
import Product from "./Product";
import Discount from "./Discount";
import Customer from "./Customer";

export default class Order {
    items: Item[] = [];
    customer: Customer;
    discount: number;

    private _discountHandler : Discount;

    constructor(customer : Customer) {
        this.customer = customer;
        this._discountHandler = new Discount();
    }

    addItem(product: Product, amount: number) {
        this.items.push(new Item(product, amount));
    }

    private sumItemsPrice() {
        if (!this.items || this.items.length === 0)
            return 0;
        return this.items.map(i => i.calculatePrice()).reduce((a, b) => a + b);
    }

    calculatePrice(discountCode: String = null) {
        const discountPercentage = this._discountHandler.validateCoupon(discountCode);
        const totalItemsPrice = this.sumItemsPrice();
        return this._discountHandler.applyDiscount(discountPercentage, totalItemsPrice);
    }
}