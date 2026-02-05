function calculadora(){
    let num1 = Number(document.getElementById("num-one").value);
    let num2 = Number(document.getElementById("num-two").value);
    let result = 0;

    if (document.getElementById("box1").checked) {
        result = num1 + num2;      
    }  else if (document.getElementById("box2").checked) {
        result = num1 - num2;      
    } else if (document.getElementById("box3").checked) {
        result = num1 * num2;      
    } else if (document.getElementById("box4").checked) {
        result = num1 / num2;      
    }  else if (document.getElementById("box5").checked) {
        if (num1 < 0) {
            document.getElementById("resultArea").innerHTML =
                "Não existe raiz de número negativo";
            return;
        }
        result = Math.sqrt(num1);
    }
    
    document.getElementById("resultArea").innerHTML = "O resultado é: " + String(result);
    return;
}

function controlarInputs() {
    let raizMarcada = document.getElementById("box5").checked;
    let num2 = document.getElementById("num-two");

    if (raizMarcada) {
        num2.value = "";
        num2.style.display = "none";
        num2.disabled = true;
    } else {
        num2.disabled = false;
    }
}
