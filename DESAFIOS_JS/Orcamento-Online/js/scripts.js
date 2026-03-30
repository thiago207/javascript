// Objeto para pegar os preços e as fotos das camisetas

var camisetas = {
    'branca': {
        
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 5.12,
                'foto': 'v-white.jpg' 
            },
            'com_estampa': {
                'preco_unit': 8.95,
                'foto': 'v-white-personalized.jpg' 
            }
        },
        
        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 4.99,
                'foto': 'normal-white.jpg' 
            },
            'com_estampa': {
                'preco_unit': 8.77,
                'foto': 'normal-white-personalized.jpg' 
            }
        }
    },
    
    'colorida': {
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 6.04,
                'foto': 'v-color.jpg' 
            },
            'com_estampa': {
                'preco_unit': 9.47,
                'foto': 'v-color-personalized.png' 
            }
        },
        
        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 5.35,
                'foto': 'normal-color.jpg' 
            },
            'com_estampa': {
                'preco_unit': 9.28,
                'foto': 'normal-color-personalized.jpg' 
            }
        }
    }
}


// parâmetros da pesquisa

var parametros_pesquisa = {
    "quantidade": 10,
    "cor": "colorida",
    "gola": "gola_v",
    "qualidade": "q150",
    "estampa": "com_estampa",
    "embalagem": "bulk"
}


// Regras adicionais para o orçamento:

// 1. Verificar se há em localStorage os parâmetros do último orçamento e se houver, carregar a página com eles.

// 2. A camisa de qualidade alta (190g/m2) deve acrescer o preço unitário em 12%.

// 3. A embalagem unitária tem um custo de 0.15 por unidade

// 4. Após cálculo do preço, há que se aplicar um desconto por quantidade, sendo: 
    // faixa 1: acima de 1.000 - Desconto de 15%
    // faixa 2: acima de 500 - Desconto de 10%
    // faixa 3: acima de 100 - Desconto de 5%



// Resolução do desafio:

$(function(){
    let foto;

    function salvar_localStorage() {
        var params = {
            quantidade: $("#quantidade").val(),
            cor: $("#cor .selected").attr("id"),
            gola: $("#gola .selected").attr("id"),
            qualidade: $("#qualidade .selected").attr("id"),
            estampa: $("#estampa").val(),
            embalagem: $("#embalagem").val()
        };
        localStorage.setItem("orcamento_camiseta", JSON.stringify(params));
    }

    function carregar_localStorage() {
        var salvo = localStorage.getItem("orcamento_camiseta");
        if (!salvo) return;

        var params = JSON.parse(salvo);

        // Inputs e selects
        $("#quantidade").val(params.quantidade);
        $("#estampa").val(params.estampa);
        $("#embalagem").val(params.embalagem);

        // Botões de grupo: remove "selected" de todos e aplica no correto
        $("#cor .option-button").removeClass("selected");
        $("#cor #" + params.cor).addClass("selected");

        $("#gola .option-button").removeClass("selected");
        $("#gola #" + params.gola).addClass("selected");

        $("#qualidade .option-button").removeClass("selected");
        $("#qualidade #" + params.qualidade).addClass("selected");
    }
    
    function mostrar_detalhes(total, foto){
        var gola =  $("#gola .selected").text();
        var cor =  $("#cor .selected").text();
        var estampa = $("#estampa option:selected").text();
        var embalagem = $("#embalagem option:selected").text();
        var qualidade =  $("#qualidade .selected").text();
        var quantidade  = $("#quantidade").val();


        $("#result_gola").html(gola);
        $("#result_cor").html(cor);
        $("#result_embalagem").html(embalagem);
        $("#result_quantidade").html(quantidade);
        $("#result_qualidade").html(qualidade);
        $("#result_estampa").html(estampa);


        $("#valor-total").html(total.toFixed(2));
        $("#foto-produto").attr("src", "img/" + foto);
    }


    function calcular_preco(valor, qualidade, embalagem, quantidade){

            // 1. Qualidade (acréscimo de 12%)
            if(qualidade === "q190"){
                valor *= 1.12;
            }

            // 2. Embalagem (0.15 por unidade)
            if(embalagem == "unitaria"){
                valor += quantidade * 0.15;
            }

            // 3. Desconto por quantidade
            if(quantidade > 1000){
                valor *= 0.85; // 15% desconto
            } else if(quantidade > 500){
                valor *= 0.90; // 10%
            } else if(quantidade > 100){
                valor *= 0.95; // 5%
            }

            return valor;
    }

    function atualizar_orcamento(){

        var quantidade  = parseInt($("#quantidade").val()) || 0;
        var id_corSelecionada = $("#cor .selected").attr("id");
        var id_golaSelecionada = $("#gola .selected").attr("id");
        var id_qualidadeSelecionada = $("#qualidade .selected").attr("id");
        var estampa = $("#estampa").val();
        var embalagem = $("#embalagem").val();

        foto = camisetas[id_corSelecionada][id_golaSelecionada][estampa].foto;

        var preco_unit = camisetas[id_corSelecionada][id_golaSelecionada][estampa].preco_unit;
        var total = preco_unit * quantidade;
        total = calcular_preco(total, id_qualidadeSelecionada, embalagem, quantidade);

        // Spinner aparece ANTES do setTimeout, e o DOM só é atualizado depois do delay
        $(".refresh-loader").show();

        setTimeout(function(){
            mostrar_detalhes(total, foto);
            salvar_localStorage();
            $(".refresh-loader").hide();
        }, 500);
    }


    
    $("#cor .option-button").click(function(){
        $("#cor .option-button").removeClass("selected");
        $(this).addClass("selected");
    });
    $("#gola .option-button").click(function(){
        $("#gola .option-button").removeClass("selected");
        $(this).addClass("selected");
    });
    $("#qualidade .option-button").click(function(){
        $("#qualidade .option-button").removeClass("selected");
        $(this).addClass("selected");
    });
    


    carregar_localStorage();
    $(".option-button").click(atualizar_orcamento);
    $("#estampa, #embalagem").change(atualizar_orcamento);
    $("#quantidade").change(atualizar_orcamento);
    
});