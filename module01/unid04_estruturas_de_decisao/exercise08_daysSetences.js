"use strict";

/**
 * Crie um código que mostre ao usuário diferentes frases ao longo da semana.
Utilizando o Switch crie uma variável chamada dia que receberá um dado do
tipo String referente aos dias da semana. Para o exercício , utilize os seguintes
casos:
segunda-feira = “Tenha uma excelente semana!”
sexta - feira = “Sextou!”
sábado = “Partiu balada!”
domingo = “vamos ao shopping!”
qualquer outro dia = “ Bom dia!”
 */
let dayOfWeek;

dayOfWeek = prompt("Insira o dia da semana atual: ");

switch (dayOfWeek) {
    case "segunda-feira":
        console.log("Tenha uma excelente semana!");
        break;
    case "sexta-feira":
        console.log("Sextou!");
        break;
    case "sábado":
        console.log("Partiu balada!");
        break;
    case "domingo":
        console.log("Vamos ao shopping!");
        break;
    default:
        console.log("Bom dia!");
}