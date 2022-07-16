"use strict";

/** Funções
 * 
 * As funções no JavaScript nos permitem agrupar um ou vários blocos de código, 
 * que podemos reutilizar muitas vezes. É importante diferenciar dois momentos:
 * 
 * 1) O momento de definir o que a função fará;
 * 2) O momento da execução da função.
 * 
 * No primeiro momento, a função e toda sua lógica interna estão armadas.
 * Isto é, onde definimos o que queremos que ela faça. Enquanto o segundo
 * momento se refere a quando a função é utilizada, ou seja, é o momento
 * exato em que precisamos colocá-la em movimento.
 * 
 * Parâmetros: são as variáveis que escrevemos quando definimos a função.
 * Argumentos: são os valores que enviamos quando executamos a função.
 * 
 * Neste momento, podem ser utilizados parâmetros ou não.
 * - Funções declaradas: nome formal pelo qual será invocada
 * - Funções anônimas: atribuídas como valor de uma variável
 * 
 * 
 * Invocar função: colocar em funcionamento.
 *      . Digitar nome_da_funcao e parenteses, com argumentos se for necessário
 *      . Função precisa ser declarada antes
 *      . Respeitar a ordem dos parâmetros
 * 
 * Variáveis respeitam o escopo da função: local e global
 *      . Variáveis com escopo local com o mesmo nome das que são Global podem
 * acontecer. O inverso não.
 */

/* Função Declarada */
function dobro(umNumero) { return umNumero * 2; };
console.log(dobro(2));

function darOi() { console.log("Olá! tudo bem?"); }
darOi();

/* Função Anônima */
let somar = function () { console.log(1 + 1); };
somar();
somar();

somar = function (numA, numB) { console.log(numA + numB); };
somar();
somar(6);
somar(3, 6);

let resultado = somar(1, 2);
console.log(resultado); // undefined
somar = function (numA, numB) { return numA + numB; };
resultado = somar(1, 2);
console.log(resultado);
console.log(somar(1, 2));

/* Escopos */
let valorFinal = 0;
console.log("Variável fora da funçÃo: ", valorFinal);
function multiplicar(numA, numB) {
    let valorFinal = numA * numB;
    console.log("Variável dentro da funçÃo: ", valorFinal);
}
multiplicar(2, 2);
console.log(valorFinal);









