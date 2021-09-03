//Seleccionar PRENDA
let elegirPrenda = parseInt(prompt("Elegir la prenda: \n 1- Remera \n 2- Buzo \n 3- Gorro")); 
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

console.log(precioTotal);
alert("El precio total es de $" + precioTotal);


//Precio final con tarjeta en CUOTAS
if (elegirMedio == 2) {
  let elegirCuotas = parseInt(prompt("¿En cuantas cuotas quisieras pagar?"));
  // let elegirCuotas = 5;
  function cuotas(n1, n2) {
    let precioCuotas = n1 / n2;
    return Math.round(precioCuotas);
  }

  precioCuotas = cuotas(precioTotal, elegirCuotas);
  console.log(precioCuotas);
  alert("Vas a pagar " + elegirCuotas + " cuotas de $" + precioCuotas);
}



