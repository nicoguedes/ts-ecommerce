import CpfValidator from "../src/CpfValidator";

let cpfValidator : CpfValidator;

beforeEach(function (){
	this.cpfValidator = new CpfValidator();
});

test("Should validate a valid CPF number", function () {
	const input = "728.078.930-74";
    const valid = this.cpfValidator.validate(input);
	expect(valid).toBe(true);
});

test("Should validate a valid and formatted CPF number", function () {
	const input = "72807893074";
    const valid = this.cpfValidator.validate(input);
	expect(valid).toBe(true);
});

test("Should validate an invalid and formatted CPF number", function () {
	const input = "123.456.789-92";
    const valid = this.cpfValidator.validate(input);
	expect(valid).toBe(false);
});

test("Should validate an invalid CPF number", function () {
	const input = "12345678992";
    const valid = this.cpfValidator.validate(input);
	expect(valid).toBe(false);
});

test("Should validate an incomplete CPF number", function () {
	const input = "12342";
    const valid = this.cpfValidator.validate(input);
	expect(valid).toBe(false);
});

test("Should validate a too large CPF number", function () {
	const input = "123123123123123123123";
    const valid = this.cpfValidator.validate(input);
	expect(valid).toBe(false);
});

test("Should validate a null CPF number", function () {
	const input = null;
    const valid = this.cpfValidator.validate(input);
	expect(valid).toBe(false);
});

test("Should validate an undefined CPF number", function () {
	const input = undefined;
    const valid = this.cpfValidator.validate(input);
	expect(valid).toBe(false);
});

test("Should validate a CPF that isn't a number", function () {
	const input = "abcafsdfasasfsadfsa";
    const valid = this.cpfValidator.validate(input);
	expect(valid).toBe(false);
});