function nuevaConversion() {
    
    debugger

    monedaExtranjera = parseFloat(prompt("Ingrese la cantidad de dolares que desea convertir "))
    const calculadorMonedaExtranjera = new Convertir(monedaExtranjera)
    resul = calculadorMonedaExtranjera.calcularValorDolar()
    console.log (monedaExtranjera + " es igual a" + resul + " pesos argentinos")
}


