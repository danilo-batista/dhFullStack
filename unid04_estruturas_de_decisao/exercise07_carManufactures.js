"use strict";

/**
 * Vamos desenvolver um sistema onde aparecerá alguns carros de determinado
fabricante à medida que o usuário o indica. Para isso crie uma variável
chamada fabricante que receberá um dado do tipo “string” e sem seguida
crie os seguintes casos:
Ford = imprima: “Ka, Fiesta, Fusion, Mustang”
Chevrolet = imprima: “Onix, Prisma, Tracker, Camaro”
Qualquer outro fabricante = imprima: “Fabricante não cadastrado no sistema”
 */
let carManufacturer;

carManufacturer = prompt("Insira a fabricante de veículos: ");

switch (carManufacturer) {
    case "Ford":
        console.log("Ka, Fiesta, Fusion e Mustang.");
        break;
    case "Chevrolet":
        console.log("Onix, Prisma, Tracker e Camaro.");
        break;
    default:
        console.log("Fabricante não cadastrada no sistema!");
}