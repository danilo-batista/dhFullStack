"use strict";

// Funções:
/*
// function saudacao() {
//     console.log("Olá! Tudo bem?");
// }
// saudacao();
*/

// let nome;
// function saudacao(nome) {
//     console.log("Olá, " + nome + "! Tudo bem?");
// }
// saudacao("Danilo");
// saudacao("Tatiana");

// let nomeHomem, nomeMulher
// function olaPessoas(nomeHomem, nomeMulher) {
//     console.log("Olá, " + nomeMulher + " e " + nomeHomem + "!");
// }
// olaPessoas("João", "Maria");

/** Exemplo 1
 * Recebemos o desafio de construir uma função que realize a soma de dois valores, por
exemplo: 10 e 20.

function somar(numA, numB) {
    console.log(numA + numB);
}
somar(1, 2);
*/

/** Exemplo 2
 * Vamos criar um programa em JavaScript que funcione como uma calculadora, que
deve executar as operações de soma, subtração, multiplicação e divisão, recebendo
dois números como parâmetros! É importante que esse programa utilize funções para
realizar os cálculos e exibi-los no console.

function somar(numA, numB) {
    console.log("Resultado da soma: ", numA + numB);
}

function subtrair(numA, numB) {
    console.log("Resultado da subtração: ", numA - numB);
}

function multiplicar(numA, numB) {
    console.log("Resultado da multiplicar: ", numA * numB);
}

function dividir(numA, numB) {
    if (numB != 0) {
        console.log("Resultado da divisão: ", numA / numB);
    } else {
        console.log("Não é possível a divisão por 0.")
    }
}

somar(1, 2);
dividir(8, 0);
dividir(4, 2);
subtrair(3, 1);
multiplicar(3, 2);
*/

// function somar(numA, numB) {
//     return numA + numB;
// }

// let resultado = somar(1, 2);
// console.log("Resultado da soma: ", resultado);

/** Exemplo 3
 * Vamos reescrever o exemplo da calculadora que efetua as quatro operações (somar,
subtrair, multiplicar e dividir), mas desta vez, utilizaremos “return” para tratar as
informações:
function somar(numA, numB) {
    return numA + numB;
}

function subtrair(numA, numB) {
    return numA - numB;
}

function multiplicar(numA, numB) {
    return numA * numB;
}

function dividir(numA, numB) {
    if (numB != 0) {
        return numA / numB;
    } else {
        console.log("Não é possível a divisão por 0.")
    }
}

let resultadoSoma = somar(1, 2);
let resultadoDivisao = dividir(8, 0);
resultadoDivisao = dividir(4, 2);
let resultadoSubtracao = subtrair(3, 1);
let resultadoMultiplicacao = multiplicar(3, 2);

console.log("Resultado da soma: ", resultadoSoma);
console.log("Resultado da subtração: ", resultadoSubtracao);
console.log("A soma + subtração: ", resultadoSoma + resultadoSubtracao);
*/

/** Exemplo 4
 * Vamos criar uma função chamada cartaoDeVisita. Essa função deverá receber dois
parâmetros: um nome e um sobrenome de uma pessoa. Ao executarmos essa
função, teremos a impressão do cartão contendo o nome completo da pessoa

function cartaoDeVisita(primeiroNome, sobrenome) {
    console.log("Cartão de Visita\n" + primeiroNome + " " + sobrenome);
}
cartaoDeVisita("Danilo", "Batista");
*/

/** Exemplo 5
 * Os engenheiros de uma montadora estão projetando o computador de bordo de um
carro. Eles precisam de uma função que possa calcular a autonomia atual do
automóvel, em outras palavras, quantos quilômetros ele consegue andar com a
quantidade de combustível atual.
O cálculo da autonomia se dá pela divisão da distância percorrida pela quantidade de
combustível consumida. Por exemplo: um carro que gasta 8 litros a cada 100 km tem
como média 12,5 km/litro.
Vamos criar uma função chamada autonomia. Essa função deve receber dois
parâmetros:
■ O primeiro, que representa a quantidade em litros de combustível gasto;
■ O segundo, que representa a distância percorrida pelo automóvel
A função deve retornar o valor que representa a autonomia do automóvel em km/litro.
*/
function autonomia(litros, distancia) {
    return distancia / litros;
}
let resultado = autonomia(8, 100);
console.log("A autonomia do automóvel é de " + resultado + "km/litros.");