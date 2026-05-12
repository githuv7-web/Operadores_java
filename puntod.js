/* punto D - 01 */

let Transporte = Number("120000");
let alojamineto = Number("200000");
let alimentacion = Number("150000");

let costo_viaje = Transporte + alojamineto + alimentacion;
let n_personas = prompt("ESCRIBE LA CANTIDAD DE PERSONAS");
let dinero = prompt("ESCRIBE LA CANTIDAD DE DINERO ENTREGADO DE CADA PERSONA");

alert("EL total de gastos son  " + costo_viaje);

/*Actividades de aprendizaje:
Ejercico 1: Calculadora de gastos de viaje
Un grupo de amigos realiza un viaje con los siguientes costos fijos:
• Transporte: $120.000
• Alojamiento: $200.000
• Alimentación: $150.000
El total debe dividirse en partes iguales entre 4 personas. Además, cada persona
entregará $130.000 y se debe calcular el sobrante.
Requerimiento:
• Usa constantes para los costos y la cantidad de personas.
• Usa variables para el total, el aporte individual y el sobrante.*/
