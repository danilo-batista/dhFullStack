"use strict";

/** Exemplo 1
 * Uma Professora de Matemática está com dificuldades para ensinar os múltiplos de 10
para sua turma, então ela decidiu utilizar a programação para atrair a atenção dos seus
alunos. Porém, ela não sabe programar e pediu nossa ajuda para criar uma aplicação
que imprima os valores de 1 a 100, e para cada vez que a impressão encontrar um valor
múltiplo de 10, imprima também, a frase: “ - Múltiplo de 10”.

for (let contador = 1; contador <= 100; contador++) {
    if (contador % 10 == 0) {
        console.log(contador, " - Múltiplo de 10");
    } else {
        console.log(contador);
    }
}

 */

/** Exemplo 2
 * Vamos criar um loop for, que irá imprimir no console a seguinte frase “Estou
aprendendo Loops” 10 vezes.

for (let contador = 1; contador <= 100; contador++) {
    console.log("Estou aprendendo loops!");
}

 */

/** Exemplo 3
 * Vamos criar um laço de repetição While que irá iterar 12 vezes o ciclo e imprimir no
console apenas quando o valor dessa iteração for ímpar.
*/
let counter = 1;

while (counter <= 12) {
    if (counter % 2 != 0) {
        console.log(counter);
    }
    counter++;
}