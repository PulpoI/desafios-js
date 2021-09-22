//Constructor de nuevos productos para la tienda
class AgregarProductos {
    constructor(nombre, precio, stock, tipo, id){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.tipo = tipo;
        this.id = id;
    }
}
//Agregando un producto a la tienda
const p7 = new AgregarProductos("EJEMPLO", 2100, 2, "TORTA", 0007);

//Productos de la tienda
const tienda = [
    {nombre: "LEMON PIE", precio: 800, stock: 10, tipo: "TARTA", id: 0001},
    {nombre: "DESAYUNO", precio: 2500, stock: 5, tipo: "BOX", id: 0002},
    {nombre: "OREOS BAÑADAS", precio: 600, stock: 8, tipo: "BOX", id: 0003},
    {nombre: "MINI CAKE", precio: 1500, stock: 15, tipo: "TORTA", id: 0004},
    {nombre: "TARTA DE BANANA", precio: 900, stock: 5, tipo: "TARTA", id: 0005},
    {nombre: "OSITO PIÑATA", precio: 1200, stock: 3, tipo: "BOX", id: 0006},
]

//Pusheando nuevos productos al array
tienda.push(p7);

//Variables fundamentales
let elegirProducto;
let elegirCantidad;
let productoElegido;
let nuevoProducto;

const carrito = [];

//Constructor de productos para agregar al carrito
class Productos {
    constructor(producto, cantidad){
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.stock = producto.stock;
        this.tipo = producto.tipo;
        this.id = producto.id;
        this.cantidad = cantidad;
        this.subtotal = producto.precio * cantidad;
    }
}

//-------FUNCIONES------ 

//Funciones llamadas
comprar();

while (nuevoProducto.toUpperCase() == "SI") {
    comprar()
}

verCarrito();

//Funcion principal para llevar a cabo la compra
function comprar() {    
    seleccionarProducto()
    const stockProducto = disponibilidadProducto (elegirProducto, elegirCantidad);
    if(stockProducto) {
        let agregar = prompt("Desea agregar el producto al carrito? SI / NO");
        if (agregar.toUpperCase() == "SI"){
            let producto = new Productos(productoElegido, elegirCantidad);

            agregarProducto(producto);
            nuevoProducto =  prompt("Desea seleccionar otro producto? SI / NO");
        }else{
            nuevoProducto = prompt("Desea seleccionar otro producto? SI / NO");
        }
    }
}

//Funcion para elegir producto y cantidad
function seleccionarProducto() {
    elegirProducto = prompt("Que producto desea comprar? \n LEMON PIE, DESAYUNO, OREOS BAÑADAS, MINI CAKE, TARTA DE BANANA, OSITO PIÑATA");
    elegirCantidad = parseInt(prompt("Indique la cantidad"));
}

//Funcion para chequear disponibilidad de stock
function disponibilidadProducto(producto, cantidad) {
    productoElegido = tienda.find((p) => p.nombre == producto.toUpperCase());
    if(!productoElegido){
        alert("El producto ingresado es incorrecto o no existe")
        seleccionarProducto();
    }else{
        let verificado = verificarStock(productoElegido.stock, cantidad);
        if(verificado){
            return true;
        }else{
            alert(producto + " no cuenta con suficiente stock");
            nuevoProducto = prompt("Quiere seleccionar otro? SI / NO");
        }
    }
}

//Funcion verificar stock
function verificarStock(stockProducto, cantidad) {
    if (stockProducto >= cantidad){
        return true;
    }else{
        return false;
    }
}


//Funcion para agregar otro producto
function agregarProducto(agregar) {
    carrito.push(agregar);
}


//Funcion para ver el carrito y el total a pagar 
function verCarrito() {
    for (let i = 0 ; i < carrito.length; i++){
        console.log("Producto: " + carrito[i].nombre + ". Cantidad: " + carrito[i].cantidad);
    }
    let totalCarrito = carrito.reduce((currentTotal, producto) => {
        return producto.subtotal + currentTotal;
      }, 0);

      alert("El total de compra es: $" + totalCarrito);
}
