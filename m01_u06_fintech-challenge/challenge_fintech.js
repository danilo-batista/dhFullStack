const prompt = require("prompt-sync")()
// ConsultaSaldo
// Transferência
// Saque
// Deposito
// Histórico 
var saldo1 = 1500.00;
var saldo2 = 1200.00;
var historico = []

function consultaSaldo(saldo) {

    historico.push("\nconsulta  " + Date().toLocaleString("pt-BR"))
    return saldo;
}

function saque(saldoConta, saque) {
    historico.push("\nsaque  " + Date().toLocaleString("pt-BR"))
    if (saque <= 0) {
        console.log("Saque não permitido")
    } else {
        saldoConta = saldoConta - saque
    }
    return saldoConta
}
// regra saca do primerio parametro e deposita no segundo parametro o valor do 3º teceito
function transferencia(saldo, saldo2, valor) {
    saldo1 = saque(saldo, valor)
    saldo2 = deposito(saldo2, valor)
    historico.pop()
    historico.pop()
    historico.push("\ntrasferencia  " + Date().toLocaleString("pt-BR"))
}

function deposito(saldoConta, valor) {
    historico.push("\ndeposito  " + Date().toLocaleString("pt-BR"))

    if (valor > 0) {
        saldoConta = saldoConta + valor
    }
    else {
        console.log("Deposito não permitido valor inválido! ")
    }
    return saldoConta;
}

function historicoAcoes() {
    for (let index = 0; index < historico.length; index++) {
        console.log("__________")
        console.log('       ', historico[index].toUpperCase());
    }
}

while (true) {
    var seguir = parseInt(prompt("Deseja seguir no programa ? Digite 1 para seguir ou 0 para encerrar:  "))
    if (seguir == 1) {
        var opcao = parseInt(prompt("Digite uma das opções:\n1 para ver o saldo \n2 para realizar o saque \n3 para realizar um deposito \n4 para trasferencia \n5 para ver o histórico de ações realizadas "))
    } else if (seguir == 0) {
        return -1;
    } else {
        console.log("Opcao inválido tente novamente!")
    }
    switch (opcao) {
        case 1:
            var conta = parseInt(prompt("Digite qual conta deseja ver o saldo  1 para conta 1 e 2 para conta 2: "))
            if (conta == 1) {
                console.log("Conta_1 o saldo é: R$ " + consultaSaldo(saldo1))
            }
            if (conta == 2) {
                console.log("Conta_2 o saldo é: R$ " + consultaSaldo(saldo2))
            } else {
                console.log("Conta inexistente tente novamente")
            }
            break;

        case 2:
            var valor = parseInt(prompt("Digite o valor para saque: "))
            var conta = parseInt(prompt("Digite qual conta deseja fazero saque:\n  1 para saque na conta_1 e 2 para saque na conta_2: "))

            if (conta == 1) {
                saldo1 = saque(saldo1, valor)
                console.log("Saque na Conta_1 o saldo é: R$ " + consultaSaldo(saldo1))
            }
            else if (conta == 2) {
                saldo2 = saque(saldo2, valor)
                console.log("Saque na Conta_2 o saldo é: R$ " + consultaSaldo(saldo2))
            } else {
                console.log("Conta inexistente para saque tente novamente")
            }
            break;
        case 3:
            var valor = parseInt(prompt("Digite o valor para Deposito: "))
            var conta = parseInt(prompt("Digite qual conta deseja fazer deposito: \n1 para depositar na conta_1 e 2 para depositar na conta_2: "))
            if (conta == 1) {
                console.log("Saldo antes do depoisto " + saldo1 + " O novo saldo é: R$ " + deposito(saldo1, valor))
            }
            if (conta == 2) {
                console.log("Saldo antes do depoisto " + saldo2 + " O novo saldo é: R$ " + deposito(saldo2, valor))
            } else {
                console.log("Conta inexistente para deposito tente novamente")
            }
            break;

        case 4:
            var valor = parseInt(prompt("Digite o valor para trasferir: "))
            var conta = parseInt(prompt("Digite 1 para trasferir da conta_1 para a conta_2 ou digite 2 para a trasferir da conta_2 para a conta_1: "))
            if (conta == 1) {
                console.log("Saldo da conta_1 antes da trasferencia era R$ " + saldo1)
                transferencia(saldo1, saldo2, valor)
                console.log("O novo saldo é: R$ " + consultaSaldo(saldo1))
            }
            if (conta == 2) {
                console.log("Saldo da conta_1 antes da trasferencia era R$ " + saldo2)
                transferencia(saldo2, saldo1, valor)
                console.log("O novo saldo é: R$ " + consultaSaldo(saldo2))
            } else {
                console.log("Conta inexistente para trasferencia tente novamente")
            }
            break;
        case 5:
            historicoAcoes()
            break;

        default:
            console.log("Opção inválida")
            break;
    }
}