/**
 * Crie 3 variáveis contendo notas de um aluno em cada matéria por ex:
var matematica = 9;
var historia = 8;
var portugues = 7
Em seguida crie uma variável chamada média que calcule a média das notas que o
aluno tirou.
OBS: Só pra recordar, a média é a soma de todas as notas dividida pelo número de
matérias. Lembre-se também da precedência dos operadores.
 */

"use strict";

let mathGrade = 9;
let historyGrade = 8;
let portugueseGrade = 10;
let averageGrade = (mathGrade + historyGrade + portugueseGrade) / 3;

console.log("A média das notas foi " + averageGrade);

