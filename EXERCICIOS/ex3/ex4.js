document.getElementById("estados").onchange = function(){
    let estado = document.getElementById("estados").value
    localStorage.setItem("estado", estado)
    console.log(localStorage.estado)
}
if (localStorage.estado){
    document.getElementById("estados").value = localStorage.estado
}

document.getElementById("confirmar_pedido").onclick = function (){
    let opcao =  document.getElementById("envios").value

    let data_pedido = new Date();
    let data_entrega = new Date();

    if(opcao == "normal"){
        data_entrega.setDate(data_entrega.getDate() + 18);

        data_pedido = data_pedido.toLocaleDateString("pt-BR");
        data_entrega = data_entrega.toLocaleDateString("pt-BR");

        document.getElementById('data_pedido').innerHTML = data_pedido
        document.getElementById('data_entrega').innerHTML = data_entrega
    }
    else {
        data_entrega.setDate(data_entrega.getDate() + 12);

        data_pedido = data_pedido.toLocaleDateString("pt-BR");
        data_entrega = data_entrega.toLocaleDateString("pt-BR");

        document.getElementById('data_pedido').innerHTML = data_pedido
        document.getElementById('data_entrega').innerHTML = data_entrega
    }
}

let inicio = null;
let intervalo = null;

document.getElementById("comecar_parar").onclick = function () {

    if (intervalo) return;

    inicio = Date.now();

    intervalo = setInterval(function () {
        let agora = Date.now();
        let decorrido = agora - inicio;

        let ms = decorrido % 1000;
        let segundos = Math.floor(decorrido / 1000) % 60;
        let minutos = Math.floor(decorrido / 60000) % 60;
        let horas = Math.floor(decorrido / 3600000);

        document.getElementById("cronometro").textContent =
            String(horas).padStart(2, "0") + ":" +
            String(minutos).padStart(2, "0") + ":" +
            String(segundos).padStart(2, "0") + " " +
            String(ms).padStart(3, "0");

    }, 10);
};

document.getElementById("zerar").onclick = function () {
    clearInterval(intervalo);
    intervalo = null;
    inicio = null;
    document.getElementById("cronometro").textContent = "00:00:00 000";
};

var carros = [

        {
            'placa': 'AAA-0198',
            'categoria': '1',
        },

        {
            'placa': 'HBP-2837',
            'categoria': '2',
        },

        {
            'placa': 'PLQ-0928',
            'categoria': '4',
        },

        {
            'placa': 'KQE-2093',
            'categoria': '5',
        },

        {
            'placa': 'AMR-9087',
            'categoria': '5',
        },

        {
            'placa': 'BQE-8111',
            'categoria': '3',
        },

        {
            'placa': 'GXL-9001',
            'categoria': '2',
        },

        {
            'placa': 'KPM-7740',
            'categoria': '1',
        }

];

document.getElementById("categorias").onchange = function () {

    let categoria_selecionada = this.value;
    let faturamento_total = 0;

    for (let i = 0; i < carros.length; i++) {

        if (carros[i].categoria === categoria_selecionada) {

            switch (categoria_selecionada) {

                case '1':
                    faturamento_total += 11.22;
                    break;

                case '2':
                    faturamento_total += 22.45;
                    break;

                case '3':
                    faturamento_total += 16.88;
                    break;

                case '4':
                    faturamento_total += 33.65;
                    break;

                default:
                    console.log("Categoria não encontrada");
            }
        }
    }

    // Atualiza apenas UMA vez
    document.getElementById("faturamento_total").textContent =
        faturamento_total.toFixed(2).replace('.', ',');
};