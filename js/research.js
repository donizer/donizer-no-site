'use strict';



// let StealedAstroP = StealedAstro[0].querySelector('p')[0].innerHTML;

// console.log(StealedAstroP)

// let StealedAstro = document.getElementsByClassName('horoBlock')[0].innerHTML;

// document.getElementById('content').innerHTML = StealedAstro;



// let StealedAstro = document.querySelector("#content")
// let StealedAstroChild = StealedAstro.querySelector('.BIG_txt')


let StealedAstro = document.querySelector("#archive")
let StealedAstroChild = StealedAstro.querySelector('.horoBlock')

let xhr = fetch('https://orakul.com/horoscope/astrologic/general/gemini/today.html');

$('#archive').html('<object data="https://orakul.com/horoscope/astrologic/general/gemini/today.html"/>');


// console.log(StealedAstro.insertAdjacentHTML(afterbegin, ))



// window.addEventListener('load', function () {

// })