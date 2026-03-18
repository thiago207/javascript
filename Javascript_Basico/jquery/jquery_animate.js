$(document).ready(function(){


    $("#animar").click(function(){
        $("#quadrado").animate({
            width: '+=20px',
            height: '+=20px'
        }, "slow");
    }); 

    
    $("#animar").click(function(){

        $("#quadrado").animate({
            width: '+=20px'
        },500);

        $("#quadrado").animate({
            height: '+=20px'
        }),500;

    });
})