const prompt = require("prompt-sync")()

/** Challenge | Aula 6
  * > Digital House FS
  * > Autores: Nome1, Nome2, Nome3, Nome4, Nome5, Nome6
  **/

let saldo1 = 1500.00;
let saldo2 = 1200.00;
const historico = [];

/* Consultar saldo */
function consultarSaldo(saldo) {
    historico.push("  Consulta | " + Date().toLocaleString("pt-BR"));
    return saldo.toLocaleString("pt-Br");
}

/* Sacar dinheiro */
function sacarDinheiro(saldoConta, valorASerSacado) {
    historico.push("  Saque | " + Date().toLocaleString("pt-BR"));
    if (valorASerSacado <= 0) {
        console.log("\n\tSaque não permitido!\n");
    } else {
        saldoConta = saldoConta - valorASerSacado;
    }
    return saldoConta;
}

/* Depositar dinheiro */
function depositarDinheiro(saldoConta, valorASerDepositado) {
    historico.push("  Depósito | " + Date().toLocaleString("pt-BR"));

    if (valorASerDepositado > 0) {
        saldoConta = saldoConta + valorASerDepositado;
    } else {
        console.log("\n\tDepósito não permitido! Valor inválido!\n");
    }
    return saldoConta;
}

/* Transferir dinheiro (sacar da conta A e depositar na conta B) */
function transferirDinheiro(saldoAtual, saldoDestino, valor) {
    saldo1 = sacarDinheiro(saldoAtual, valor);
    saldo2 = depositarDinheiro(saldoDestino, valor);
    historico.pop(historico.pop());
    historico.push("  Transferência | " + Date().toLocaleString("pt-BR"));
}

/* Listagem do histórico de ações realizadas */
function listarAcoes() {
    console.log("\n\t-------------------------------------------------------------------------\n");
    for (let index = 0; index < historico.length; index++) {
        console.log("\t" + historico[index].toUpperCase());
    }
    console.log("\n\t-------------------------------------------------------------------------\n");
}

/* Execução */
console.log("\n------------------------ Bem-Vindo ao Digital Bank ----------------------------\n");
console.log("\n\tEscolha a sua opção para iniciar: [1] Menu | [0] Sair\n");

let continuarExecucao = parseInt(prompt("\t\tOpção: "));

// loop que deixa o aplicativo voltando para o menu inicial
while (true) {
    let menuOpcoes;

    // menu de opções
    if (continuarExecucao == 1) {
        console.log("\n\tOperações bancárias:\n\n\t[1] Saldo\n\t[2] Saque\n\t[3] Depósito\n\t[4] Transferência\n\t[5] Histórico\n");
        menuOpcoes = parseInt(prompt("\tOperação escolhida: "));

        switch (menuOpcoes) {
            case 1: //consultarSaldo
                console.log("\n\t-------------------------------------------------------------------------\n");
                console.log("\t• Selecione uma conta cadastrada para prosseguir: [1] Conta_1 | [2] Conta_2\n");

                var conta = parseInt(prompt("\tConta escolhida: "));

                if (conta == 1) {
                    console.log("\n\t>>> Conta_1 | SALDO: R$ " + consultarSaldo(saldo1) + "\n");
                    console.log("-------------------------------------------------------------------------------------\n")
                } else if (conta == 2) {
                    console.log("\n\t>>> Conta_2 | SALDO: R$ " + consultarSaldo(saldo2) + "\n");
                    console.log("-------------------------------------------------------------------------------------\n")
                } else {
                    console.log("\n\t*** Visualização do saldo cancelada. Conta inexistente! Escolha uma conta válida! ***\n");
                    console.log("-------------------------------------------------------------------------------------\n")
                }
                break;
            case 2: // sacar
                console.log("\n\t-------------------------------------------------------------------------\n");

                console.log("\t• Selecione uma conta cadastrada para prosseguir: [1] Conta_1 | [2] Conta_2\n");
                conta = parseInt(prompt("\tConta escolhida: "));
                console.log("");

                let valorASerSacado = parseInt(prompt("\t• Insira o valor que deseja sacar: R$ "));

                if (conta == 1) {
                    saldo1 = sacarDinheiro(saldo1, valorASerSacado);
                    console.log("\n\t>>> Conta_1 | SALDO: R$ " + consultarSaldo(saldo1) + "\n");
                    console.log("-------------------------------------------------------------------------------------\n")
                } else if (conta == 2) {
                    saldo2 = sacarDinheiro(saldo2, valorASerSacado);
                    console.log("\n\t>>> Conta_2 | SALDO: R$ " + consultarSaldo(saldo2) + "\n");
                    console.log("-------------------------------------------------------------------------------------\n")
                } else {
                    console.log("\n\t*** Saque cancelado. Conta inexistente! Escolha uma conta válida! ***\n");
                    console.log("-------------------------------------------------------------------------------------\n")
                }

                break;
            case 3: // depositar
                console.log("\n\t-------------------------------------------------------------------------\n");

                console.log("\t• Selecione uma conta cadastrada para prosseguir: [1] Conta_1 | [2] Conta_2\n");
                conta = parseInt(prompt("\tConta escolhida: "));
                console.log("");

                let valorASerDepositado = parseInt(prompt("\t• Insira o valor que deseja depositar: R$ "));

                if (conta == 1) {
                    console.log("\n\t>>> Conta_1 | SALDO ANTERIOR: R$ " + saldo1 + " | SALDO ATUAL: R$ " + depositarDinheiro(saldo1, valorASerDepositado) + "\n");
                    console.log("-------------------------------------------------------------------------------------\n")
                } else if (conta == 2) {
                    console.log("\n\t>>> Conta_2 | SALDO ANTERIOR: R$ " + saldo2 + " | SALDO ATUAL: R$ " + depositarDinheiro(saldo2, valorASerDepositado) + "\n");
                    console.log("-------------------------------------------------------------------------------------\n")
                } else {
                    console.log("\n\t*** Depósito cancelado. Conta inexistente! Escolha uma conta válida! ***\n");
                    console.log("-------------------------------------------------------------------------------------\n")
                }

                break;
            case 4: // transferir
                console.log("\n\t-------------------------------------------------------------------------\n");

                console.log("\t• Selecione uma conta cadastrada para prosseguir: [1] Conta_1 | [2] Conta_2\n");
                conta = parseInt(prompt("\tConta escolhida: "));
                console.log("");

                let valorASerTransferido = parseInt(prompt("\t• Insira o valor que deseja transferir: R$ "));

                if (conta == 1) {
                    console.log("\n\t>>> Conta_1 | SALDO ANTERIOR: R$ " + saldo1 + "\n");
                    transferirDinheiro(saldo1, saldo2, valorASerTransferido);
                    console.log("\t>>> Conta_1 | SALDO ATUAL: R$ " + consultarSaldo(saldo1) + "\n");
                    console.log("-------------------------------------------------------------------------------------\n");
                } else if (conta == 2) {
                    console.log("\n\t>>> Conta_2 | SALDO ANTERIOR: R$ " + saldo2 + "\n");
                    transferirDinheiro(saldo2, saldo1, valorASerTransferido);
                    console.log("\t>>> Conta_2 | SALDO ATUAL: R$ " + consultarSaldo(saldo2) + "\n");
                    console.log("-------------------------------------------------------------------------------------\n");
                } else {
                    console.log("\n\t*** Transferência cancelada. Conta inexistente! Escolha uma conta válida! ***\n");
                    console.log("-------------------------------------------------------------------------------------\n");
                }

                break;
            case 5: // listar
                listarAcoes();
                break;
            default:
                console.log("\n\t*** Transação não encontrada! Tente novamente! ***\n");
                console.log("-------------------------------------------------------------------------------------\n");
        }
    } else if (continuarExecucao == 0) {
        console.log("\n------------------- APLICATIVO FINALIZADO COM SUCESSO! ------------------------\n");
        return -1;
    } else {
        console.log("\n\t*** Opção inválida! Tente novamente! ***\n");
        console.log("-------------------------------------------------------------------------------------\n");
    }

    continuarExecucao = parseInt(prompt("\tDeseja continuar? [1] Menu | [0] Sair "));
}
