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

function carLoan(loan, rate = 17, years = 5){
    return (loan * rate / 100 * years) + loan
}

console.log(carLoan(100000))