"use strict";

/** Variáveis
 * Espaço na memória onde um dado é armazenado e que pode ser utilizado depois.
 * - Boa prática: usar o formato camelCase
 * - JavaScript é case sensitive
 * - Atribuição: =
 * - Variável sempre salvará o último valor atribuído
 * 
 * Tipos:
 * var:
 *  . Escopo global
 * let: 
 *  . Escopo apenas para o bloco de execução - {}
 *  . Não pode repetir 'let' para uma nova reatribuição
 * const:
 *  . Escopo global
 *  . Não nos permite alterar no futuro
 *  . Boa prática: constantes podem ser declaradas em caixa alta ou baixa, 
 * mas uma convenção comum é usar apenas caixa alta
 * (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)
 *  . Em arrays, não se pode declarar um array vazio e depois reatribuir um valor
 * diretamente nele. Só é permitido através do método .push()
 */

/** Uso do var */
var nomeDeUsuario = "Danilo";
console.log(nomeDeUsuario);

/** Uso do let */
let sobrenomeDeUsuario = "Batista";
// console.log(sobrenomeDeUsuario);

sobrenomeDeUsuario = "Silva";
// console.log(sobrenomeDeUsuario);

if (true) {
    let nomeDeUsuario = "José";
    console.log(nomeDeUsuario);
}

/** Uso do const */
const carro = "Civic";
console.log(carro);

carro = "Fox";
console.log(carro);

/* Exercícios */
/** Exercício 1:
 * A seguir, temos uma função expressa, que retorna uma String. Mas ela precisa
 * de um nome. Sua tarefa é preencher os espaços com a declaração de variável e
 * dar à ela o nome de exemplo.
 */
let exemplo = function () {
    return "Oi, eu sou uma função expressa!"
}

/** Exercício 2:
 * Agora pense nesse exemplo, temos que validar algumas pessoas pelas suas idades.
 * Nosso critério será 18 anos como idade miníma e 99 como idade máxima. Ninguém
 * pode mudar essas definições. Para isso acontecer, iremos escrever constantes.
 * Vale dizer que, por questões de boas práticas,  é comum utilizar nome com 
 * letras maiúsculas na hora de definir uma constante.
 * 
 * Bom agora, você deve criar um constante chamada IDADE_MINIMA, e outra chamada
 * IDADE_MAXIMA. Que por sua vez, devem ter os valores 18 e 99 respectivamente.
 */
const IDADE_MINIMA = 18;
const IDADE_MAXIMA = 99;