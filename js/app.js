btnConvertir.addEventListener("click", convertir)
btnUltimaConversion.addEventListener("click", ultimaConversion)
selector.innerHTML = listMonedas()
btnGuardarUltimaConversion.addEventListener("click", guardoDatos)

function mensajeToast() {
    Toastify({
        text: "Convertido con exito",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){}
      }).showToast();
}