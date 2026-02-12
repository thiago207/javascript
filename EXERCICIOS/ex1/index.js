const num1 = Number(document.getElementById("num_1").innerText)
const num2 = Number(document.getElementById("num_2").innerText)

function soma(a, b) {
  return a + b
}


const resultado = soma(num1, num2)


document.getElementById("resultado").innerHTML = resultado


const caixa_azul = Number(document.getElementById("caixa_azul").innerText)


function celsius_p_fahrtenheit(C){
     return F = (9 * C / 5) + 32
}

document.getElementById("caixa_amarela").innerHTML = celsius_p_fahrtenheit(caixa_azul)


var grupos = [ 
  ["João", "Maria"],
  ["Pedro", "Joana", "André", "Júlio"],
  ["Carolina", "Helena", "Marcelo"]
]

var novoArray = grupos.slice(-2)

novoArray.push(["Mariana", "Felipe", "Carla"])

console.log(novoArray[2])


var curso = {
        titulo: "Aprenda programação em Python",
        'categoria': ['programação', 'tecnologia', 'python'],
        'n_aval_5_estrelas': 420,
        'n_aval_4_estrelas': 80,
        'n_aval_3_estrelas': 33,
        'n_aval_2_estrelas': 20,
        'n_aval_1_estrela': 4,
        qtdAvaliacoes() {
                        return( this.n_aval_1_estrela + 
                            this.n_aval_2_estrelas +
                            this.n_aval_3_estrelas +
                            this.n_aval_4_estrelas +
                            this.n_aval_5_estrelas)
        },
       media_avaliacao() {
                        const total = this.qtdAvaliacoes()
                        if (total === 0) return 0

                        const soma =
                            (1 * this.n_aval_1_estrela) +
                            (2 * this.n_aval_2_estrelas) +
                            (3 * this.n_aval_3_estrelas) +
                            (4 * this.n_aval_4_estrelas) +
                            (5 * this.n_aval_5_estrelas)

                        
                        return soma / total
                        }

    }

document.getElementById("categoria_principal").innerHTML = curso.categoria[0]


document.getElementById("total_aval").innerHTML = curso.qtdAvaliacoes()
document.getElementById("media_aval").innerHTML = curso.media_avaliacao().toFixed(2)

const user = {
    nome: "Thiago",
    sobrenome: "Brito",
    email: "teste@gmail.com"
}

function printar(user) {
    document.getElementById("tabela").innerHTML = `
        <div class="tableBox">
            <table border="1">
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>${user.nome}</td>
                    <td>${user.sobrenome}</td>
                    <td>${user.email}</td>
                </tr>
            </table>
        </div>
    `
}

printar(user)