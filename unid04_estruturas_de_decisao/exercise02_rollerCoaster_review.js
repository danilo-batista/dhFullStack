"use strict";

/**
 * Você foi contratado por um parque de diversões para criar um sistema que
mostre se seus usuários estão gostando da nova montanha russa. Crie uma
variável chamada notasUsuarios que receberá um valor do tipo numérico.
Agora crie um código que imprima na tela os textos:
● “Excelente” para notas entre 9 e 10,
● “Muito bom” para notas entre 6 e 8
● “Não Gostei” para notas Menores que 5
Desenvolva esse código usando apenas a condicional IF (quantas vezes for
necessário)
 */

let usersRating;

usersRating = parseInt(prompt("Insira uma avaliação (1 à 10) sobre a sua experiência com a nossa montanha-russa!"));

if (usersRating >= 9) {
    console.log("Excelente!");
}

if (usersRating >= 6 && usersRating < 9) {
    console.log("Muito bom!");
}

if (usersRating <= 5) {
    console.log("Não gostei!");
}