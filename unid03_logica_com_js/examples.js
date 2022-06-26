
/**
 * Tipos de variáveis
 */

// 1) Strings
var nomePessoa = "Danilo";
var sobrenome = "Batista";
var apresentacao = "Meu nome é Danilo Batista"

// 2) Number
var dataNascimento = 1984;
var idade = 37;

// 3) Float
var altura = 1.92
var preco = 108.56

// 4) Boolean
var luzApagada = false
var vacinasEmDia = true

// 5) Array
var listaDeCarros = ["Gol", "Fox", "Celta", "Onix"];
var listaDeCompras = ["Carne", "Legumes", "Frutas", "Leite"];
var numerosdaMega = [79, 85, 22, 45, 34, 12];

/**
 * Reatribuilção de valores em varáveis
 */
var serie = "Ms. Marvel";
console.log(serie);

serie = "Moon Knight";
console.log(serie);

/** 
 * Concatenação de variáveis
 */
var logradouro = "Rua Doutor Cardoso de Melo, 90";
var bairro = "Vila Olímpia";
console.log(logradouro + " - " + bairro);

var enderecoCompleto = logradouro + " - " + bairro;
console.log(enderecoCompleto);

/**
 * Operadores aritméticos
 */
var a = 2;
var b = 1;
console.log("\nValor de A: " + a);
console.log("Valor de B: " + b);
console.log(a + " + " + b + " = " + (a + b) + " | Soma.");
console.log(a + " - " + b + " = " + (a - b) + " | Subtração.");
console.log(a + " / " + b + " = " + (a / b) + " | Divisão.");
console.log(a + " * " + b + " = " + (a * b) + " | Multiplicação.");
console.log(a + " % " + b + " = " + (a % b) + " | Módulo.");
console.log(a++ + " | Incremento.");
console.log(a-- + " | Decremento.");

/**
 * Operadores relacionais
 */
a = 20;
b = 10;
console.log("\nValor de A: " + a);
console.log("Valor de B: " + b);
console.log("Valor de A > B?");
console.log(a > b);
console.log("Valor de A < B?");
console.log(a < b);
console.log("Valor de A >= B?");
console.log(a >= b);
console.log("Valor de A <= B?");
console.log(a <= b);

x = "1";
y = 1;
x == y;
console.log("\nValor de X: " + x);
console.log("Valor de Y: " + y);
console.log("Valor de X == Y?");
console.log(x == y);

console.log("Valor de X === Y?");
console.log(x === y);

/**
 * Operadores lógicos
 */
var dia = "domingo";
var tempo = "bom";

if (dia == "domingo" && tempo == "bom") {
    console.log("\nHoje é dia de ir ao parque!");
} else {
    console.log("\nHoje é um dia normal!");
}

var corIphone = "Preto";
if (corIphone == "Preto" || corIphone == "Prata") {
    console.log("\nVou fechar a compra!");
} else {
    console.log("\nNão quero mais este iPhone!");
}

var feriado = true;
if (!feriado) {
    console.log("\nEu tenho que trabalhar!");
} else {
    console.log("\nOba! Posso ficar em casa!");
}

/**
 * Precedência de operadores
 */
console.log("\nPrecedência de Operadores");
console.log(3 + 4 + 5);
console.log(8 * 2 - 1);
console.log(8 * (2 - 1));