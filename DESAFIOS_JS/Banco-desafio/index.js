const contas = [];
let id_contas = 1;

function criarConta(){

    const nome_user = document.getElementById("nomeConta").value
    const saldo_inicial = Number(document.getElementById("saldoInicial").value)

     if (!nome_user || saldo_inicial < 0) {
        alert("Dados inválidos");
        return;
    }

    const novaConta = {
        id: id_contas++,
        nome: nome_user,
        saldo: saldo_inicial
    }

    contas.push(novaConta)

    

    exibirContas()
}

document.getElementById("btnCriarConta").addEventListener("click", criarConta);


function exibirContas() {
  const div = document.getElementById("listaContas");
  div.innerHTML = "";

  contas.forEach(conta => {
    div.innerHTML += `
      <div class="conta">
        <p>ID: ${conta.id}</p>
        <p>Nome: ${conta.nome}</p>
        <p>Saldo: R$ ${conta.saldo.toFixed(2)}</p>
      </div>
    `;
  });
}


function sacar(){
    //id="saqueId" 
    // id="saqueValor

    const saqueid = Number(document.getElementById("saqueId").value)
    const saqueValor = Number(document.getElementById("saqueValor").value)

    for (let i = 0; i < contas.length; i++){
        if (saqueid == contas[i].id){
            if(saqueValor <= contas[i].saldo){
                 contas[i].saldo -= saqueValor
            }
        }
    }
    exibirContas()

}
document
  .getElementById("btnSacar")
  .addEventListener("click", sacar);


function depositar(){
    //id="saqueId" 
    // id="saqueValor

    const depositoid = Number(document.getElementById("depositoId").value)
    const depositoValor = Number(document.getElementById("depositoValor").value)

    for (let i = 0; i < contas.length; i++){
        if (depositoid == contas[i].id){
            contas[i].saldo += depositoValor
        }
    }
    exibirContas()
}
document
  .getElementById("btnDepositar")
  .addEventListener("click", depositar);

  
function transferir() {
    const origemid = Number(document.getElementById("origemId").value);
    const destinoid = Number(document.getElementById("destinoId").value);
    const valorTransferencia = Number(document.getElementById("transferenciaValor").value);

    let contaOrigem = null;
    let contaDestino = null;

    for (let i = 0; i < contas.length; i++) {
        if (contas[i].id === origemid) {
        contaOrigem = contas[i]; // OBJETO
        }
    }

    for (let i = 0; i < contas.length; i++) {
        if (contas[i].id === destinoid) {
        contaDestino = contas[i]; // OBJETO
        }
    }

    if (!contaOrigem || !contaDestino) {
        alert("Conta não encontrada");
        return;
    }

    if (valorTransferencia <= 0) {
        alert("Valor inválido");
        return;
    }

    if (contaOrigem.saldo < valorTransferencia) {
        alert("Saldo insuficiente");
        return;
    }

    contaOrigem.saldo -= valorTransferencia;
    contaDestino.saldo += valorTransferencia;

    exibirContas();
}

document
  .getElementById("btnTransferir")
  .addEventListener("click", transferir);