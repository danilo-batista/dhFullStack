"use strict";

/** Condicionais:
 *
 * Permitem avaliar condições e realizar diferentes açÕes segundo o resultado
 * dessas avaliações.
 *      If (condicao) { o que será executado }
 *      Else { quando a condição não for realizada }
 *      Else if (nova condicao) { o que será executado }
 *      if (condicao) ? (verdadeiro) : (falso) ----> ternário
 *
 *      . Boa prática: inicializar as variáveis com o tipo de dado que vão armazenar.
 *      . Um 'if' nem sempre precisa de um 'else' ou 'else if'
 *      . Podemos ter muitos 'else if', quantos forem necessários
 *      . Sempre que implementamos um 'else', ele será único
 *      . Quanto menos operações lógicas, mais performático o código
 */

/*
let idade = 19;
let acesso = "";

if (idade < 16) {
    acesso = "proibido";
} else if (idade >= 16 && idade <= 18) {
    acesso = "permitido só acompanhado de um maior de idade";
} else {
    acesso = "permitido";
}
console.log(acesso);
*/
/*
let dia = "sexta";
if (dia == "domingo") {
    console.log("Vou para a praia!");
} else if (dia == "sexta") {
    console.log("Sextou!");
} else {
    console.log("Vou olhar a minha agenda!");
}

let clima = "nublado";
if (clima == "ensolarado" && dia == "domingo") {
    console.log("Vou passear no parque!");
} else if (clima == "nublado" && dia == "sábado") {
    console.log("Vou ao cinema!");
} else {
    console.log("Vou ficar em casa!");
}
*/

/* Exercicios */
/** Exercício 1 
 * 
 * Declare uma variável com o nome dado e atribua um valor booleano. Então você
 * deve fazer um  if para avaliar essa variável: se for true imprimir
 * "É verdadeiro!", caso contrário "É falso!"
*/
let dado = true;
true ? console.log("É verdadeiro!") : console.log("É falso!");

/** Exercício 2 
 * 
 * Neste exercício te damos uma variável chamada linguagem, que tem uma String
 * atribuída. Seu trabalho agora é construir uma condicional if / else para que,
 * se a variável contém "javascript" imprima no console o texto "Estou aprendendo",
 * se não imprima"Vou aprender mais pra frente".
 * 
*/
let linguagem = "javascript";
"javascript" ? console.log("Estou aprendendo") : console.log("Vou aprender mais pra frente");
