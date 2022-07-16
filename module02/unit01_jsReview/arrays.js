"use strict";

/** Arrays ou matriz
 * 
 * Um array nos permite:
 *  . Gerar uma coleçÃo de dados
 *  . Armazenar diferentes tipos de dados
 * 
 * Observações:
 *  . Em estrutura de dados, é conhecido como PILHA
 *  . [], com elementos separados por vírgulas
 *  . Posição do elemento organizado por índice (iniciando sempre do 0), sendo
 * acessados colocando o índice dentro dos colchetes
 *  . Tamanho do array com '.length', um atributo de objeto.
 *  
 */
let minhaArray = ["Star Wars", true, 23];
console.log(minhaArray);

let filmesFavoritos = ["Star Wars", "Kill Bill", "Avengers: Ultimato"];
console.log(filmesFavoritos[2]);

let pessoa = ["Danilo", 37, 1.92, true, ["Games", "Séries", "Futebol"]];
console.log(pessoa);
console.log(pessoa[0]);
console.log(pessoa[4][1]);

console.log(pessoa.length);