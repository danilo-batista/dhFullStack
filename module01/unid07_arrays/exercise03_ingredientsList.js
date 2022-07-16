"use strict";

/** Exercício 3:
 * Queremos criar uma função chamada agregandoSabor que irá receber como
parâmetro um array com ingredientes e um novo item para ser adicionado. Por
exemplo:
 * function agregandoSabor (listaIngredientes , itemParaAdiconar) {}
 * Seu trabalho será pegar esse parâmetro e adicioná-lo ao array de ingredientes. Por fim,
não esqueça de retornar o array com as novas alterações.
OBS: PARA ESSE EXERCÍCIO VOCÊ IRÁ USAR O MÉTODO .PUSH( ).
 * 
 */
function moreTaste(ingredientsList, addItem) {
    ingredientsList.push(addItem);
    return ingredientsList;
}

let ingredientsList = [];

moreTaste(ingredientsList, "Açúcar");
moreTaste(ingredientsList, "Farinha");
moreTaste(ingredientsList, "Granulado");

console.log("Lista de ingredientes para o bolo:")
for (let i = 0; i < ingredientsList.length; i++) {
    console.log((i + 1) + ".", ingredientsList[i]);
}