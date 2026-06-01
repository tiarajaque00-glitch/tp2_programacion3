const productos = [
    { nombre: "Manzana", categoria: "fruta" },
    { nombre: "Banana", categoria: "fruta" },
    { nombre: "Pera", categoria: "fruta" },
    { nombre: "Pan", categoria: "panaderia" },
    { nombre: "Facturas", categoria: "panaderia" },
    { nombre: "Torta", categoria: "panaderia" }
];

const contenedor =
    document.getElementById("contenedorProductos");

function mostrar(lista) {

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        contenedor.innerHTML += `
            <div class="caja">
                ${producto.nombre}
            </div>
        `;
    });
}

mostrar(productos);

document
.getElementById("mostrarTodos")
.addEventListener("click", () => {
    mostrar(productos);
});

document
.getElementById("mostrarFrutas")
.addEventListener("click", () => {

    const frutas = productos.filter(
        producto => producto.categoria === "fruta"
    );

    mostrar(frutas);
});