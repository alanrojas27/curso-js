class Convertir {
    constructor(dolar) {
        this.dolar = dolar
    }

    calcularValorDolar() {
        let impuesto = impuestoPais / 100 * pesoArgentino
        let valorEnPesos = impuesto + pesoArgentino
        let resultado = dolar * valorEnPesos
        return parseFloat(resultado)
    }
}