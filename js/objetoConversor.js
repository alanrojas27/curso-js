class Convertir {
    constructor(val) {
        this.val = val
    }
    
    calcularConversion(cantMon, tipoMon) {
        const conversion = parseInt(tipoMon) * parseInt(cantMon)
        const valorFinal = conversion * 0.30 
        return valorFinal.toFixed(2)
    }

}


    // calcularValor(valMoneda) {
    //     let impuesto = impuestoPais / 100 * pesoArgentino
    //     let valorEnPesos = impuesto + pesoArgentino
    //     let resultado = valMoneda * valorEnPesos
    //     return parseFloat(resultado)

