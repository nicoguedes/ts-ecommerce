
export default class Discount{
    DEFAULT_DISCOUNT : number = 8;

    validateCoupon(code: String) {
        return code ? this.DEFAULT_DISCOUNT : 0;
    }

    applyDiscount(percentage: number, totalPrice: number) {
        if (!percentage)
            return totalPrice;

        return totalPrice - (percentage / 100 * totalPrice);
    }
}