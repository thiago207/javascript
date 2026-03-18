$(document).ready(function(){

    

     $( "#botao-esconder" ).click(function() {
        $(this).hide(2000, function(){
            $("#texto-escondido").show();
        });
        
    });

    

    /* $("#toggle-tab").click(function() {

        $("#tab-content").toggle();
        $("#toggle-tab").toggleClass("flip");
        
    }); */

        
    $("#toggle-tab").click(function() {

        $("#tab-content").slideToggle();
        $("#toggle-tab").toggleClass("flip");
        
    });
    
})