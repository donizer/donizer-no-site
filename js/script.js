$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu, .burger-body').toggleClass('active');
        $('.mid').toggleClass('lock');
    });
});