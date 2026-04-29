/* Este es el punto C de la guia de operadores */

/* Este es el primer ejercicio */
let base = prompt("Escribe la base del terreno en metros:");
let altura = prompt("Escribe la altura del terreno en metros:");

let b = parseFloat(base)
let a = parseFloat(altura)

let area = b * a;
let perimetro =  2 * (b + a)

alert("El area es : " + area + " m2" )
alert("El permitro  es: " + perimetro + " m2")


/* Este el el punto 2  */

let nota1 = parseFloat(prompt("Escribe la primera nota de Juan"));
let nota2 = parseFloat(prompt("Escribe la segunda nota de Juan"));
let nota3 = parseFloat(prompt("Escribe la tercera nota de Juan"));
let promedio = (nota1 + nota2 + nota3) / 3;

alert("El promedio de las notas de Juan es: " + promedio);


/* Este es el punto 3 */
let contador = 100;
contador += 25; 
contador -= 10;
contador *= 2;

alert("El valor final del contador es: " + contador);
console.log("Resultado: " + contador);

/* Este el contador 4 */


// La operación completa repetida tres veces
let resultadoTotal = (20+10)/5+3*2-4*(20+10)/5+3*2-4*(20+10)/5+3*2-4;

console.log("El resultado final es: " + resultadoTotal);
alert("El resultado final es: " + resultadoTotal);