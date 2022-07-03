"use strict";

/**
 * Desenvolva um código que receba uma variável alturaPessoa que guarda um
valor do tipo numérico (inteiro).
Caso a altura do usuário seja maior ou igual a 160cm, imprima na tela: ”Você
poderá pilotar o carro de F1!”
Se a altura for inferior a 170cm, imprima: “Você não tem a altura mínima para
pilotar esta máquina!”.
 */

let height;

height = parseInt(prompt("Insira a sua altura: "));

if (height <= 160) {
    console.log("Você poderá pilotar o carro de F1!");
} else {
    console.log("Você não tem a altura mínima para pilotar esta máquina!");
}