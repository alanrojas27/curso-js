//este algoritmo calcularia el sueldo de cada mes, suponiendo que aumente 1.5
let sueldoNeto = parseInt(prompt("Ingrese su sueldo"))

for(let i = 1; i <= 12; i++) {
    resultado = sueldoNeto
    sueldoNeto = sueldoNeto * 1.5
    console.log("Su sueldo va a ser de $" + resultado)
}

let numero = parseInt(prompt("Ingrese un numero entre 1 y 5"))
while (numero >= 1 && numero <= 5){
    
    console.log("Su numero es " + numero)
    
    numero = parseInt(prompt("agrega otro numero que no sea del 1 al 5 para salir"))
}


