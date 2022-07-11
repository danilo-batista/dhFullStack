"use strict";

/** Desafio de aula - Repetição
 * 
 * Crie um programa que tenha como resposta a seguinte mensagem:
 * 
 * "Digite o número a ser somado e 0 para ver o resultado!"
 * 
 * OBS: Como nas aulas utilizamos o Replit, então este código não irá funcionar no
VSCODE (Replit e console do navegador estão ok).
 */

let checkpointsList, travelDistance = 0;

console.log("\n************** Simulador de Viagem com Veículos Terrestres **************\n");
console.log("\n\tAo final da sua simulação, você saberá:\n\t\t1. Quantidade de checkpoints(paradas)\n\t\t2. Distância total\n\n");

let i = 1;
checkpointsList = parseInt(prompt("\tInsira a " + i + "ª parada(checkpoint): "));
while (checkpointsList != 0) {
    console.log("\t∙ Parada " + i + ": " + checkpointsList.toLocaleString("pt-Br") + "km | (0) Finalizar Simulação");
    travelDistance = travelDistance + checkpointsList;
    checkpointsList = parseInt(prompt("\tInsira a " + i + "ª parada(checkpoint): "));
    i++;
}
console.log("\n\tSeu percurso terá " + travelDistance.toLocaleString("pt-Br") + "km com " + (i - 1) + " paradas(checkpoints).\n");

console.log("\n*************************************************************************\n");