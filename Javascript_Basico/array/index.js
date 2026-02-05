const num =  [10, 20, 30, 40, 50];

// Adiciona um elemento no final do array
num.push(60);
console.log(num); // [10, 20, 30, 40, 50, 60]

// Adiciona um elemento no comeco do array
num.unshift(0);
console.log(num); // [0, 10, 20, 30, 40, 50, 60]

num.splice(3, 0, 25); // Adiciona o elemento 25 na posição 3
//         ^ posição onde o elemento será adicionado
//            ^ número de elementos a serem removidos (0 para não remover nenhum)
//               ^ elemento a ser adicionado


// Remove o último elemento do array
//    num.pop();

// Remove o primeiro elemento do array
//    num.shift();

// Remove o elemento na posição 2
//    num.splice(2, 1);

console.log(num.indexOf(30)); // Retorna o índice do elemento 30

console.log(num.includes(30)); // Retorna true se o elemento 30 estiver no array

console.log(num);

const movies = [
    {id: 1, title: 'Inception' },
    {id: 2, title: 'Interstellar' },
    {id: 3, title: 'The Dark Knight' }
]

console.log(movies.find(function(movie){
    return movie.title === 'Inception'
}
));

console.log(movies.find(movie => movie.title === 'Inception'));

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
}


let numeros = [1, 2, 3, 4, 5];
let letras = ['a', 'b', 'c', 'd', 'e'];

all = numeros.concat(letras);
hall = all
hall = all.slice(4, 6);             

console.log(hall);

let clientes = [ 'João', 'Maria', 'Pedro', 'Ana' ];

let clientJoins = clientes.join(', ');

console.log(clientJoins); // "João, Maria, Pedro, Ana"