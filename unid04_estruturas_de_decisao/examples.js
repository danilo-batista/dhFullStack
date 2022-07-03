"use strict";

/** exemplo 1 
 * Um grupo de amigos resolveu que toda quarta-feira é dia de feijoada! E para lembrar a
todos desse momento festivo, resolveram criar um algoritmo que verifica em qual dia
da semana estamos. “Se hoje for quarta-feira”, significa que é dia de Feijoada!
*/
/*
let daysOfWeek = "quarta-feira";
if (daysOfWeek == "quarta-feira") {
    console.log("Hoje é dia de feijoada!");
}
*/

/** Exemplo 2:
 * Um Professor precisa automatizar os resultados dos alunos referente às avaliações
que foram realizadas no final do curso e pediu nossa ajuda para criar um algoritmo que
calcule a média de duas notas e informe se o aluno foi aprovado ou não!
*/
let nota1, nota2, mediaFinal;

//nota1 = parseInt(prompt("Informe a nota 1: "));
//nota2 = parseInt(prompt("Informe a nota 2: "));
nota1 = prompt("Informe a nota 1:");

mediaFinal = (nota1 + nota2) / 2;
console.log("A média final é " + mediaFinal + ".\n\n");

if (mediaFinal < 7) {
    console.log("O aluno foi reprovado!");
}

if (mediaFinal >= 7) {
    console.log("O aluno está aprovado!");
}