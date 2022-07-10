"use strict";

/**
 * Faça uma aplicação que leia 10 números do usuário e some somente os
valores pares. Ao final, exiba os valores digitados, a relação dos números
pares e o valor da soma desses pares.
 */
let number, evenPlusResults = 0, counter = 1;
let inserts = "", plusInserts = "";

while (counter <= 10) {
    number = parseInt(prompt("Insira o " + counter + "o número: "));

    if (counter < 10) {
        inserts = inserts + number + ", ";
        if (number % 2 == 0) {
            evenPlusResults = evenPlusResults + number;
            plusInserts = plusInserts + number + ", ";
        }
    } else {
        inserts = inserts + number + ". ";
        if (number % 2 == 0) {
            evenPlusResults = evenPlusResults + number;
            plusInserts = plusInserts + number + ". ";
        }
    }

    counter++;
}

console.log("Os números digitados foram: ", inserts);
console.log("Os números identificados como pares foram: ", plusInserts);
console.log("A soma dos números pares é: ", evenPlusResults);