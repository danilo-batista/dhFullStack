"use strict";

/** Tipos de Dados
 * Permite saber as características e funcionalidades disponíveis.
 * 
 * Tipos:
 * - Numéricos (number):
 *      . Utilizar pontos como separador
 * 
 * - Cadeia de caracteres (string):
 *      . Boa prática: utilizar aspas duplas(""), mesmo o JS aceitando aspas
 * simples ('')
 *      . Não há limite de caracteres
 *      . Pode conter números e letras
 * 
 * - Lógicos ou booleanos (boolean):
 *      . Não recebem aspas
 * 
 * - Objeto (object):
 *      . Utiliza-se chaves para criar um objeto {}
 *      . Dentro do objeto, atribuição é feita com dois pontos: propriedade : valor
 *      . Para acessar um elemento dentro do objeto, utilizamos o ponto
 * (nomeDoOobjeto.nomeDaPropriedade)
 * 
 * - Array
 *      . Tipo especial de dado
 *      . Declarar com conchetes []
 *      . Índice (index) sempre começa na posiçao 0
 *      . Para selecionar a posição, utiliza-se o índice dentro do conchetes ([1])
 * 
 * - Nan (Not A Number): valor não pode ser passado como um número
 * 
 * - Nulo (null): valor vazio ou desconhecido
 * 
 * - Indefinido (undefined): valor ausente. Variáveis são undefined até ter um valor atribuído.
 * 
 */

/* Number */
let idade = 37;
console.log(idade);
let preco = 15.25;
console.log(preco);

/* String */
let nome = "Danilo";
console.log(nome);

/* Boolean */
let nasceuNoBrasil = true; //false
console.log(nasceuNoBrasil);
let diaEstaChuvoso = false;
console.log(diaEstaChuvoso);

/* NaN */
let multiplicacao = "a" * 2;
console.log(multiplicacao);

/* Null */
let soma = null;
console.log(soma);

/* Undefined */
let divisao;
console.log(divisao);

/* Objeto literal */
let meuCarro = {
    marca: "Fiat",
    ano: 2013,
    cor: "Branco"
};
console.log(meuCarro)

let moto = {
    marca: "Honda",
    ano: 2019,
    modelo: "CB500"
}
console.log(moto);
console.log(moto.marca)
console.log(moto.ano)
console.log(moto.modelo)

/* Arrays */
let seriesFavoritas = [
    "Friends",
    "Breaking Bad",
    "Game of Thrones"
];
console.log(seriesFavoritas);

let cores = [
    "Azul",
    "Vermelho",
    "Amarelo"
];
console.log(cores);

/* Exercícios */
/** Exercício 1
 * Para este exercício, solicitamos que você declare 4 variáveis ​​usando o let
 * com os nomes: verdadeiro, nada, texto e numero. Para cada um deles, você
 * deve atribuir o tipo de dados que sugere seu nome, conforme apropriado.
 * 
 */
let verdadeiro = true;
let nada = null;
let texto = "texto";
let number = 1;
