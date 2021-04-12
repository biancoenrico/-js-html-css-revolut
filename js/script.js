/* Riproducete il menu con anche le dropdown funzionanti come da screenshot.
Il menu deve funzionare su desktop.
Utilizzate jQuery per mostrare e nascondere le dropdown.*/



$(document).ready( function (){
    $('nav>ul>li').mouseenter(function () {

        $(this).next().addClass('relative')
        
        if($(this).children() == $('button')){
            !$(this).children().addClass('show');
        }else{
            $(this).children().addClass('show');
        }
    })
    $('nav>ul>li').mouseleave(function () {
        $(this).next().removeClass('relative')
        $(this).children().removeClass('show');
    
    })
})

