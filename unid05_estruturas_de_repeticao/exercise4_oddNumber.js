"use strict";

/**
 * Precisamos de um loop que irá percorrer os números de 1 a 30 e deverá imprimir
a frase “O número x é ímpar” onde o x na frase deve ser o valor da variável
contadora caso ela seja ímpar.
Por exemplo:
O número 1 é ímpar
2
O número 3 é ímpar
4…
e assim por diante.
 */
for (counter = 1; counter <= 30; counter++) {
    if (counter % 2 != 0) {
        console.log("O número " + counter + " é ímpar!");
    } else {
        console.log(counter);
    }
}