"use strict";

/** Arrays: métodos */
let cores = ["Azul", "Vermelho", "Amarelo"];
console.log(cores);

// Método: array.push(elemento) - insere um item por último no array
cores.push("Roxo");
console.log(">(push) Acrescentou: " + cores);

// Método: array.pop() - elimina o último item do array e guarda o valor para poder passar para uma variavel
cores.pop();
// let excluido = cores.pop();
// console.log(excluido);
console.log(">(pop) Retirou: " + cores);

// Método: array.shift() - elimina o primeiro item do array e guarda o valor para poder passar para uma variavel
cores.shift();
console.log(">(shift) Retirou: " + cores);

// Método: array.unshift(elemento) - insere um ou mais itens no início do array
cores.unshift("Roxo", "Azul");
console.log(">(unshift) Acrescentou: " + cores);

// Método: array.join(parametro) - junta os itens do array em uma string usando o separador que especificamos
let listaCores = cores.join(" | ");
console.log(">(join) Organizou: " + listaCores);

// Método: array.indexOf(parametro) - procura e retorna o indice do elemento no array que recebe como parâmetro
let buscaCor = cores.indexOf("Azul");
console.log(">(indexOf) Achou na posição: " + buscaCor);
buscaCor = cores.indexOf("Rosa");
console.log(">(indexOf) Não achou: " + buscaCor);

// Método: array.lastIndexOf(parametro) - procura e retorna o indice do elemento repetido no array que recebe como parâmetro,
// procurando de trás para frente
cores.push("Azul");
buscaCor = cores.lastIndexOf("Azul");
console.log(">(lastIndexOf) Achou na posição: " + buscaCor);

// Método: array.includes(parametro) - procura e retorna o elemento no array que recebe como parâmetro com um valor booleano
buscaCor = cores.includes("Azul");
console.log(">(includes) Achou? " + buscaCor);

// Método: array.forEach(callback) - procura e retorna o resultado que satisfaça o processamento da função callback
// - Não é assincrono e busca elementos fora de ordenação
const notas = [7.2, 7.5, 8.4, 6.3, 9.1, 4.5, 6.8];

notas.forEach(nota => {
    if (nota < 7) console.log("nota: " + nota);
});

/** Exercício 1: Para este exercício contamos com o array alunos. Queremos saber
 * onde estão guardados os nomes de "João" e "Francisco". Utilize um dos métodos
 * de array. Declare as variáveis  indiceJoao, indiceFrancisco e armazene a
 * posição correspondente de cada um. 
 */
let alunos = ["João", "Pedro", "Jorge", "Francisco"];

let indiceJoao = alunos.indexOf("João");
let indiceFrancisco = alunos.indexOf("Francisco");

console.log(indiceJoao);
console.log(indiceFrancisco);
