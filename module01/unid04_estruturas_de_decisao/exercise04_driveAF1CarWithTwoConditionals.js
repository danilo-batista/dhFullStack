"use strict";

/**
 * Utilize o mesmo código do terceiro exercício e desta vez informe ao usuário
com idades abaixo de 18 anos a seguinte frase: “Infelizmente você não tem
autorização para dirigir”
 */

let height, age;

height = parseInt(prompt("Insira a sua altura: "));
age = parseInt(prompt("Insira a sua idade: "));

if (age < 18) {
    console.log("Infelizmente você não tem autorização para dirigir!");
} else {
    if (height <= 160) {
        console.log("Você poderá pilotar o carro de F1!");
    } else {
        console.log("Você não tem a altura mínima para pilotar esta máquina!");
    }
}