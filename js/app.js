function nuevaConversion() {
    
    debugger

    dolar = parseFloat(prompt("Ingrese la cantidad de dolares que desea convertir "))
    const calculadorDolar = new Convertir(dolar)
    resul = calculadorDolar.calcularValorDolar()
    console.log (dolar + " dolares es igual a" + resul + " pesos argentinos")
}

