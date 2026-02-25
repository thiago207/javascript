/* =====================================================
   LOCALSTORAGE — salvar, recuperar e remover dados
   Exemplo: salvar nome do usuário e manter sessão
   ===================================================== */

// localStorage.setItem("nome", "joao")
// localStorage.removeItem("nome")

document.getElementById("enviar-nome").onclick = function () {
    let nome = document.getElementById("nome-usuario").value;
    localStorage.setItem("nome", nome);

    // Alterna áreas da interface
    document.getElementById("name-field").style.display = "none";
    document.getElementById("welcome-area").style.display = "initial";

    // Usa dado salvo no localStorage
    document.getElementById("welcome-text").innerHTML =
        "Ola " + localStorage.nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML =
        "Não é " + localStorage.nome + "?";
};

// Verificação automática de sessão salva
if (localStorage.nome) {
    document.getElementById("name-field").style.display = "none";
    document.getElementById("welcome-area").style.display = "initial";
    document.getElementById("welcome-text").innerHTML =
        "Ola " + localStorage.nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML =
        "Não é " + localStorage.nome + "?";
}

// Limpa dados e reseta interface
document.getElementById("not-me").onclick = function () {
    localStorage.removeItem("nome");

    document.getElementById("name-field").style.display = "initial";
    document.getElementById("welcome-area").style.display = "none";
};



/* =====================================================
   DATE — datas, horas e cálculos com tempo
   ===================================================== */

var data_hoje = new Date();
console.log(data_hoje);

// Cálculo simples de idade por ano
var data_nascimento = "2007-07-07";
var ano_nascimento = new Date(data_nascimento).getFullYear();
var ano_atual = new Date().getFullYear();

console.log(ano_atual - ano_nascimento);

// Diferença de dias entre duas datas
let data_envio = new Date("2018-03-20").getTime();
let data_entrega = new Date("2018-04-06").getTime();

let tempo_entrega =
    (data_entrega / 86400000) - (data_envio / 86400000);

document.getElementById("dias_entrega").innerHTML = tempo_entrega;



/* =====================================================
   SETTIMEOUT — execução com atraso
   ===================================================== */

console.log("ola");

window.setTimeout(function () {
    console.log("ola 2");
}, 3000);

// Exemplo prático: loader temporário
document.getElementById("mostrar-loader").onclick = function () {
    document.getElementById("spinner-loader").style.display = "initial";

    window.setTimeout(function () {
        document.getElementById("spinner-loader").style.display = "none";
    }, 5000);
};



/* =====================================================
   SETINTERVAL — execução repetida
   ===================================================== */

var count = 0;

let inter = window.setInterval(function () {
    console.log(count);
    count++;

    // Para a execução após condição
    if (count > 10) {
        window.clearInterval(inter);
    }
}, 1000);



/* =====================================================
   RELÓGIO DIGITAL
   ===================================================== */

/*
   Versão manual (didática)
   Controle feito "na mão"
   NÃO ideal para produção
*/

/*
let horas = 0;
let minutos = 0;
let segundos = 0;

window.setInterval(function () {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    if (horas === 24) {
        horas = 0;
    }

    document.getElementById("relogio").innerHTML =
        `${String(horas).padStart(2,'0')}:${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`;
}, 1000);
*/


/*
   Versão correta / profissional
   Usa Date para manter horário real
*/

window.setInterval(function () {
    let relogio = new Date();

    let horas = String(relogio.getHours()).padStart(2, '0');
    let minutos = String(relogio.getMinutes()).padStart(2, '0');
    let segundos = String(relogio.getSeconds()).padStart(2, '0');

    document.getElementById("relogio").innerHTML =
        `${horas}:${minutos}:${segundos}`;
}, 1000);



/* =====================================================
   FORMULÁRIOS — Select, Radio Buttons e Checkboxes
   Manipulação de opções selecionadas pelo usuário
   ===================================================== */


/* -----------------------------
   SELECT BOX
   Captura a opção escolhida em um <select>
------------------------------ */

document.getElementById("mostrar_opcao").onclick = function () {
    let campo_select = document.getElementById("options");
    let indice_selecionado = campo_select.selectedIndex;
    let valor_selecionado = campo_select[indice_selecionado].text;

    document.getElementById("opcao_selecionada").innerHTML =
        valor_selecionado;
};



/* -----------------------------
   RADIO BUTTONS
   Identifica qual opção única foi marcada
------------------------------ */

document.getElementById("mostrar_radio").onclick = function () {
    var radio = document.getElementsByName("genero");
    var radio_selected = "";

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio_selected = radio[i].value;
            break;
        }
    }

    document.getElementById("radio_selecionado").innerHTML =
        radio_selected;
};



/* -----------------------------
   CHECKBOXES
   Lista múltiplas opções marcadas
------------------------------ */

document.getElementById("mostrar_check").onclick = function () {
    var check = document.getElementsByName("interesse");
    var lista = document.getElementById("check_selecionado");

    // Limpa antes de montar novamente
    lista.innerHTML = "";

    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            lista.innerHTML += "<li>" + check[i].value + "</li>";
        }
    }
};