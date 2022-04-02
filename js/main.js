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





const calcularValor = (valMoneda, pesoArgentino) => {
    let impuesto = impuestoPais / 100 * pesoArgentino
    let valorEnPesos = impuesto + pesoArgentino
    let resultado = valMoneda * valorEnPesos
    return parseFloat(resultado)
    }



    const faltaDatos = ()=> {
        return pesos.value == ""
    }

const convertir = ()=> {
    // if (faltaDatos()){
    //     alert("Faltan datos para la conversion")
    //     return
    // }else{
    // v = parseFloat(selector.value)
    // p = parseFloat(pesos.value)
    // valorConver = cme.calcularConversion(p, v)
    // resultado.innerText = `$ ${valorConver}`
    // mensajeToast()
    // }

    faltaDatos() ? alert("Faltan datos para la conversion") :   v = parseFloat(selector.value)
                                                                p = parseFloat(pesos.value)
                                                                valorConver = cme.calcularConversion(p, v)
                                                                resultado.innerText = `$ ${valorConver}`
                                                                mensajeToast()
}

