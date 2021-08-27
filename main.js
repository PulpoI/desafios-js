
//Respuestas en const
const cumple = "Estas en un cumple"
const correcto = "Tu respuesta es exacta"

//Dos por tres
let dosPorTres = prompt("2 * 3?");
if(dosPorTres.toUpperCase() == "LLUEVE"){
    alert(correcto)
}else if(dosPorTres == 6 || dosPorTres.toUpperCase() == "SEIS"){ 
//Acá queria poner "6 || SEIS" y el toUpperCase en la variable pero no lo pude hacer andar. Para probar el or
//Lo resolví! Tenia que repetir la variable después del ||    
    alert("Aburrido")
}else{
    alert(cumple)
}

//Ladron que roba
let gatosLocos = prompt("El que roba a un ladrón, cuantos años tiene de perdón?");
if(gatosLocos == 100){
    alert(correcto)
}else if(gatosLocos > 100){
    alert("Era 100 pero vale")
}else{
    alert(cumple)
}

//Generaciones
let nacimiento = parseInt(prompt("Si queres saber a que generación perteneces, decime ¿en que año naciste?"))
if(nacimiento >= 1930 && nacimiento <= 1948){
    alert("Silent Generation")
}else if(nacimiento >= 1949 && nacimiento <= 1968){
    alert("Baby Boom")
}else if(nacimiento >= 1969 && nacimiento <= 1980){
    alert("Generación X")
}else if(nacimiento >= 1981 && nacimiento <= 1993){
    alert("Generacion Y o 'Milenials'")
}else if(nacimiento >= 1994 && nacimiento <= 2010){
    alert("Generazión Z o 'Centenials'")
}else{
    alert(cumple)
}


//Desafio clase 2
// 1 
let numero = parseInt(prompt("Coloca un numero"));
if(numero > 1000){
    alert("Jugalo a la quiniela")
}else{
    console.log("Ingreso un numero < 1000")
}

//2
let texto = prompt("Palabra que usamos para saludar");
if(texto.toUpperCase() == "HOLA"){
    alert("Hola!!!")
}else{
    console.log("No dijo Hola")
}

//3
let numeroPositivo = parseInt(prompt("Escribe un numero de dos cifras"));
if(numeroPositivo >= 10 && numeroPositivo <= 50){
    alert("Bingo")
}else{
    console.log("Eligió un numero diferente al requerido")
}