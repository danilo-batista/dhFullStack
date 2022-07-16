"use strict";

/**
 * Lembra da tabuada que fizemos juntos utilizando o loop for? Agora é a sua vez!
Crie a tabuada do 10 utilizando o ciclo de repetição While.
 */
let number, result, counter;

number = parseInt(prompt("Insira o número da tabuada desejada: "));
counter = 1;

while (counter <= 10) {
    result = number * counter;
    console.log(number + " x " + counter + " = " + result);
    counter++;
}