//Stock disponible en el codigo
const tienda = [{nombre: "Remera negra", precio: 1190, id: 1, stock: 20},
                {nombre: "Remera blanca", precio: 1190, id: 2, stock: 12},
                {nombre: "Buzo negro", precio: 2700, id: 3, stock: 18},
                {nombre: "Buzo blanco", precio: 2700, id: 4, stock: 10},
                {nombre: "Gorro gris",precio: 800, id: 5, stock: 30}];

class Producto {
    constructor (producto, cantidad){
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.id = producto.id;
        this.cantidad = cantidad;
        this.subtotal = producto.precio * cantidad;
    }
}

let productoElegido;
let cantidadElegida;
let productoSeleccionado;
let elegirNuevoProducto;
const carrito = [];

iniciarCompra()
while(elegirNuevoProducto == "SI") {
    iniciarCompra()
}

verCarrito()

function iniciarCompra() {
    elegirProducto()
    const stockProducto = verDisponibilidadProducto(productoElegido, cantidadElegida)
    if(stockProducto) {

        let agregar = prompt("¿Desea agregar el producto al carrito? SI / NO")
        if (agregar == "SI") {
            let producto = new Producto (productoElegido, cantidadElegida)

            agregarProducto(producto)
            elegirNuevoProducto = prompt("¿Quiere seleccionar otro producto? SI / NO")
        }
    }
}



function elegirProducto() {
    productoElegido = prompt("Que producto deseas comprar?  \n Remera negra  \n Remera blanca  \n Buzo negra  \n Buzo blanco")
    cantidadElegida = prompt("Que cantidad desea comprar?")
}


function verificarStock(stockProducto, cantidad){
    if (stockProducto >= cantidad){
        return true
    } else {
        return false
    }
}


function verDisponibilidadProducto (nombreProducto, cantidad) {
    productoSeleccionado = tienda.find((producto) => producto.nombre == nombreProducto)

    if(!productoSeleccionado){
        alert("El producto no existe")
    }else{
        let verificado = verificarStock(productoSeleccionado.stock, cantidad)
        if(verificado) {
            return true
        }else{
            alert("El producto " + nombreProducto + " no cuenta con disponibilidad")
            elegirNuevoProducto = prompt("Quiere seleccionar otro producto? SI / NO")
        }
    }
}


function agregarProducto(itemAagregar) {
    carrito.push(itemAagregar);
}


function verCarrito() {
    for (let i = 0 ; i < carrito.length; i++){
        console.log("Producto: " + carrito[i].nombre + ". Cantidad: " + carrito[i].cantidad)
   
    }
    let totalCarrito = carrito.reduce((currentTotal, producto) => {
        return producto.subtotal + currentTotal;
      }, 0);

      console.log("El total de compra es: " + totalCarrito)

        

}
