function agregarMoneda() {
    nuevaMoneda = prompt("Ingrese el nombre de la moneda")
    valores.push(nuevaMoneda.toUpperCase())
    console.table(valores)
}

function eliminarMoneda() {
    debugger
    nombreDeElemento = prompt("Ingrese la moneda que desea eliminar")
    nombreDeElemento = nombreDeElemento.toUpperCase()
    numeroDeElemento = valores.indexOf(nombreDeElemento)
    if (numeroDeElemento >= 0) {
    valores.splice(numeroDeElemento, 1)
    console.log("Se elimino " + nombreDeElemento)
    console.table(valores)
    }else{
        console.warn("No se encontro la moneda")
    }
}


