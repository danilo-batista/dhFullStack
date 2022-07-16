"use strict";

/**
 * Precisamos criar um código que ajude uma escola a dizer se o aluno conseguiu
atingir os objetivos na prova. E para isso eles deixaram para você as notas que
eles usam para fazer essa classificação:
7 a 10 = “Aprovado”
5 a 6 = “Reforço”
Menos que 5 = “Recuperação”
 */
let examGrade;

examGrade = parseInt(prompt("Insira a nota do aluno: "));

if (examGrade >= 7) {
    console.log("Aprovado!");
} else if (examGrade == 5 || examGrade == 6) {
    console.log("Reforço!");
} else {
    console.log("Recuperação!");
}