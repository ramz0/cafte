const span = document.getElementById("total");
let total = 0;

function sumar(precio) {
    total += precio;

    return total;
}

function resetear() {
    return total = 0;
}

function actualizar(cantidad) {
    if (total != 0)
        span.innerHTML = "$" + total + " (+" + cantidad + ")";
    else
        span.innerHTML = "Vacío";
}
