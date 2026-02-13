
// Menu Mobile
document.getElementById("hamburguer-icon").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "0px"
  
}

document.getElementById("sliding-header-menu-close-button").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "-360px"
  
}

// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

single_tab = document.getElementsByClassName("single-tab")

for (let i = 0 ; i < single_tab.length; i++){
  single_tab[i].onclick = function (){
    
    for (let j = 0; j < single_tab.length; j++) {
      single_tab[j].style.backgroundColor = unselected_color;
      single_tab[j].style['font-weight'] = 'normal';
    }

    let selecionado = this.innerHTML

    this.style.backgroundColor = selected_color
    this.style['font-weight'] = "bold"
    
    document.getElementById("box-text").innerHTML = aboutUs[selecionado]

  }
}

// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

// "service-previous" 
// "service-next"
// "service-title"
// "service-text"

let servico_atual = 0

document.getElementById("service-next").onclick = function () {
  servico_atual++
  if (servico_atual == 3){
    servico_atual = 0
  }
  document.getElementById("service-title").innerHTML = our_services[servico_atual].title
  document.getElementById("service-text").innerHTML = our_services[servico_atual].text

}
document.getElementById("service-previous").onclick = function () {
  servico_atual--
   if (servico_atual < 0){
    servico_atual = 2
  }
  document.getElementById("service-title").innerHTML = our_services[servico_atual].title
  document.getElementById("service-text").innerHTML = our_services[servico_atual].text

}






// Data Footer



  
   


   