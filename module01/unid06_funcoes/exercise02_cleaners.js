"use strict";

/**
 * Uma lavanderia lava roupa pelo peso. Ela cobra de seus clientes R$ 5,00 por
cada quilo de roupa suja. Atualmente, eles usam um caderno e uma
calculadora para fazer o cálculo de quanto cada cliente precisa pagar.
Nosso desafio é automatizar esse cálculo, vamos lá?
Crie uma função que recebe como parâmetro o peso de roupa suja e deve
retornar o valor a ser cobrado ao cliente.
 */

function totalPrice(weight) {
    let price = weight * 5;
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

let weight = parseFloat(prompt("Insira a quantidade de roupa: "));
let total = totalPrice(weight);

console.log("O preço total é de " + total + "."); 