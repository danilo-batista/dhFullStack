"use strict";

/**
 * Precisamos de um código que verifique a idade do usuário para ver se já tem
idade mínima para adquirir carta de habilitação. Para isso, teremos uma variável
nome que guarda um valor do tipo string, e uma variável idade que guarda um
valor do tipo numérico.
Caso o usuário tenha mais de 18 anos ou mais, imprima a seguinte frase:
“Parabéns, você já pode dirigir”.
 */

let name, age;

name = prompt("Insira o seu nome: ");
age = parseInt(prompt("Insira a sua idade: "));

if (age >= 18) {
    console.log("Parabéns, " + name + ". Você já pode tirar a sua carteira de habilitação!");
}

if (age < 18) {
    console.log("Desculpe, " + name + ". Infezlimente, somente pessoas com 18 anos ou mais podem ter carteira de habilitação!");
}