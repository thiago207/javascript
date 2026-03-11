$.each(// array ou objeto, função(a,b) {
    // código a ser repetido
);

var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

$.each(lista, function(indice, valor){
    console.log("O elemento do indece: " + indice + " e de valor: " + valor)
})



// Aplicação do loop each em um objeto:

var pessoa = {
    'nome': 'João Pedro',
    'DN': '20/01/1990',
    'CPF': '111.111.111-11'
};

$.each(pessoa, function( chave, valor ) {
    console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
});


let elementos = $("#interesses li")
$.each(elementos, function( indice  , valor ) {
    console.log($(valor).text());
});