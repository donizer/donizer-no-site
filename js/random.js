'use strict'

let x, y = 0;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); 
}  

while(x!=5704){
	x = getRandomInt(1, 6000);
	y++;
	console.log(`current number is ${x}`);
}

console.log(`atempts was needed ${y}`);
// console.log(y);