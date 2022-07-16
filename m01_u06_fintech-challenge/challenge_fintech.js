/* importação para o uso do prompt no Node.js */
const prompt = require("prompt-sync")();

let account = [{ id: 1, name: "Danilo Batista", balance: 1500 }, { id: 2, name: "Luis Mauricio", balance: 1200 }];

const STATEMENT = [];

let formattedLine = "\n-------------------------------------------------------------------------------------\n";
const ERRORS_LIST = [
    formattedLine + "  *** Opção inválida! Tente novamente! ***" + formattedLine,
    formattedLine + "  *** Conta inexistente! ***" + formattedLine,
];

/* Transações | Funcionalidades disponíveis */

/** Selecionar Contas */
function selectAccount() {
    console.log(formattedLine);
    console.log("\t• Insira o número da sua conta: \n");

    let activeAccount = parseInt(prompt("\tConta escolhida: "));

    for (let i = 0; i < account.length; i++) {
        if (activeAccount === account[i].id) {
            activeAccount = account[i];
        } else {
            console.log(ERRORS_LIST[1]);
        }
    }

    return activeAccount;
}

// console.log(selecionarContas());