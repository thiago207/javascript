// Array com 5 cores pré-definidas que serão usadas para mudar o fundo
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green'];

// Seleciona o botão do DOM através do seu ID 'btn' e armazena na variável
const btn = document.getElementById('btn');

// Adiciona um evento de clique ao botão
// Quando o botão for clicado, a função anônima será executada
btn.addEventListener('click', function(){
    // Chama a função colorRandom() que retorna um índice aleatório
    const randomColor = colorRandom();
    
    // Altera a cor de fundo do body usando o índice aleatório
    // Acessa a cor no array colors usando o índice retornado
    document.body.style.background = colors[randomColor];
    
    // Atualiza o conteúdo HTML do elemento com id "your-color"
    // Mostra o nome da cor selecionada na tela
    document.getElementById("your-color").innerHTML = colors[randomColor];
})

// Função que gera um número aleatório entre 0 e o tamanho do array colors
function colorRandom(){
    // Math.random() gera um número decimal entre 0 e 1
    // Multiplica pelo tamanho do array (5) para obter um número entre 0 e 4.999...
    // Math.floor() arredonda para baixo, resultando em 0, 1, 2, 3 ou 4
    return Math.floor(Math.random() * colors.length);
}