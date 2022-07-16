"use strict";

/** Operadores
 * Manipular o valor das variáveis, realizar operações e comparar valores.
 * 
 * Tipos:
 * - Atribuição: =
 * 
 * - Aritméticos: + - / * ++ -- %
 *      . Sempre retornarão o resultado numérico da operação
 * 
 * - Comparação:
 *      ==(igualdade) !=(diferença)
 *      ===(igualdade restrita) !==(diferença restrita)
 *      > >= < <=
 *      . Sempre escrever o símbolo de maior/menor antes do igual)
 *      . Sempre retornarão um booleano, seja true ou false
 * 
 * - Lógicos:
 *      AND (&&) OR (||) NOT(!)
 *      . Sempre retornarão um booleano, seja true ou false
 * 
 * - Concatenação (strings)
 *      variavel + variavel 
 * 
 * Precedência (do mais alto para o mais fraco):
 * 
 * 1) Agrupamento
 * 2) Incremento pós-fixado (...++) | Decremento pós-fixado (...--)
 * 3) NÃO lógico | Incremento pré-fixado (++...) | Decremento pré-fixado (--...)
 * 4) Exponenciação (**)
 * 5) Multiplicação (*) | Divisão (/) | Resto (%)
 * 6) Adição (+) | Subtração (-)
 * 7) Menor que (<) | Menor ou igual a (<=) | Maior que (>) | Maior ou igual a (>=)
 * 8) Igualdade (==) | Desigualdade (!=) | Igualdade estrita (===) | Desigualdade estrita (!==)
 * 9) E lógico (&&)
 * 10) OU lógico (||)
 * 11) Condicional (...?...:...)
 * 12) Atribuição (= += -= *= /= %= &= ^= |=)
 * 13) Vírgula / sequência (...,...)
 * Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 
 * 
 */

/* Atribuição */
let paisDeNascimento = "Brasil";
console.log(paisDeNascimento);

/* Aritméticos */
let numero = 10;

console.log("adicao ", 4 + 2);
console.log("subtracao ", 4 - 2);
console.log("multiplicacao ", 4 * 2);
console.log("divisao ", 4 / 2);
console.log("modulo ", 4 % 2);
console.log("incremento ", ++numero);
console.log("decremento ", --numero);

/* Comparação */
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");
console.log(5 > 3);
console.log(5 >= 54);
console.log(4 < 5);
console.log(500 <= 54);

/* Lógicos */
let dia = "domingo";
let clima = "ensolarado";
console.log(dia == "domingo" && clima == "ensolarado");
console.log(8 >= 15 || 8 != 3);
console.log(!5 > 3);

/* Concatenação */
let primeiroNome = "Joana"
let sobrenome = "d'Arc"
console.log(primeiroNome + " " + sobrenome);
console.log("1" + 1);