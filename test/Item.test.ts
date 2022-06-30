import Item from "../src/Item";
import Product from "../src/Product";

let product: Product;

beforeEach(function () {
	this.product = new Product(10, "Product A");
});

test("Should return Item price for 1 Products", function (){
    const item = new Item(this.product, 1);
    const price = item.calculatePrice();
    expect(price).toBe(10);
});

test("Should return Item price for 2 Products", function (){
    const item = new Item(this.product, 2);
    const price = item.calculatePrice();
    expect(price).toBe(20);
});
