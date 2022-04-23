'use strict';

document.getElementsByTagName('body')[0].style.overflowY = "scroll";

let obj_helper = document.getElementsByClassName('obj_helper');

for(let x = 0; x < obj_helper.length; x++){
    obj_helper[x].id = `obj_${x}`;
    // console.log(obj_helper.id);
}

let countElem = new Array(obj_helper.length);
// console.log(obj_helper.length);
for(let j = 0; j < countElem.length; j++){
    countElem[j]=1;
    // console.log(countElem[j]);
}

window.onmouseup=function(e){

    var elem = e ? e.target : window.event.srcElement;

    let currentId = document.getElementById(elem.id);
    let currentElem = Number(elem.id.slice(4)); // 5

    // console.log(`current Element is ${currentElem}`);

    if(elem.id == '') {
    }
    else if(currentId.className == 'obj_helper') {
        // console.log(`Current state is ${countElem[currentElem]}`);
        countElem[currentElem]++;
        currentId.onclick = function() {
            // console.log(`шняга ${countElem[currentElem] % 2}`);
            if(countElem[currentElem] % 2 == 0) {
                currentId.style.maxHeight = "720px";
                

            } else {
                currentId.style.maxHeight = "285px";
            }
        }
    }
}


// let height_max = document.getElementById(elem.id).style.maxHeight;
// let width_max = document.getElementById(elem.id).style.maxWidth;



