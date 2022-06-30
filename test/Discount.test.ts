import Discount from "../src/Discount";

test("Should validate coupon", function (){
    const discount = new Discount();
    const percentage = discount.validateCoupon("ABC-123");
    expect(percentage).toBe(8);
});

test("Should apply discount ", function (){
    const discount = new Discount();
    const percentage = discount.validateCoupon("ABC-123");
    const finalPrice = discount.applyDiscount(percentage, 100);
    expect(finalPrice).toBe(92);
});