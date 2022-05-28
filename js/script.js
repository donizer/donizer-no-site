// $('body').append(`<div class="backgroundAbs"></div>`);

$(document).ready(function(){
    $('.header__burger, .shade').click(function(event){

        $('.header__burger, .header__menu, .burger-body, .burger-container, .shade')
        .toggleClass('active');

        $('body')
        .toggleClass('lock');
    });
});




$('.header__burger').css({'cursor': 'pointer'});



// var golo = 'https://api-cdn.rule34.xxx/samples/5384/sample_d3c7ccd8a3d5c7ef240549aab4484070.jpg'

// // var golo = golo.slice(16)

// // for(let x = 0; x < golo.length; x++){
// //     console.log(golo[x])
// // }
// // console.log(golo)

// var golo = `https://${golo.slice(16)}`;


// var elements = document.getElementsByClassName("ad");

// window.onclick = function(event){
    
// }