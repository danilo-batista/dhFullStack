"use strict";

/** Exemplo 1 
 * Um grupo de amigos resolveu que toda quarta-feira é dia de feijoada! E para lembrar a
todos desse momento festivo, resolveram criar um algoritmo que verifica em qual dia
da semana estamos. “Se hoje for quarta-feira”, significa que é dia de Feijoada!


let daysOfWeek = "quarta-feira";
if (daysOfWeek == "quarta-feira") {
    console.log("Hoje é dia de feijoada!");
}

*/

/** Exemplo 2:
 * Um Professor precisa automatizar os resultados dos alunos referente às avaliações
que foram realizadas no final do curso e pediu nossa ajuda para criar um algoritmo que
calcule a média de duas notas e informe se o aluno foi aprovado ou não!
    
 ** Exemplo 4: Desta vez, iremos criar uma Condicional utilizando o IF ELSE.

let nota1, nota2, mediaFinal;

nota1 = parseInt(prompt("Informe a nota 1: "));
nota2 = parseInt(prompt("Informe a nota 2: "));

mediaFinal = (nota1 + nota2) / 2;
console.log("A média final é " + mediaFinal + ".\n\n");

if (mediaFinal < 7) {
    console.log("O aluno foi reprovado!");
} else {
    console.log("O aluno está aprovado!");
}
 */


/** Exemplo 3
 * O Departamento de Trânsito da sua cidade procurou você para criar um algoritmo que
receba do usuário a sua idade e retorne como resposta a informação se o mesmo pode
ou não dirigir. Sabendo que a idade mínima para solicitar a carteira de motorista é 18
anos.

let age;

age = parseInt(prompt("Insira a sua idade: "));

if (age >= 18) {
    console.log("Você já pode dirigir!");
} else {
    console.log("Ops! Você ainda não pode dirigir!");
}

 */

/** Examplo 5
 * A Prefeitura da sua cidade ficou sabendo que você é programador e o procurou para
ajudá-los com um novo projeto! Eles pretendem instalar um semáforo no cruzamento
mais movimentado do seu bairro, mas precisam de algoritmo que faça os semáforos
funcionarem!

let trafficLight;

trafficLight = prompt("Insira a cor do semáforo: ");

if (trafficLight === "verde") {
    console.log("Pode seguir!");
} else if (trafficLight === "amarelo") {
    console.log("ATENÇÃO! O sinal vai fechar!");
} else if (trafficLight === "vermelho") {
    console.log("PARE! Espero o sinal abrir");
} else {
    console.log("Cor inválida! Digite 'vermelho', 'amarelo' ou 'verde'!");
}
 */

/** Examplo 6
 * Precisamos construir uma calculadora simples, que consiga efetuar as operações
básicas de soma, subtração, multiplicação ou divisão, de acordo com a escolha do
usuário. Para que a calculadora funcione, o usuário precisa obter os dois valores iniciais
e a operação desejada.

let firstNumber, secondNumber, operator, result;

firstNumber = parseInt(prompt("Insira o primeiro número: "));
secondNumber = parseInt(prompt("Insira o segundo número: "));
operator = prompt("Insira o sinal do operador: ");

if (secondNumber == 0 && operator == "/") {
    alert("Operação não permitida!");
    secondNumber = parseInt(prompt("Insira o segundo número: "));
    operator = prompt("Insira o sinal do operador: ");
}

if (operator == "+") {
    result = firstNumber + secondNumber;
    console.log("A soma de " + firstNumber + " " + operator + " " + secondNumber + " = " + result + ".");
} else if (operator == "-") {
    result = firstNumber - secondNumber;
    console.log("A subtração de " + firstNumber + " " + operator + " " + secondNumber + " = " + result + ".");
} else if (operator == "/") {
    result = firstNumber / secondNumber;
    console.log("A divisão de " + firstNumber + " " + operator + " " + secondNumber + " = " + result + ".");
} else if (operator == "*") {
    result = firstNumber * secondNumber;
    console.log("A multiplicação de " + firstNumber + " " + operator + " " + secondNumber + " = " + result + ".");
} else {
    console.log("Operação inválida! Digite +, -, * ou /!");
}
 */

/** Exemplo 7
 * Um restaurante da sua cidade comprou um painel digital para recepcionar seus clientes
e informar qual o prato do dia, de acordo com o dia da semana! Todavia, o painel não
veio programado e você foi contratado para criar um algoritmo que faça o painel
funcionar de acordo com as regras a seguir:
 * Na primeira linha deve ser exibido sempre o dia da semana;
 * Na segunda linha, deve ser exibido o prato principal do dia como segue:
■ Toda segunda-feira, o prato principal será “Macarronada”;
■ Toda terça-feira, o prato principal será “Carne de Panela”;
■ Toda quarta-feira, o prato principal será “Peixe à Moda”;
■ Toda quinta-feira, o prato principal será “Lasanha”;
■ Toda sexta-feira, o prato principal será “Escondidinho”;
■ Aos sábados e domingos será “Feijoada”;
 */
let dayOfWeek

dayOfWeek = prompt("Insira o dia da semana para encontrarmos o cardápio: ");

switch (dayOfWeek) {
    case "segunda-feira":
        console.log("\nMacarronada");
        break;
    case "terça-feira":
        console.log("\nCarne de Panela");
        break;
    case "quarta-feira":
        console.log("\nPeixe à Moda");
        break;
    case "quinta-feira":
        console.log("\nLasanha");
        break;
    case "sexta-feira":
        console.log("\nEscondidinho");
        break;
    default:
        console.log("\nFeijoada");
}