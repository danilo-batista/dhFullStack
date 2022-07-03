"use strict";

/**
 * Faça uma aplicação que leia 10 números do usuário e some somente os
valores pares. Ao final, exiba os valores digitados, a relação dos números
pares e o valor da soma desses pares.
 */
let number, result = 0, counter = 1;

while (counter <= 10) {
    number = parseInt(prompt("Insira um número: "));
    if (number % 2 == 0) {
        console.log(number + " é um número par.");
        result = result + number;
    } else {
        console.log(number);
    }
    counter++;
}

console.log("A soma dos números pares é: ", result);
