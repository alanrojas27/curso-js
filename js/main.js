debugger
const cme = new Convertir(valores)

const listMonedas = ()=> {
    let optionM
    for (tipoMoneda of valores) {
        optionM += `<option value="${tipoMoneda.precio}">${tipoMoneda.moneda}</option>`
    }
    return optionM
}


listMonedas()

const cargaMonedaExtranjera = ()=> {

}


const calcularValor = (valMoneda, pesoArgentino) => {
    let impuesto = impuestoPais / 100 * pesoArgentino
    let valorEnPesos = impuesto + pesoArgentino
    let resultado = valMoneda * valorEnPesos
    return parseFloat(resultado)
}



const convertir = ()=> {
    debugger
    v = parseFloat(selector.value)
    p = parseFloat(pesos.value)
    valorConver = cme.calcularConversion(p, v)
    resultado.innerText = `$ ${valorConver}`
}

convertir()




//selector
// const cargaMoneda = ()=> {
//     let optionM
//         for(val of valores) {

//         }
// }