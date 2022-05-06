$(document).ready(function(){
    $('.header__burger, .shade').click(function(event){

        $('.header__burger, .header__menu, .burger-body, .burger-container, .shade')
        .toggleClass('active');

        $('body')
        .toggleClass('lock');
    });
});