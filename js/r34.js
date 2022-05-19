'use strict'


// main.append(div);

let card__container = document.getElementsByClassName('card__container');
let card__body = document.getElementsByClassName('card__body');
let card__image = document.getElementsByClassName('card__image');
let card__image_src = document.getElementsByClassName('card__image-src');
let card__description = document.getElementsByClassName('card__description');
let card__link = document.getElementsByClassName('card__link');



// card__image[0].setAttribute('href','https://r34-json-api.herokuapp.com/images?url=https://api-cdn.rule34.xxx/images/5361/8c6d2c95675b7784b5367d99f30c478d.jpeg');


// card__image_src[0].setAttribute('src', 'https://r34-json-api.herokuapp.com/images?url=https://api-cdn.rule34.xxx/images/5361/8c6d2c95675b7784b5367d99f30c478d.jpeg');
// card__image_src[1].setAttribute('src', 'https://r34-json-api.herokuapp.com/images?url=https://api-cdn.rule34.xxx/images/5361/d94d315ca700a476dda7f449828ae339.jpeg');


// let g = card__image.length;




for(let x = 0; x <= 99; x++){



    var div_card_body = 
    $("<div>", {id: `r34obj${x}`, class: "card__body r34"}).append(
        $("<a>", {class: "card__image"}).append(
            $("<img>", {id: `r34img${x}`,
            class: "card__image-src"})
            .append(
                
            )
        )
    );
    




    $('#CardContainer').append(div_card_body);



}


for(let x = 0; x <= 99; x++){
    $(document).ready(function(){
        $.getJSON("../js/posts.json", function(data){
            // console.log(data[x].file_url); //url
            // console.log(data[x].score); //score

            $(`#r34obj${x}`).css("order", `-${data[x].score}`);
            $(`#r34img${x}`).attr("src", `${data[x].file_url}`);


        }).fail(function(){
            console.log("An error has occurred.");
        });
    });
}


// console.log(r34URL);

// console.log(r34URL[0]);



