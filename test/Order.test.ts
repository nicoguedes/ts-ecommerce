import Order from "../src/Order";
import Product from "../src/Product";

let productA: Product;
let productB: Product;

beforeEach(function (){
    this.productA = new Product(10, "Product A");
    this.productB = new Product(25, "Product B");
});

test("Should calculate order price", function (){
    const order = new Order();
    order.addItem(this.productA, 1);
    order.addItem(this.productB, 2);

    const finalPrice = order.calculatePrice();
    expect(finalPrice).toBe(60);
});

test("Should calculate order price with discount", function (){
    const order = new Order();
    order.addItem(this.productA, 1);
    order.addItem(this.productB, 2);

    const finalPrice = order.calculatePrice("ABC-123");
    expect(finalPrice).toBe(55.2);
});

test("Should calculate order price with no items", function (){
    const order = new Order();

    const finalPrice = order.calculatePrice();
    expect(finalPrice).toBe(0);
});