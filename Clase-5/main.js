// function Alumno (nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;

// }

// const alumno1 = new Alumno("Joaquin", 18, "Lavalle 234")
// const alumno2 = new Alumno("Marcos", 19, "Junin 29")
// console.log(alumno2)

// alumno2.ciudad = "Chacabuco"


// class Sesiones {
//     constructor(nombre,precio,duracion,disponible){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.duracion = duracion;
//         this.disponible = disponible;
//     }
// }

// const quinceAños = new Sesiones("Book de 15", 8000, 3, true);
// // console.log(quinceAños)
// const niños = new Sesiones("Book de niños", 5000, 2, true);


// function publicidad() {
//     let resultado = `Tenes descuento en ${niños.nombre}, ahora sale ${niños.precio / 2}`
//     return resultado;
// }

// publicidad()
// console.log(publicidad())







// //Seleccionar PRENDA
// let elegirPrenda = parseInt(prompt("Elegir la prenda: \n 1- Remera \n 2- Buzo \n 3- Gorro")); 
// // let elegirPrenda = 3;

// //Seleccionar CANTIDAD de prendas
// let elegirCantidad = parseInt(prompt("Ingresa la cantidad: "));
// // let elegirCantidad = 4;

// //Seleccionar MEDIO de pago
// let elegirMedio = parseInt(prompt("Elegir medio de pago: \n 1- Efectivo \n 2- Tarjeta"));
// // let elegirMedio = 2;

// // Funcion para saber el precio final en efectico o con tarjeta.
// let prenda = function (precio, medio) {
//   switch (precio) {
//     case 1:
//       precio = 1090;
//       break;
//     case 2:
//       precio = 2700;
//       break;
//     case 3:
//       precio = 800;
//       break;
//     default:
//       console.log("El numero ingresado no es valido");
//   }
//   if (medio == 1) {
//     return precio;
//   } else if (medio == 2) {
//     return Math.round(precio * 1.1);
//   }
// };

// //Precio final en EFECTIVO
// let precioTotal = prenda(elegirPrenda, elegirMedio) * elegirCantidad;

// console.log(precioTotal);
// alert("El precio total es de $" + precioTotal);


// //Precio final con tarjeta en CUOTAS
// if (elegirMedio == 2) {
//   let elegirCuotas = parseInt(prompt("¿En cuantas cuotas quisieras pagar?"));
//   // let elegirCuotas = 5;
//   function cuotas(n1, n2) {
//     let precioCuotas = n1 / n2;
//     return Math.round(precioCuotas);
//   }

//   precioCuotas = cuotas(precioTotal, elegirCuotas);
//   console.log(precioCuotas);
//   alert("Vas a pagar " + elegirCuotas + " cuotas de $" + precioCuotas);
// }


class Detalles {
    constructor (prenda, talle, stock, color, disenio) {
        this.prenda = prenda;
        this.talle = talle;
        this.stock = stock;
        this.color = color;
        this.disenio = disenio;
    }
    stockDisponible(){
        if (this.stock > 0) {
            let stockDisponible = `${this.prenda} se encuentra disponible`;
            console.log(stockDisponible);
        } else {
            let stockNoDisponible = `${this.prenda} no se encuentra disponible`;
            console.log(stockNoDisponible);
        }
    }
}

const RemeraLogo = new Detalles("Remera", "L", true, "Negro", "Logo");
console.log(RemeraLogo)
const BuzoMediana = new Detalles("Buzo", "XL", false, "Blanco", "Mediana")
console.log(BuzoMediana)

const PedidoPersonalizado = new Detalles(prompt("Ingresa el nombre de la prenda"),
                                         prompt("Ingresa el talle"), true, 
                                         prompt("Ingresa el color"), 
                                         prompt("Ingresa el diseño y tamaño de la estampa"))
console.log(PedidoPersonalizado)

if(PedidoPersonalizado != ("", "", true, "", "")) {
    alert("Gracias, su pedido fue realizado. Pronto nos comunicaremos")
}else{
    alert("Lo sentimos, no pudimos registrar su pedido")
}

RemeraLogo.stockDisponible()
BuzoMediana.stockDisponible()

