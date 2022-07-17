/* importação para o uso do prompt no Node.js */
const prompt = require("prompt-sync")();

let accounts = [{ id: 1, name: "Danilo Batista", balance: 1500 }, { id: 2, name: "Luis Mauricio", balance: 1200 }];
let account = { id: 0, name: "", balance: 0 };

const STATEMENT = [];

let formattedLine = "\n-------------------------------------------------------------------------------------\n";
const ERRORS_LIST = [
    formattedLine + "  *** Opção inválida! Tente novamente! ***" + formattedLine,
    formattedLine + "  *** Conta inexistente! ***" + formattedLine,
    formattedLine + "  *** Saque não permitido! ***" + formattedLine,
];

/* Transações | Funcionalidades disponíveis */

/** Selecionar Contas */
function selectAccount() {
    console.log(formattedLine);
    console.log("\t• Insira o número da sua conta: \n");

    let accountId = parseInt(prompt("\tConta escolhida: "));

    for (let i = 0; i < accounts.length; i++) {
        if (accountId === accounts[i].id) {
            account.id = accounts[i].id;
            account.name = accounts[i].name;
            account.balance = accounts[i].balance;
            return account;
        } else {
            console.log(ERRORS_LIST[1]);
        }
    }
}

/** Consultar saldo */
function listBalance(balance) {
    account.balance = balance;
    STATEMENT.push("  Consulta | " + new Date().toLocaleString("pt-BR"));

    return account.balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

/** Sacar dinheiro (conta, valor) */
function withdraw(value) {
    if (value > 0) {
        account.balance = account.balance - value;
    } else {
        console.log(ERRORS_LIST[2]);
    }

    STATEMENT.push("  Saque | " + new Date().toLocaleString("pt-BR"));
    return account.balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

/** Build tests*/
let activeAccount = selectAccount();

console.log(activeAccount.id);
console.log(activeAccount.name);
console.log(activeAccount.balance);

console.log(listBalance(activeAccount.balance));
let value = parseFloat(prompt("Valor a sacar: "));
console.log(activeAccount.balance);
console.log(withdraw(value));