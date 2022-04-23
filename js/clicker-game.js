'use strict';



// document.getElementById('button').onmouseenter = function(){
//   // document.getElementById('button').style.cursor = "url('../media/pointer/knife.png'), auto";
  
  
// }

let x = 0;
let r = false;
let l = 0;

if(l<365){
  // console.log(l)
  document.getElementById('button').onmousedown = function(){
    document.getElementById('button').style.bottom = '0px';
    document.getElementById('button').style.left = `0px`;
  }
  document.getElementById('button').onmouseup = function(){
    document.getElementById('button').style.bottom = `10px`;
    document.getElementById('button').style.left = `10px`;
  }
}
document.getElementById("button").onclick = function(){
  l++;
  x++;


  
  if(l>=365){
    document.getElementById('button').onmousedown = function(){
      document.getElementById('button').src = "https://cdn.discordapp.com/attachments/893911666687889418/915901636747079680/killio2.png";
      document.getElementById('button').style.bottom = '0px';
      document.getElementById('button').style.left = `0px`;
    }
    document.getElementById('button').onmouseup = function(){
      document.getElementById('button').style.bottom = `10px`;
      document.getElementById('button').style.left = `10px`;
      document.getElementById('button').src = "https://cdn.discordapp.com/attachments/893911666687889418/915901728510074900/killio1.png";
      
    }
  }
  

  if(x<18){
    document.getElementById('button.p').innerHTML = `  You clicked ${x} times, gratz!  `;
  }

  if(x==18){
    l = 0;

    
    // document.getElementById('coverText').style.backgroundColor = "rgb(43, 110, 63)"; 
    document.getElementById('gachiArmy.h1').innerHTML = 'Gachi army';
    document.getElementById('army').play();
   
    document.getElementById('button').src = "https://cdn.discordapp.com/attachments/893911666687889418/914197253525241896/580b57fcd9996e24bc43c22f.png";
    // barBackImage('button', "url('https://cdn.discordapp.com/attachments/893911666687889418/904449674130370590/580b57fcd9996e24bc43c22f.png')"); // Potato
    barBackImage('gachiArmy', "url(https://cdn.discordapp.com/attachments/893911666687889418/905794915815014551/Gachi_Version___.png)"); // gachi 
    barBackImage('coverText', "url(https://cdn.discordapp.com/attachments/893911666687889418/905784622892351588/unknown.png)"); // militory 


    let povistka = function(){
      document.getElementById('povistka').classList.remove('nonerV');
    };
    povistka();

  }
  if(x>=18 || l > 548){
    document.getElementById('button.p').innerHTML = `  ${l} days have passed, gratz!  `;
  }
  if(x==18){
    document.getElementById('button').style.cursor = "url('https://cdn.discordapp.com/attachments/893911666687889418/914277105418792970/unknown.png'), auto";
  }
  if(l==365){
    document.getElementById('button').src = "https://cdn.discordapp.com/attachments/893911666687889418/915900546949480448/killio1.png";
    barBackImage('gachiArmy', "url(https://cdn.discordapp.com/attachments/893911666687889418/914198729819553792/unknown.png)"); // gachi 
    barBackImage('coverText', "initial"); // militory 
    document.getElementById('army').pause();
    document.getElementById('button').style.cursor = 'auto';
    document.getElementById('gachiArmy.h1').innerHTML = "donizer's site of dream";
    x = 18;
    document.getElementById('button.p').innerHTML = `  You clicked ${x} times, gratz!  `;

  }
  if(l>365){
    
    document.getElementById('button.p').innerHTML = `  You clicked ${x} times, gratz!  `;
  }

  function barBackImage(elem, link){ //quick change backImg
    document.getElementById(elem).style.backgroundImage = link;
  }

  let rewardBank = [100,150,300,400,450,550,670,800,1000];
  // console.log(x)
  // console.log(Boolean(document.getElementById(`reward_${x}`)))
  if(l>365){
    for(let y = 0; y < rewardBank.length; y++){
      if(Boolean(document.getElementById(`reward_${x}`))){
        if(x==rewardBank[y])
        document.getElementById(`reward_${rewardBank[y]}`).classList.remove('noner');
        // console.log(y);
      }
      else{
        // console.log(`reward_${rewardBank[y]}`);
      }
    }
  }
  
  
  
}


console.log("Шо, типа умный, да? А ну закрыл быстра, и шоб я тебя тут больше не видел, понял?!")

document.getElementById("povistka-button_2").onmousedown = function(){
  document.getElementById("povistka-button_2").innerHTML = 'ТАК ТОЧНО!'
  document.getElementById("povistka-button_2").style.backgroundColor = 'rgba(16, 252, 87, 0.767)';
}
document.getElementById("povistka-button_1").onclick = function(){
  document.getElementById('povistka').classList.add('nonerV');
}
document.getElementById("povistka-button_2").onclick = function(){
  document.getElementById('povistka').classList.add('nonerV');
}





// window.onmouseup=function(e){
//   var elem = e ? e.target : window.event.srcElement;

// }

// http://www.rw-designer.com/icon-view/7084.png