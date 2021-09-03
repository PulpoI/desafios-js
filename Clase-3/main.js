//For
/*
for(let i = 1; i<= 20; i++){
    
    console.log(i);
}
*/
/*
for(let i = 5; i < 100; i++) {
    if(i >= 50 && i <= 60 ){
        continue;
    }else if(i == 70){
        break;
    }
    console.log(i)
}
*/

//Calculadora
/* 
let numero = parseInt(prompt("Ingresar Numero"));
for (let i = 1; i <10; i++) {
    let resultado = numero * i;
    console.log(numero + " X " + i + " = " + resultado);
}
*/
/*
alert("Sumara 5 veces y lo mostrara en consola");
for (let i = 1; i <= 5; i++){
    alert("Suma #" + i);
    let numero1 = Number(prompt("Primer numero que desea sumar"))
    let numero2 = Number(prompt("Segundo numero que desea sumar"))
    let resultadoDeSuma;

    resultadoDeSuma = numero1 + numero2;
    console.log(numero1 + "+" + numero2 + "" + " = " + resultadoDeSuma)
}
*/


// WHILE
/*
let edadMirta = prompt("Ingresar la edad de Mirta");
while (edadMirta != 94) {
    alert("Pifiaste!");
    edadMirta = prompt("Volve a interlo, Mirta tiene?");
    
}
*/   
/*
let nombre = "";
let contar = 0;

alert("Introduzca nombres para crear un listado");
nombre = prompt("Introduce un nombre");

while (nombre == null || nombre == "") {
    nombre = prompt("Introduce un nombre");
}
nombre = nombre.toUpperCase();

while (nombre != "ESC") {
    contar++;
    console.log(contar + "- " +  nombre);
    nombre = prompt("Introduce un nombre");
    while (nombre == null || nombre == "") {
        nombre = prompt("Introduce un nombre");
    }
    nombre = nombre.toUpperCase();
}
*/




let numero = 0;
let contar = 0;

alert("Ingresa un numero y se mostrara 'Hola'");
numero = parseInt(prompt("Ingresa un numero"));

while (numero == null || numero == "" || isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt("Ingresa un numero, por favor"));
}

while (contar < numero) {
    console.log((contar + 1) + "- Hola");
    contar += 1;
}




/*
// SWITCH 
let carrera = prompt("Ingresa tu carrera")
while (carrera != "NINGUNA") {
    switch (carrera) {
        case "DISEÑO":
            alert("Te inscribiste en Diseño");
            break;
        case "INFORMATICA":
            alert("Te inscribiste en Informatica"); 
            
            break;
        default:
            alert("Indica una carrera por favor");
            break;
    }
    carrera = prompt("Ingresa carrera");
}
*/




// DESAFIO
/*
let numeroUnaCifra = parseInt(prompt("Ingresa un numero de una cifra para ver la tabla en la consola"));
for (let i = 1; i < 10; i++){
    let resultado = numeroUnaCifra * i; 
    console.log(numeroUnaCifra + " X " + i +  " es igual a: " + resultado)
}


let prenda = prompt("Ingrese la prenda que desea agregar al carrito");
while (prenda != "ESC") {
    console.log("El usuario agregó " + prenda + " al carrito");
    prenda = prompt("Ingrese otra prenda o ingrese ESC para terminar");
}
*/

/*
let mensaje = "Hola";
let numeroHola = parseInt(prompt("Ingresa un numero del 1 al 3"));
while (numeroHola != ""){
    switch (numeroHola) {
        case 1:
            alert("Hola");
            numeroHola = ""
            break;
        case 2:
            alert("Hola Hola");
            numeroHola = ""
            break;  
        case 3: 
            alert("Hola Hola Hola");
            numeroHola = ""
            break;
        default:
            alert("El numero no es valido")
            numeroHola = parseInt(prompt("Proba con un numero del 1 al 3"));
            break;
    }
}                                     
*/  

