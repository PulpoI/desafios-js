//Stock disponible en el codigo
const tuco = [{prenda: "Remera", talle: "L", color: "Negro", precio: 1190, cantidad: 20},
                {prenda: "Remera", talle: "XL", color: "Blanco", precio: 1190, cantidad: 12},
                {prenda: "Buzo", talle: "S", color: "Negro", precio: 2700, cantidad: 18},
                {prenda: "Buzo", talle: "L", color: "Blanco", precio: 2700, cantidad: 10},
                {prenda: "Gorro", talle: "Unico", color: "Gris", precio: 800, cantidad: 30}];

//Constructor de productos para agregar al sitio
class Producto {
    constructor (prenda, talle, color, precio, stock) {
        this.prenda = prenda;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
}

//Agregar stock por codigo
const remera = new Producto("Remera","S","Blanco", 1390, 6)
tuco.push(remera)

// Agregar stock por prompt
do {
    var agregar = prompt("Usted es el dueño del negocio. \n Ingrese el nombre de la prenda, escriba FIN para terminar");
    if(agregar === "fin" || agregar === "FIN" || agregar === "Fin"){
            break;
    }else{
        nombreProducto = agregar;
        let talleProducto = prompt("Ingrese el talle del producto");
        let colorProducto = prompt("Ingrese el color del producto");
        let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
        let cantidadProducto = parseFloat(prompt("Ingrese la cantidad"))
        tuco.push(new Producto(nombreProducto, talleProducto, colorProducto, precioProducto, cantidadProducto))
    }
}
while (agregar != "fin" || agregar != "FIN" || agregar != "Fin")

console.log(tuco)



//AHORA COMPRAMOS

//Seleccionar PRENDA
let elegirPrenda = parseInt(prompt("Usted es el comprador. \n Elegir la prenda: \n 1- Remera \n 2- Buzo \n 3- Gorro")); 
// let elegirPrenda = 3;

//Seleccionar CANTIDAD de prendas
let elegirCantidad = parseInt(prompt("Ingresa la cantidad: "));
// let elegirCantidad = 4;

//Seleccionar MEDIO de pago
let elegirMedio = parseInt(prompt("Elegir medio de pago: \n 1- Efectivo \n 2- Tarjeta"));
// let elegirMedio = 2;

// Funcion para saber el precio final en efectico o con tarjeta.
let prenda = function (precio, medio) {
  switch (precio) {
    case 1:
      precio = 1090;
      break;
    case 2:
      precio = 2700;
      break;
    case 3:
      precio = 800;
      break;
    default:
      console.log("El numero ingresado no es valido");
  }
  if (medio == 1) {
    return precio;
  } else if (medio == 2) {
    return Math.round(precio * 1.1);
  }
};

//Precio final en EFECTIVO
let precioTotal = prenda(elegirPrenda, elegirMedio) * elegirCantidad;

console.log( "El cliente pagara $" + precioTotal + " en total");
alert("El precio total es de $" + precioTotal + ". ¡Grcias por su compra!");


//Precio final con tarjeta en CUOTAS
if (elegirMedio == 2) {
  let elegirCuotas = parseInt(prompt("¿En cuantas cuotas quisieras pagar?"));
  // let elegirCuotas = 5;
  function cuotas(n1, n2) {
    let precioCuotas = n1 / n2;
    return Math.round(precioCuotas);
  }

  precioCuotas = cuotas(precioTotal, elegirCuotas);
  console.log("El cliente pagara " + elegirCuotas + " cuotas de " + precioCuotas);
  alert("Vas a pagar " + elegirCuotas + " cuotas de $" + precioCuotas + ". ¡Grcias por su compra!");
}

