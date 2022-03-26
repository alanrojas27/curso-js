const guardoDatos = () =>{
    localStorage.setItem("moneda", selector.value)
    localStorage.setItem("cantidad", pesos.value)
    localStorage.setItem("resultado", resultado.value)
}

const ultimaConversion = ()=>{
    selector.value = localStorage.getItem("moneda")
    pesos.value = localStorage.getItem("cantidad")
    resultado.value = localStorage.getItem("resultado")
}
