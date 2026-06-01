const productos = [
    { nombre: 'Frozen', categoria: 'película' },
    { nombre: 'The DUFF', categoria: 'película' },
    { nombre: 'Black Swan - BTS', categoria: 'Canción' },
    { nombre: 'Jump - BTS', categoria: 'Canción' },
    { nombre: 'Minecraft', categoria: 'Juegos' },
    { nombre: 'Sacape Cube', categoria: 'Juegos' },
    { nombre: 'Panqueques', categoria: 'Comida' },
    { nombre: 'Pizza', categoria: 'Comida' },
];

const contenedor =
    document.getElementById("contenedorProductos");

function mostrarProductos(lista) {

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        contenedor.innerHTML += `
            <div class="caja">
                <h3>${producto.nombre}</h3>
                <p>${producto.categoria}</p>
            </div>
        `;
    });
}

mostrarProductos(productos);

document.getElementById("mostrarTodos")
.addEventListener("click", () => {
    mostrarProductos(productos);
});

document.getElementById("mostrarComida")
.addEventListener("click", () => {

    const pendientes = productos.filter(
        producto => producto.categoria === "Comida"
    );

    mostrarProductos(pendientes);
});