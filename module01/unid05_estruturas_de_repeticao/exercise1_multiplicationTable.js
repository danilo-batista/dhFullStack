"use strict";

/**
 * Vamos desenvolver um loop for que calcule a tabuada de multiplicação do 7 e
nos mostre como resultado a expressão seguido do resultado, dessa forma:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
 */
let number, result;

number = parseInt(prompt("Insira o número da tabuada desejada: "));

for (let counter = 1; counter <= 10; counter++) {
    result = number * counter;
    console.log(number + " x " + counter + " = " + result);
}