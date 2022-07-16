"use strict";

/** Introducao
 * 
var novaArray = ["elemento1", "elemento2", "elemento3", "elemento4"];

console.log(novaArray[0]);
console.log(novaArray[1]);
console.log(novaArray[2]);
console.log(novaArray[3]);

novaArray[1] = "segundo elemento";
console.log(novaArray[1]);
 *
*/

/** Percorrendo um array
 * 
let alimentos = ["Pão", "Queijo", "Leite", "Café"];

let frase = "Este alimento se chama " + alimentos[0] + ".";
console.log(frase);
let frase1 = "Este alimento se chama " + alimentos[1] + ".";
console.log(frase1);
let frase2 = "Este alimento se chama " + alimentos[2] + ".";
console.log(frase2);
let frase3 = "Este alimento se chama " + alimentos[3] + ".";
console.log(frase3);
console.log("");

for (let i = 0; i < alimentos.length; i++) {
    let frase = "Este alimento se chama " + alimentos[i] + ".";
    console.log(frase);
}
 * 
 */

/** Métodos nativos */
let frutas = ["Banana", "Uva", "Maçã", "Laranja"];
console.log(frutas + "\n");

// Método: array.pop()
let ultimaFruta = frutas.pop();
console.log(">Retirou: " + ultimaFruta);
console.log(frutas + "\n");

// Método: array.push()
ultimaFruta = frutas.push("Goiaba");
console.log(">Acrescentou: " + ultimaFruta);
console.log(frutas);

// Método: array.indexOf()
console.log(frutas.indexOf("Melancia")); // Retorna -1: não encontrado
console.log(frutas.indexOf("Uva")); // Retorna 1: encontrado