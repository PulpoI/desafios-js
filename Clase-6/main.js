const tuco = [{ id: 1, nombre: "Remera negra", talle: "L", color: "Negro", precio: 1190},
                { id: 2, nombre: "Remera blanca", talle: "XL", color: "Blanco", precio: 1190},
                { id: 3, nombre: "Buzo negro", talle: "S", color: "Negro", precio: 2700},
                { id: 4, nombre: "Buzo blanco", talle: "L", color: "Blanco", precio: 2700},
                { id: 5, nombre: "Gorro gris", talle: "Unico", color: "Gris", precio: 800}];


console.log(tuco);

const carrito = [];

const comprar = (elegirPrenda) =>{
    let prenda = tuco.find(prenda => prenda.nombre == elegirPrenda)
    if(prenda){
        carrito.push(prenda)
    }else{
        console.log("No se encuentra el producto")
    }
}

const buscarTalle = (tallePrenda) => {
    const busqueda = tuco.filter(talle => talle.talle == tallePrenda)
    console.log(busqueda);
}
buscarTalle("L")

const buscarColor = (colorPrenda) => {
    const busqueda = tuco.filter(color => color.color == colorPrenda)
    console.log(busqueda);
}
buscarColor("Blanco")

comprar("Remera negra")
comprar("Buzo blanco")
comprar("Gorro gris")
console.log(carrito)