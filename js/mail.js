const carrito = [];

const productos = [
    {
        id: "articulo-1",
        titulo: "Carpa modelo Himalaya",
        precio: 550000,
        img: "./img/carpa1.webp",
    },
    {
        id: "articulo-2",
        titulo: "Carpa modelo Everest",
        precio: 650000,
        img: "./img/carpa2.webp",
    },
    {
        id: "articulo-3",
        titulo: "Carpa modelo Aconcagua",
        precio: 590000,
        img: "./img/carpa3.webp",
    },
    {
        id: "articulo-4",
        titulo: "Mochila 60 lts.",
        precio: 350000,
        img: "./img/mochila1.webp",
    },
    {
        id: "articulo-5",
        titulo: "Mochila 65 lts.",
        precio: 450000,
        img: "./img/mochila2.webp",
    },
    {
        id: "articulo-6",
        titulo: "Mochila 70 lts.",
        precio: 500000,
        img: "./img/mochila3.webp",
    }
];

const contenedorProductos = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");

productos.forEach((producto) => {

    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-img" src="${producto.img}" alt="imagen de producto">
        <h3>${producto.titulo}</h3>
        <p>$${producto.precio}</p>
    `;

    let button = document.createElement("button");
    button.classList.add("producto-btn");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () => {
        agregarAlCarrito(producto);
    })

    div.append(button);
    contenedorProductos.append(div);
});

const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoProductos.classList.add("d-none");
    } else {
        carritoVacio.classList.add("d-none");
        carritoProductos.classList.remove("d-none");

        carritoProductos.innerHTML = "";
        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <h3>${producto.titulo}</h3>
                <p>$${producto.precio}</p>
            `;

            let button = document.createElement("button");
            button.classList.add("carrito-producto-btn");
            button.innerText = "✖️";
            button.addEventListener("click", () => {
                borrarDelCarrito(producto);
            })

            div.append(button);
            carritoProductos.append(div);
        })
    }
    actualizarTotal();
}

function borrarDelCarrito(producto) {
    const indice = carrito.findIndex((item) => item.id === producto.id);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function actualizarTotal() {
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    carritoTotal.innerText = "$" + total;
}