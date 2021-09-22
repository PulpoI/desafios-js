//Constructor de productos
class Producto {
    constructor(id, nombre, precio, tipo){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
    }
}

//Array de productos
const productos = [];

//Productos creados
const p1 = new Producto(1, "Mini Cake rosa", 1200, "Torta")
const p2 = new Producto(2, "Mini Cake con Macarons", 1400, "Torta")
const p3 = new Producto(3, "Mini Cake gold", 1400, "Torta")
const p4 = new Producto(4, "Oreos bañadas", 800, "Box")
const p5 = new Producto(5, "Tarta de banana", 1200, "Tarta")
const p6 = new Producto(6, "Budín Hamburgués", 1400, "Torta")

//Productos pusheados al array
productos.push(p1,p2,p3,p4,p5,p6)

const productosId = document.getElementById("producto");

for (const producto of productos){
    const contenedor = document.createElement("div");
    contenedor.className = "card";
    contenedor.innerHTML = `
                            <img src="img/${producto.id}.jpg" class="card-img" alt="${producto.nombre}"> 
                            <div class="card-body">
                                <h4 class="card-title">${producto.nombre}</h4>
                                <p class="card-text">Categoria: ${producto.tipo}</p>
                                <p class="card-price"> $${producto.precio}</p>
                                <button class="btn-comprar">Comprar</button>
                            </div>
    `
    productosId.append(contenedor)
}

const footerId = document.getElementById("footer");

const contenedor = document.createElement("div");
contenedor.className = "footer-body";
contenedor.innerHTML = `
                        <h3>Doña Marta</h3>
                        <h4>Pastelería artesanal y personalizada</h4>     
                        <p>Contactanos</p>
`
footerId.append(contenedor)