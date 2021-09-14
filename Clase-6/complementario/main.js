const tuco = [{ id: 1, nombre: "Remera negra", talle: "L", color: "Negro", precio: 1190},
                { id: 2, nombre: "Remera blanca", talle: "XL", color: "Blanco", precio: 990},
                { id: 3, nombre: "Buzo negro", talle: "S", color: "Negro", precio: 2700},
                { id: 4, nombre: "Buzo blanco", talle: "L", color: "Blanco", precio: 2400},
                { id: 5, nombre: "Gorro gris", talle: "Unico", color: "Gris", precio: 800}];



const ordenarPorPrecio = (precios) => {
    tuco.sort((a,b) => {
        if (a[precios] > b[precios]) {
            return 1;
        }
       if (a[precios] < b[precios]) {
            return -1;
    }
    return 0;
})
}


ordenarPorPrecio("precio")
console.log(tuco)
