'use strict';


let BackBody = document.getElementsByTagName('body');


console.log(Boolean(!BackBody[0].classList.length));
console.log(BackBody[0].classList);

if(!BackBody[0].classList.length){
    BackBody[0].classList.add('Background_PinkAhri')
}