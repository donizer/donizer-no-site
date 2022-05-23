'use strict'


let maxValue = 99;

var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`
var request = new XMLHttpRequest();
request.open('GET', rerequestURL)
request.responseType = 'json';


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
}
// console.log('123');

window.onload = function() {

    
    
        $.getJSON(rerequestURL, function(data){
            for(let x = 0; x <= maxValue; x++){
    
                $(`#r34img${x}`).attr("src", `${data[x].preview_url}`);
                $(`#r34obj${x}`).css("order", `-${data[x].score}`);

                // console.log(`#r34img${x}`);
                // console.log(`score of image №${x} is ${data[x].score}`);
            }
            
    
        }).fail(function(){
            console.log("An error has occurred.");
        });
   


}

$('.card__image-src, .lazyload').click(function(event){

    var r34id = event.target.id.slice(6);
    
    

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
            $(`.r34previewer-img`).attr("src", `${data[r34id].sample_url}`); //original
        }
        else if(data[r34id].type == "video"){
            console.log(data[r34id].type);
            
            $(`.r34previewer-img`).attr("style", `display: none`);
            $(`.r34previewer-vid`).attr("style", `display: block`);

            // $(`.r34previewer-vid`).attr("alt", `${data[r34id].file_url}`);
            $(`.r34previewer-vid`).attr("src", `${data[r34id].file_url}`); //original
            
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

    console.log(rerequestURL);


});

$('.r34previewer').click(function(event){
    $('.card__body, .r34previewer')
    .toggleClass('active');
    $('body')
    .toggleClass('lock');

    $(`.r34previewer-img`).attr("src", '#');
    $(`.r34previewer-vid`).attr("src", '#');
});