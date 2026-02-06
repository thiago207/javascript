// function declaration

function movie(){
    console.log("FILME")
}

movie()

// funcition expression

const car = function(){
    console.log('BMW')
}

car()

function price(){
    let total = 0
    for (let value of arguments){
        total += value
    }
    return total
}

console.log(price(1, 30, 30))

