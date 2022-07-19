/* importação para o uso do prompt no Node.js */
const prompt = require("prompt-sync")();

let accounts = [{ id: 1, name: "Danilo Batista", balance: 1500 }, { id: 2, name: "Luis Mauricio", balance: 1200 }];
let account = { id: 0, name: "", balance: 0 };
let mainAccount = { id: 0, name: "", balance: 0 };
let accountDestination = { id: 0, name: "", balance: 0 };

const STATEMENT = [];

let formattedLine = "\n-------------------------------------------------------------------------------------\n";
const ERRORS_LIST = [
    formattedLine + "  *** Opção inválida! Tente novamente! ***" + formattedLine,
    formattedLine + "  *** Conta inexistente! ***" + formattedLine,
    formattedLine + "  *** Saque não permitido! ***" + formattedLine,
    formattedLine + "  *** Depósito não permitido! ***" + formattedLine,
    formattedLine + "  *** Transferência não permitida! ***" + formattedLine
];

/* Transações | Funcionalidades disponíveis */

/** Selecionar Contas */
function selectAccount() {
    //console.log(formattedLine);
    console.log("\t• Insira o número da conta: \n");

    let accountId = parseInt(prompt("\tConta escolhida: "));

    for (let i = 0; i < accounts.length; i++) {
        if (accountId === accounts[i].id) {
            account.id = accounts[i].id;
            account.name = accounts[i].name;
            account.balance = accounts[i].balance;
        };
    };

    if (!accountId) {
        console.log(ERRORS_LIST[1]);
    } else {
        return account;
    };
}

/** Consultar saldo */
function listBalance(balance) {
    mainAccount.balance = balance;
    return mainAccount;
}

/** Sacar dinheiro (valor) */
function withdraw(account, value) {
    let mainAccount = account;
    if (value <= 0) {
        console.log(ERRORS_LIST[2]);
    } else {
        mainAccount.balance = mainAccount.balance - value;
        return mainAccount;
    }
}

/** Depositar dinheiro (valor) */
function deposit(account, value) {
    if (value <= 0) {
        console.log(ERRORS_LIST[3]);
    } else {
        account.balance = account.balance + value;
        return account;
    };
}

/** Transferir dinheiro (conta, contaDestino, valor) */
function transfer(accountDestinationId, value) {
    withdraw(account, value);

    for (let i = 0; i < accounts.length; i++) {
        if (accountDestinationId === accounts[i].id) {
            accountDestination.id = accounts[i].id;
            accountDestination.name = accounts[i].name;
            accountDestination.balance = accounts[i].balance;
        };
    };

    if (!accountDestinationId) {
        console.log(ERRORS_LIST[1]);
    } else {
        deposit(accountDestination, value);
        console.log("\n\t>>> Transferência realizada com sucesso!\n");
        return accountDestination;
    };
}

/** Extrato das ações realizadas */
function listStatements() {
    console.log("\n\t-------------------------------------------------------------------------\n");
    for (let i = 0; i < STATEMENT.length; i++) {
        console.log("\t" + (i + 1) + ") " + STATEMENT[i].toUpperCase());
    }
    console.log("\n\t-------------------------------------------------------------------------\n");
}

function logoff() {
    console.log("\n------------------- APLICATIVO FINALIZADO COM SUCESSO! ------------------------\n");
    return -1;
}
/** Start */
console.clear();
console.log("\n------------------------ Bem-Vindo ao Digital Bank ----------------------------\n");
console.log("\n\tEscolha a sua opção para iniciar: [9] Menu | [0] Sair\n");

let softwareStart = parseInt(prompt("\t\tOpção: "));
if (softwareStart != 0) {
    account = selectAccount();
} else {
    return logoff();
};

while (true) {
    let options;

    if (softwareStart == 9) {
        console.log("\n\tOperações bancárias:\n\n\t[1] Saldo\n\t[2] Saque\n\t[3] Depósito\n\t[4] Transferência\n\t[5] Histórico\n");
        options = parseInt(prompt("\tOperação escolhida: "));

        switch (options) {
            case 1: //consultarSaldo
                listBalance(account.balance);

                STATEMENT.push("Consulta | " + account.balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) + " | " + new Date().toLocaleString("pt-BR"));
                console.log("\n\t>>> TITULAR: " + account.name + " | SALDO: " + account.balance + "\n")
                break;
            case 2: //sacarDinheiro
                let amountToBeWithdrawn = parseFloat(prompt("\t• Insira o valor que deseja sacar: "));

                withdraw(account, amountToBeWithdrawn);
                STATEMENT.push("Saque | " + account.balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) + " | " + new Date().toLocaleString("pt-BR"));

                console.log("\n\t>>> TITULAR: " + account.name + " | SALDO: " + account.balance + "\n")
                break;
            case 3: //depositarDinheiro
                let amountToBeDeposited = parseFloat(prompt("\t• Insira o valor que deseja depositar: "));

                deposit(account, amountToBeDeposited);
                STATEMENT.push("Depósito | " + account.balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) + " | " + new Date().toLocaleString("pt-BR"));

                console.log("\n\t>>> TITULAR: " + account.name + " | SALDO: " + account.balance + "\n")
                break;
            case 4: //transferirDinheiro
                let amountToBeTransferred = parseFloat(prompt("\t• Insira o valor que deseja transferir: "));
                let accountDestinationId = parseInt(prompt("\tConta escolhida: "));

                let accountDestination = transfer(accountDestinationId, amountToBeTransferred);

                STATEMENT.push("Transferência:\n\t- Valor transferido da conta "
                    + account.id
                    + " para a conta "
                    + accountDestination.id
                    + " foi de "
                    + amountToBeTransferred.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                    + ".\n\t  "
                    + new Date().toLocaleString("pt-BR")
                );
                break;
            case 5: //extrato
                listStatements();
                break;
            default:
                console.log(ERRORS_LIST[4]);
        }
    } else if (softwareStart === 0) {
        return logoff();
    } else {
        console.log("\n\t*** Opção inválida! Tente novamente! ***\n");
        console.log("-------------------------------------------------------------------------------------\n");
    }

    softwareStart = parseInt(prompt("\tDeseja continuar? [9] Menu | [0] Sair "));
}
