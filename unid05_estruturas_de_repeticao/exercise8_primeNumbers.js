/**
 * Faça uma aplicação que leia 10 números do usuário e some somente os
valores pares. Ao final, exiba os valores digitados, a relação dos números
pares e o valor da soma desses pares.
 * 
 * Agora, melhore o código da questão anterior e faça um programa que receba
10 números, calcule e imprima a soma dos números pares e a soma dos
números primos.
 */


// PARES: numero % 2 == 0
// PRIMOS: dois dividendos

let number, evenPlusResults = 0, primeNumbersResults = 0;
let inserts = "", plusInserts = ""; primeInserts = "";
let counter = 1;

while (counter <= 10) {
    number = parseInt(prompt("Insira o " + counter + "o número: "));

    let divisor = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            divisor++;
        }
    }
    if (divisor == 2) {
        primeInserts = primeInserts + number + ", ";
        primeNumbersResults = primeNumbersResults + number;
    }

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
console.log("A soma dos números primos é: ", primeNumbersResults);