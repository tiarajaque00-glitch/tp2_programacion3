const meriendas = [
    "Tostadas con Café",
    "Mate con Facturas",
    "Frutas, cereales y Yogur",
    "Galletas con Leche chocolatada",
    "Licuado con tostados",
    "Te con budines",
    "Mate con tortafritas",
];

const contenedor = document.getElementById("listaMeriendas");

meriendas.forEach(merienda => {
    contenedor.innerHTML += `
        <div class="caja">
            ${merienda}
        </div>
    `;
});

const boton = document.getElementById("btnCantidad");

boton.addEventListener("click", () => {
    document.getElementById("resultado").textContent =
        `Hay ${meriendas.length} meriendas disponibles`;
});