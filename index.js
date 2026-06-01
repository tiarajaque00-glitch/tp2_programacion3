const meriendas = [
    "Tostadas con Café",
    "Mate con Facturas",
    "Frutas, cereales y Yogur",
    "Galletas con Leche chocolatada",
    "Licuado con tostados",
    "Te con budines",
    "Mate con tortafritas",
];

const lista = document.getElementById("listaMeriendas");

meriendas.forEach(merienda => {
    lista.innerHTML += `
        <div class="caja">
            <h3>${merienda}</h3>
        </div>
    `;
});

const boton = document.getElementById("btnCantidad");

boton.addEventListener("click", function () {
    document.getElementById("resultado").textContent =
        `Hay ${meriendas.length} meriendas disponibles.`;
});