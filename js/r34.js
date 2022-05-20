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




let maxValue = 14;


for(let x = 0; x <= maxValue; x++){
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



$(document).ready(function(){

    var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`
    var request = new XMLHttpRequest();
    request.open('get', rerequestURL)
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        var posts = request.response;
        console.log(posts);

        for(let x = 0; x <= maxValue; x++){
            $.getJSON(rerequestURL, function(data){
                // console.log(data[x].file_url); //url
                // console.log(data[x].score); //score
    
                $(`#r34obj${x}`).css("order", `-${data[x].score}`);
                $(`#r34img${x}`).attr("src", `${data[x].preview_url}`);
    
                
    
            }).fail(function(){
                console.log("An error has occurred.");
            });
        }
    
    }
    

    
});



// console.log(r34URL);

// console.log(r34URL[0]);



$(document).ready(function(){

    
    $('.card__image-src, .r34previewer').click(function(event){
        $(`.r34previewer-src`).attr("src", `#`);

        $('.card__body, .r34previewer')
        .toggleClass('active');

        $('body')
        .toggleClass('lock');


        var r34id = event.target.id.slice(6);

        var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`
        var request = new XMLHttpRequest();
        request.open('get', rerequestURL)
        request.responseType = 'json';
        request.send();
        
        request.onload = function() {
            var posts = request.response;
            console.log(posts);
    
            
            $.getJSON(rerequestURL, function(data){
                // console.log(data[x].file_url); //url
                // console.log(data[x].score); //score
                
                
                $(`.r34previewer-src`).attr("alt", `${data[r34id].file_url}`);
                $(`.r34previewer-src`).attr("src", `${data[r34id].file_url}`);
                
    
                
    
            }).fail(function(){
                console.log("An error has occurred.");
            });

        
        }

        // $('.r34previewer')
        // .attr("src", `${data[x].preview_url}`);


        // $('.r34previewer')
        // .attr('src', ``)

        console.log(r34id);


    });
});




$('.card__body, .r34previewer').css({'cursor': 'pointer'});

