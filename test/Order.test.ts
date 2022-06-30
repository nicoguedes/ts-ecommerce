import Customer from "../src/Customer";
import Order from "../src/Order";
import Product from "../src/Product";

let productA: Product;
let productB: Product;
let order: Order;

beforeEach(function (){
    this.productA = new Product(10, "Product A");
    this.productB = new Product(25, "Product B");
    this.order = new Order(new Customer("728.078.930-74"));
});

test("Should calculate order price", function (){
    this.order.addItem(this.productA, 1);
    this.order.addItem(this.productB, 2);

    const finalPrice = this.order.calculatePrice();
    expect(finalPrice).toBe(60);
});

test("Should calculate order price with discount", function (){
    this.order.addItem(this.productA, 1);
    this.order.addItem(this.productB, 2);

    const finalPrice = this.order.calculatePrice("ABC-123");
    expect(finalPrice).toBe(55.2);
});

test("Should calculate order price with no items", function (){
    const finalPrice = this.order.calculatePrice();
    expect(finalPrice).toBe(0);
});