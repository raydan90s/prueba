const productos = [
    { id: 1, titulo: "Pulsera Básica", descripcion: "Ideal para vestimentas sencillas", precio: 1, imagen: "images/1.png" },
    { id: 2, titulo: "Pulsera de bebé", descripcion: "Ideal para los recién nacidos", precio: 1.5, imagen: "images/2.png" },
    { id: 3, titulo: "Pulsera personalizada", descripcion: "Con cualquier inicial", precio: 2, imagen: "images/3.png" },
    { id: 4, titulo: "Pulsera roja gruesa", descripcion: "Con materiales resistentes", precio: 1.5, imagen: "images/4.png" },
];

//VARIABLE PARA CARGAR IMAGENES EN EL MAIN
const container = document.getElementById("product-container");
productos.forEach(producto => {
    const productHTML = `
        <div class="product">
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <div class="product-txt">
                <h3>${producto.titulo}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio"> $${producto.precio}</p>
                <a href="#" class="agregar-carrito btn-2" data-id="${producto.id}">Agregar al carrito</a>
            </div>
        </div>
    `;
    container.innerHTML += productHTML; // Inserta el producto en el contenedor
});

//VARIABLE PARA EL CARRITO 
const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");


//FUNCIONES PARA EL CARRITO 
cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src = "${elemento.imagen}" width= 100 />
        </td>

        <td>
            ${elemento.titulo}
        </td>

        <td>
            ${elemento.precio}
        </td>

        <td>
            <a href = "#" class = "borrar" data-id= "${elemento.id}" >X </a>
        </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}


function vaciarCarrito() {
    const tbody = document.querySelector("#lista-carrito tbody");  // Obtener tbody de la tabla
    while (tbody.rows.length > 0) {  // Recorre las filas dentro del tbody
        tbody.deleteRow(0);  // Elimina la primera fila del tbody
    }
    return false;
}
