const suma = (a, b) =>{
    return a + b;
}

const resta = (a, b) =>{
    return Math.round(a - b);
}

const iva = a => a * 0.21;

const descuento = (a, b) => {
    return a * b / 100;
}
//Valores fijos, modificables desde el codigo
const precioProducto = 2500;
const cuponDescuento = "SEP25";
const porcentajeCupon = 25;

//Calcular el iva del producto y sumarlo
let productoIva = iva(precioProducto);
let precioConIva = suma(productoIva, precioProducto);

//Restar descuento de cupon y calcular el total
let precioCupon = descuento(precioConIva, porcentajeCupon);
let precioCuponAplicado = resta(precioConIva, precioCupon);

//Mensaje de compra finalizada y consultar por cupon
alert("¡Gracias por tu compra!, el precio total es de: $" + precioConIva);
let cupon = prompt("Si tenes un cupn aplicalo a continuación:");

//Confirmar cupon 
while (cupon !== cuponDescuento) {
    alert("El cupón no es válido");
    cupon = prompt("Si tenes un cupon aplicalo a continuación:");
}
if(cupon === cuponDescuento){
    alert("¡Felicidades! Tenes un descuento del " + porcentajeCupon + "%." +  "\n El precio con descuento es de $" +
    precioCuponAplicado);
}
