"use strict";

/**
 * Você vai implementar uma melhoria em um sistema que consiste em dar dicas
aos usuários sobre o que fazer durante cada tipo de clima.
Para isso cria uma variável chamada temperaturaAgora que receberá um dado
do tipo numérico.
Caso a temperatura esteja acima de 26 graus ou mais, imprima a frase: “Não
esqueça do filtro solar”
Para temperaturas entre 19 e 26, imprima: “Não esqueça seu óculos de sol”
para temperaturas abaixo de 19 imprima: “Já pegou seu casaco?”.
 */
let temperatureNow;

temperatureNow = parseInt(prompt("Insira a temperatura atual: "));

if (temperatureNow >= 26) {
    console.log("Não esqueça do filtro solar!");
} else if (temperatureNow >= 19 && temperatureNow < 26) {
    console.log("Não esqueça seu óculos de sol!");
} else {
    console.log("Já pegou o seu casaco?");
}