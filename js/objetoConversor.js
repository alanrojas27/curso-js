class Convertir {
    constructor(monedaExtranjera) {
        this.monedaExtranjera = monedaExtranjera
    }

    calcularValorDolar() {
        let impuesto = impuestoPais / 100 * pesoArgentino
        let valorEnPesos = impuesto + pesoArgentino
        let resultado = monedaExtranjera * valorEnPesos
        return parseFloat(resultado)
    }
}