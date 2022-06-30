import Customer from "../src/Customer";

test("Should NOT create Customer if CPF is invalid", function (){
    const cpf = "123.456.789-10";
    expect(() => new Customer(cpf)).toThrow(new Error("Invalid CPF number."));
});

test("Should create Customer if CPF is invalid", function (){
    const cpf = "728.078.930-74";
    const customer = new Customer(cpf);
    expect(customer).toBeInstanceOf(Customer);
});