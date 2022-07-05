/**
 * Faça uma aplicação que leia 10 números do usuário e some somente os
valores pares. Ao final, exiba os valores digitados, a relação dos números
pares e o valor da soma desses pares.
 * 
 * Agora, melhore o código da questão anterior e faça um programa que receba
10 números, calcule e imprima a soma dos números pares e a soma dos
números primos.
 */


// PARES: numero % 2 == 0
// PRIMOS: dois dividendos

let numero, somaPares, somaPrimos;

contador = 0;
somaPares = 0;
somaPrimos = 0;
totalDivisoes = 0;

while (contador < 10) {
    numero = parseInt(prompt("Insira o " + (contador + 1) + "º número: "));

    if (numero % 2 == 0) {
        totalDivisoes++;
        if (totalDivisoes == 2) {
            somaPrimos = somaPrimos + numero;
            console.log("O número " + numero + " é primo!");
            console.log(somaPrimos);
        }
    }

    contador++;
}
console.log("A soma dos primos é " + somaPrimos);


/*
while(contador < 10){
    numero = parseInt(prompt("Insira o " + (contador+1) + "º número: "));
    
    if(numero % 2 == 0){
        console.log("O número " + numero + " é par!");
        somaPares = somaPares + numero;
    } else {
        console.log(numero);
    }
    contador++;
}
console.log("A soma dos pares é " + somaPares);
*/
