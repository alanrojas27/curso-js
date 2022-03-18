const listMonedas = ()=> {
    for (tipoMoneda of valores) {
        let itemList = "<option>" + tipoMoneda + "</option>";
            selector.innerHTML += itemList
    }
}


listMonedas()

