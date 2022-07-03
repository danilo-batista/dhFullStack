"use strict";

/** exemplo 1 
 * Um grupo de amigos resolveu que toda quarta-feira é dia de feijoada! E para lembrar a
todos desse momento festivo, resolveram criar um algoritmo que verifica em qual dia
da semana estamos. “Se hoje for quarta-feira”, significa que é dia de Feijoada!


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

nota1 = parseInt(prompt("Informe a nota 1: "));
nota2 = parseInt(prompt("Informe a nota 2: "));

mediaFinal = (nota1 + nota2) / 2;
console.log("A média final é " + mediaFinal + ".\n\n");

if (mediaFinal < 7) {
    console.log("O aluno foi reprovado!");
} else {
    console.log("O aluno está aprovado!");
}


/** Example 3
 * O Departamento de Trânsito da sua cidade procurou você para criar um algoritmo que
receba do usuário a sua idade e retorne como resposta a informação se o mesmo pode
ou não dirigir. Sabendo que a idade mínima para solicitar a carteira de motorista é 18
anos.


let age;

age = parseInt(prompt("Insira a sua idade: "));

if (age >= 18) {
    console.log("Você já pode dirigir!");
} else {
    console.log("Ops! Você ainda não pode dirigir!");
}

 */