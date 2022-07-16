"use strict";

/** Exercício 1: Crie dois arrays, seguindo as instruções abaixo:
- listaDePares: contendo todos os números pares de 1 a 10.
- listaDeFilmes: contendo os títulos da trilogia do Senhor dos Anéis:
A Sociedade do Anel, As Duas Torres e O Retorno do Rei.
 */

let evenList = [];

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        evenList.push(i);
    }
}
console.log("Even numbers of 1 to 10:", evenList);

let theLordOfTheRingsFilms = [
    "A Sociedade do Anel",
    "As Duas Torres",
    "O Retorno do Rei"
];
console.log("The Lord of Rings Trilogy: ", theLordOfTheRingsFilms);