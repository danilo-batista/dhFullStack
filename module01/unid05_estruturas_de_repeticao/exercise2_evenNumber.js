"use strict";

/**
 * Em uma atividade da escola, a professora pediu a seus alunos que dissessem
os números pares que existem entre 1 e 20. Para resolver esse problema,
podemos criar um loop for e utilizar uma estrutura condicional para verificar os
números pares.
Vale lembrar que para um número ser par, precisa que o resto da sua divisão por
dois, seja zero!
 */
for (let counter = 1; counter <= 20; counter++) {
    if (counter % 2 == 0) {
        console.log(counter + " é um número par.");
    }
}