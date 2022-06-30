import Product from "./Product";

export default class Item {
    product: Product;
    amount: number;

    constructor(product: Product, amount: number) {
        this.product = product;
        this.amount = amount;
    }

    calculatePrice() {
        return this.product.price * this.amount;
    }
}