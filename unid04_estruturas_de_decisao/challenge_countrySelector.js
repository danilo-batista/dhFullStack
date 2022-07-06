"use strict";

/** Desafio de aula - Condicionais
 * 
 * 
 * 
1 - Africa
2 - America
3 - Asia
4 - Europa
5 - Oceania

Digite o número do continente e veja quais países existem nele!

OBS: Como nas aulas utilizamos o Replit, então este código não irá funcionar no
VSCODE (Replit e console do navegador estão ok).
 */

let continent, countryList;

console.log("\n************** Planejamento de Viagem **************\n");

console.log("\tEscolha 1 dos 6 pacotes existentes pelo\n\tnúmero para conhecer os países disponíveis.\n");

console.log("\t1. África\n\t2. América\n\t3. Ásia\n\t4. Europa\n\t5. Oceania\n");

continent = parseInt(prompt("\tPacote escolhido: "));

switch (continent) {
    case 1:
        console.log("\n\t*** Parabéns! Você selecionou a África! ***");
        countryList = "\tAngola, África do Sul, Moçambique,\n\t\tEgito, Cabo Verde e Etiópia.";
        break;
    case 2:
        console.log("\n\t*** Parabéns! Você selecionou a América! ***");
        countryList = "\tBrasil, Canadá, México, Barbados,\n\t\tCosta Rica e Estados Unidos.";
        break;
    case 3:
        console.log("\n\t*** Parabéns! Você selecionou a Ásia! ***");
        countryList = "\tJapão, China, Índia, Iraque,\n\t\tPaquistão e Israel.";
        break;
    case 4:
        console.log("\n\t*** Parabéns! Você selecionou a Europa! ***");
        countryList = "\tPortugal, Espanha, França, Bélgica,\n\t\tInglaterra e Itália.";
        break;
    case 5:
        console.log("\n\t*** Parabéns! Você selecionou a Oceania! ***");
        countryList = "\tAustrália, Nova Zelândia, Samoa, Tonga,\n\t\tIlhas Salomão e Fiji.";
        break;
    default:
        countryList = "\t!!! Ops, opção inválida! 404. !!!\n\n\t\t*********  Os pinguins  *********\n\t\t****  estarão te esperando  *****\n\t\t********  na Antártida!  ********";
}

console.log("\n\tNo seu pacote estão incluídos estes países:\n\n\t " + countryList + "\n\n\t-------- Tenha uma excelente viagem! -------");

console.log("\n****************************************************\n");