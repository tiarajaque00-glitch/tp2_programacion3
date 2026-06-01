const productos = [
<<<<<<< HEAD
    { nombre: 'Frozen', categoria: 'película' },
    { nombre: 'The DUFF', categoria: 'película' },
    { nombre: 'Black Swan - BTS', categoria: 'Canción' },
    { nombre: 'Jump - BTS', categoria: 'Canción' },
    { nombre: 'Minecraft', categoria: 'Juegos' },
    { nombre: 'Sacape Cube', categoria: 'Juegos' },
    { nombre: 'Panqueques', categoria: 'Comida' },
    { nombre: 'Pizza', categoria: 'Comida' },
=======
    { nombre: "Manzana", categoria: "fruta" },
    { nombre: "Banana", categoria: "fruta" },
    { nombre: "Pera", categoria: "fruta" },
    { nombre: "Pan", categoria: "panaderia" },
    { nombre: "Facturas", categoria: "panaderia" },
    { nombre: "Torta", categoria: "panaderia" }
>>>>>>> 71397358e322b9b7ac05b12fcc1062c2234ce870
];

const contenedor =
    document.getElementById("contenedorProductos");

<<<<<<< HEAD
function mostrarProductos(lista) {
=======
function mostrar(lista) {
>>>>>>> 71397358e322b9b7ac05b12fcc1062c2234ce870

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        contenedor.innerHTML += `
            <div class="caja">
<<<<<<< HEAD
                <h3>${producto.nombre}</h3>
                <p>${producto.categoria}</p>
=======
                ${producto.nombre}
>>>>>>> 71397358e322b9b7ac05b12fcc1062c2234ce870
            </div>
        `;
    });
}

<<<<<<< HEAD
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
=======
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
>>>>>>> 71397358e322b9b7ac05b12fcc1062c2234ce870
});