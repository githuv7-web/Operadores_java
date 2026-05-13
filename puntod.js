/* punto D - 01 */
/*Actividades de aprendizaje:
Ejercico 1: Calculadora de gastos de viaje
*/
let Transporte = 120000;
let alojamineto = 200000;
let alimentacion = 150000;


let costo_viaje = Transporte + alojamineto + alimentacion;
let n_personas = prompt("ESCRIBE LA CANTIDAD DE PERSONAS");
let dinero = prompt("ESCRIBE LA CANTIDAD DE DINERO ENTREGADO DE CADA PERSONA");
let sobra = costo_viaje / n_personas ;
let total = dinero * n_personas;
let tota = total - costo_viaje;

alert("EL total de gastos son  " + costo_viaje);
alert ("El total de cada uno es de:  " + sobra);
alert("El restante del viaje es:" + tota)




/*Ejercicio 2: Conversor de tiempo
*/

let segundos = 72000;
let minutos = segundos / 60 ;
let horas = segundos / 3600 ;
let dias = segundos / 86400 ;




alert("EL total en dias de 72000 segundos:  " + dias + " Dias ");
alert("EL total en horas de 72000 segundos:  " + horas + " Horas");
alert("EL total en minutos de 72000 segundos:  " + minutos +" Minutos");





