$(document).ready(function(){

    
    $("elemento").on({
        
        click: function(){
            // Código a ser executado no evento click
        }, 

        mouseenter: function(){
            // Código a ser executado no evento mouseenter
        }, 

        mouseleave: function(){
            // Código a ser executado no evento mouseleave
        } 

    });
            
    $("#nome").on("input", function() {
        var valor = $(this).val()

        if (valor) {
            $("#confirmar").show()
        } else {
            $("#confirmar").hide()
        }
    })
    $("#confirmar").click(function(){
                    var nome_input = $("#nome").val()
                    localStorage.setItem("nome", nome_input)
                    
                    console.log(localStorage.getItem("nome"))

                    $("#nome").val("")
                    $("#confirmar").hide()

                    $("#resultado").text(localStorage.getItem("nome"))
                }
            )

    $("#resultado").text(localStorage.getItem("nome"))       
    
});