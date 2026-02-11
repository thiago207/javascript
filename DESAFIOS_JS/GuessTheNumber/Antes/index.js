// "inputBox" palpite 
// "attempts" numero de tentativas
// "guesses" seus palpites
// "newGameButton" novo jogo
// id="textOutput" Seu palpite

let computerNumber;
let tentativas = 0;

let userNumbers = [];
let userNUmber = 0;

let maxGuesses = 10

function init(){
    computerNumber = Math.floor(Math.random() * 100) + 1;
    console.log(computerNumber)
}

function compareNumbers(){

    userNUmber = Number(document.getElementById("inputBox").value)

    if (userNUmber < 0 || userNUmber > 100 || Number.isNaN(userNUmber)) {
        document.getElementById('textOutput').innerHTML =
            'Número inválido! Digite um valor entre 0 e 100.';
        return; 
    }
    userNumbers.push(' '  + userNUmber)

    tentativas++
    document.getElementById("guesses").innerHTML = userNumbers 
    document.getElementById("attempts").innerHTML = tentativas


    if (tentativas > maxGuesses) {
    document.getElementById("textOutput").innerHTML =
        "Você perdeu! O número era: " + computerNumber;

    document.getElementById("inputBox").setAttribute("readonly", true);
    return; // ⛔ PARA A FUNÇÃO AQUI
}


    

    if (userNUmber < computerNumber) {
        document.getElementById("textOutput").innerHTML = "SEU NUMERO É MENOR";
        document.getElementById("inputBox").value = ''
    } 
    else if (userNUmber > computerNumber) {
        document.getElementById("textOutput").innerHTML = "SEU NUMERO É MAIOR";
        document.getElementById("inputBox").value = ''
    } 
    else {
        document.getElementById("textOutput").innerHTML =
            `ACERTOU!! \n em ${tentativas} tentativas 🎉`;
        document.getElementById("inputBox").setAttribute("readonly", true);
    }

}

function newGame(){
    window.location.reload()
}
