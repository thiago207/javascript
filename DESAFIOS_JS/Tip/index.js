function formatMoney(value) {
   value = Math.ceil(value * 100) / 100
   value = value.toFixed(2)
   return '$   ' + value
} 

function formatSplit(value) {
    if (value == 1){
        return value + '  person'
    } else {
        return value + '  people'
    }
}



function update(){
    let yourBill = Number(document.getElementById("yourBill").value)
    let selectTip = document.getElementById("tipInput").value
    let slip = document.getElementById("splitInput").value

    console.log(yourBill, selectTip, slip)

    let tip = yourBill * (selectTip / 100)
    let total = yourBill + tip
    let billEach = total / slip

    document.getElementById("tipPercent").innerHTML = selectTip + '%'
    document.getElementById("splitValue").innerHTML = formatSplit(slip)

    document.getElementById("tipValue").innerHTML = formatMoney(tip)
    document.getElementById("totalWithTip").innerHTML =formatMoney(total)
    document.getElementById("billEach").innerHTML =formatMoney(billEach)
}