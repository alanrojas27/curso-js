debugger
const listMonedas = ()=> {
    let optionM
    for (tipoMoneda of valores) {
        optionM += `<option value="${tipoMoneda.precio}">${tipoMoneda.moneda}</option>`
    }
    return optionM
}


listMonedas()



const calcularValor = (valMoneda, pesoArgentino) => {
    let impuesto = impuestoPais / 100 * pesoArgentino
    let valorEnPesos = impuesto + pesoArgentino
    let resultado = valMoneda * valorEnPesos
    return parseFloat(resultado)
}



const convertir = ()=> {
    v = selector.value
    p = pesos.value
    valorConver = calcularValor(v, p)
    tipoMoneda.innerText = `$ ${valorConver}`
}

convertir()




//selector
// const cargaMoneda = ()=> {
//     let optionM
//         for(val of valores) {

//         }
// }