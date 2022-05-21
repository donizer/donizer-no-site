'use strict'

// main.append(div);

let card__container = document.getElementsByClassName('card__container');
let card__body = document.getElementsByClassName('card__body');
let card__image = document.getElementsByClassName('card__image');
let card__image_src = document.getElementsByClassName('card__image-src');
let card__description = document.getElementsByClassName('card__description');
let card__link = document.getElementsByClassName('card__link');



let maxValue = 29;

var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`
var request = new XMLHttpRequest();
request.open('get', rerequestURL)
request.responseType = 'json';
request.send();


for(let x = 0; x <= maxValue; x++){
    var div_card_body = 
    $("<div>", {id: `r34obj${x}`, class: "card__body r34"}).append(
        $("<a>", {class: "card__image"}).append(
            $("<img>", {id: `r34img${x}`,
            class: "card__image-src, lazyload"})
            .append(
                
            )
        )
    );
    
    $('#CardContainer').append(div_card_body);

    $.getJSON(rerequestURL, function(data){

        $(`#r34img${x}`).attr("src", `${data[x].preview_url}`);

    }).fail(function(){
        console.log("An error has occurred.");
    });
    

}













// request.onload = function() {

//     for(let x = 0; x <= maxValue; x++){
//         $.getJSON(rerequestURL, function(data){

//             $(`#r34img${x}`).attr("src", `${data[x].preview_url}`);

//         }).fail(function(){
//             console.log("An error has occurred.");
//         });
//     }

// }


// $(document).ready(function(){
    $('.card__image-src, .r34previewer, .lazyload').click(function(event){

        if(event.target.id == undefined){

        }

        var r34id = event.target.id.slice(6);
        
        $(`.r34previewer-img`).attr("src", `#`);
        $(`.r34previewer-vid`).attr("src", `#`);

        $('.card__body, .r34previewer')
        .toggleClass('active');

        $('body')
        .toggleClass('lock');

        $.getJSON(rerequestURL, function(data){
            


            if(data[r34id].type == "image"){
                console.log(data[r34id].type);

                $(`.r34previewer-vid`).attr("style", `display: none`);
                $(`.r34previewer-img`).attr("style", `display: block`);

                // $(`.r34previewer-img`).attr("alt", `${data[r34id].sample_url}`);
                $(`.r34previewer-img`).attr("src", `${data[r34id].sample_url}`);
            }
            else if(data[r34id].type == "video"){
                console.log(data[r34id].type);
                
                $(`.r34previewer-img`).attr("style", `display: none`);
                $(`.r34previewer-vid`).attr("style", `display: block`);

                // $(`.r34previewer-vid`).attr("alt", `${data[r34id].sample_url}`);
                $(`.r34previewer-vid`).attr("src", `${data[r34id].sample_url}`);
            }
            else{
                // $(`.r34previewer-vid`).attr("alt", `${data[r34id].file_url}`);
                // $(`.r34previewer-vid`).attr("src", `${data[r34id].file_url}`);
                // $(`.r34previewer-img`).attr("alt", `${data[r34id].file_url}`);
                // $(`.r34previewer-img`).attr("src", `${data[r34id].file_url}`);
            }
            

        }).fail(function(){
            console.log("An error has occurred.");
        });

        


        // $('.r34previewer')
        // .attr("src", `${data[x].preview_url}`);


        // $('.r34previewer')
        // .attr('src', ``)

        console.log(rerequestURL);


    });
// });













// $(document).ready(function(){

    

    
    
// });



// console.log(r34URL);

// console.log(r34URL[0]);



// $(document).ready(function(){

    
    
// });




$('.card__body, .r34previewer').css({'cursor': 'pointer'});

