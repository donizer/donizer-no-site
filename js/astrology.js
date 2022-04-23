'use strict';


let astroDate = new Date();


let day = astroDate.getDate();
let month = astroDate.getMonth()+1;
let year = astroDate.getFullYear();

document.getElementById('astro-date').
innerHTML = `Прогноз на ${day}.${month}.${year}`;
//

// let astroStory = fetch('../../media/txt/astro.txt')

let archive = document.getElementById('archive');

let archiveArticle = archive.getElementsByTagName('div');
console.log('123');
let astroContentBody = document.getElementById('astroContentBody');
let astroRandomNumber = astroDate.getDate();


for(; astroRandomNumber > archiveArticle.length; astroRandomNumber /= 3+0.1)
{
    console.log(Math.floor(astroRandomNumber))
}

console.log(astroDate.getDate()/3)


astroContentBody.innerHTML = archiveArticle[Math.floor(astroRandomNumber)].innerHTML;



