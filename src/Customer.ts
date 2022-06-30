import CpfValidator from "./CpfValidator";

export default class Customer{
    cpf: String;

    

    constructor(cpf: String) {
        if (!new CpfValidator().validate(cpf))
            throw new Error("Invalid CPF number.");

        this.cpf = cpf;
    }
}