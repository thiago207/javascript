

function celsius_p_fahrtenheit(C){
     return F = (9 * C / 5) + 32
}

document.getElementById("converter").onclick = function converter(){
    let temp_celsius = Number(document.getElementById("temp_celsius").value)
    let temp_convertida = 0;

    if (isNaN(temp_celsius)){
        alert("Digite um valor valido")
        return
        
    } 
    temp_convertida = celsius_p_fahrtenheit(temp_celsius);
    document.getElementById("temp_fahr").innerHTML = temp_convertida

}

let lista_ano_copas = []
for (let i = 1930; i <= 2022; i += 4){
    lista_ano_copas.push(" " + i )
}

document.getElementById("anos_copa").innerHTML = lista_ano_copas

document.getElementById("calcular").onclick = function resultado_aluno(){
    const nota1 = Number(document.getElementById("nota1").value)
    const nota2 = Number(document.getElementById("nota2").value)
    const n_faltas = Number(document.getElementById("n_faltas").value)

    if (isNaN(nota1) || isNaN(nota2) || isNaN(n_faltas)) 
    {
        alert("Digite os valores corretamente");
        return;
    }

    const presencas = 20 - n_faltas;
    const presencasMinimas = 20 * 0.7;
    let resultado_aluno;
    let media = (nota1 + nota2) / 2

    if (media >= 6.5 && presencas >= presencasMinimas){
        resultado_aluno = "Parabens! Aprovado" 
    } else{
        resultado_aluno = "Reprovado" 
    }

    document.getElementById("result").innerHTML = resultado_aluno


}



var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];


let total_vendas = 0;
const tbody = document.getElementById("vendas_cursos");
tbody.innerHTML = "";

for(let i=0; i< vendas_cursos.length; i++){

    if (vendas_cursos[i].reembolso === null){

        total_vendas += vendas_cursos[i].valor;

        tbody.innerHTML += `
            <tr>
                <td>${vendas_cursos[i].aluno}</td>
                <td>${vendas_cursos[i].data}</td>
                <td>R$ ${vendas_cursos[i].valor.toFixed(2)}</td>
            </tr>
        `;

    }

    document.getElementById("total_vendas").innerHTML =
    `R$ ${total_vendas.toFixed(2)}`;
}


