export class Calculadora {
    valor1: number;
    valor2: number;
    constructor(valor1: number, valor2: number) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    somar() {
        return this.valor1 + this.valor2;
    }

    subtrair() {
        return this.valor1 - this.valor2;
    }

    multiplicar() {
        return this.valor1 * this.valor2;
    }

    dividir() {
        return this.valor1 / this.valor2;
    }

}