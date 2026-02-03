let num1 = 2
let num = 3
let soma = num1 + num

console.log(`resultado: ${soma}`)

// +  soma
// -  subtração
// *  multiplicação   
// /  divisão
// %  resto da divisão (módulo)
// ** exponenciação (potência)

// ++ incremento (soma 1)
// -- decremento (subtrai 1)

// += soma e atribui
// -= subtrai e atribui
// *= multiplica e atribui
// /= divide e atribui
// %= resto da divisão e atribui


// ==  igual (compara valor, ignora o tipo)
// === igual estrito (compara valor e tipo)
// !=  diferente
// !== diferente estrito (valor e tipo diferentes)

// >   maior que
// <   menor que
// >=  maior ou igual
// <=  menor ou igual


// ?: operador ternário (condição ? valor_se_verdadeiro : valor_se_falso) =Ex: idade >= 18 ? "maior de idade" : "menor de idade"

let driver = 80
let speed = driver > 80 ? "Multado" : "Dentro do limite"
console.log(speed)

// &&  E lógico (true se ambos forem verdadeiros)
// ||  OU lógico (true se pelo menos um for verdadeiro)
// !   NÃO lógico (inverte o valor booleano)

idadeMinima = 17
let eleitor = {
    idade : 17,
    nacionalidade : "brasileira",
    titulo_eleitor : true
} 

let podeVotar = (eleitor.idade >= idadeMinima) && (eleitor.nacionalidade === "brasileira") && (eleitor.titulo_eleitor === true)
console.log(`Pode votar: ${podeVotar}`)


let corCliente = undefined
let corEstoque = "Black"
let corVendida = corCliente || corEstoque
console.log(`Cor vendida: ${corVendida}`)



driverSpeed = 150
maxSpeed = 110
if (driverSpeed > maxSpeed ) {
    console.log("Muito rapido!")
}
else if (driverSpeed > 40 && driverSpeed <= maxSpeed) {
    console.log("Dentro do limite")
}
else{
    console.log("Muito devagar!")
}



let airport = 'MCO'

switch (airport) {
    case 'MCO':
        console.log("Aeroporto de Orlando")
        break;
    case 'JFK':
        console.log("Aeroporto de Nova York")
        break;
    case 'LAX':
        console.log("Aeroporto de Los Angeles")
        break;
    default:
        console.log("Aeroporto desconhecido")
        break;
}


for (let i = 10; i <= 20; i++) {
    console.log(`Contagem no for: ${i}`)
}

i = 1
while (i <= 10) {
    console.log(`Contagem no while: ${i}`)
    i++
    if (i === 6) {
        console.log("Interrompendo o loop no 6")
        break
    }
}

const myCar = {
    make: 'BMW',
    model: 'M3',
    year: 2024
}
for (let i in myCar) {
    console.log(`${i}: ${myCar[i]}`)
}

const friends = ["Maria", "João", "Pedro", "Ana"]
for (let i of friends) {
    console.log(` Amigo: ${i} `)
}