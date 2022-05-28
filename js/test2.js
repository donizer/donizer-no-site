// var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`
var rerequestURL = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1`
var request = new XMLHttpRequest();
request.open('GET', rerequestURL)
request.responseType = 'json';
request.send();

var maxValue = 100;

for(let x = 0; x < maxValue; x++){
    var div_card_body = 
    $("<div>", {id: `r34obj${x}`, class: "card__body r34"}).append(
        $("<a>", {class: "card__image"}).append(
            $("<img>", {id: `r34img${x}`,
            class: "card__image-src lazyload"})
            .append(
                
            )
        )
    );
    
    $('#CardContainer').append(div_card_body);
}
var isVideo = 'none';

request.onload = function(){
	var data = request.response;
	for(let x = 0; x < maxValue; x++){

		var tagString = data[x].tags
		var tagsАrray = tagString.split(' ');
		
		$(`#r34img${x}`).attr("src", `${data[x].preview_url}`);

		for(let y = 0; y < tagsАrray.length; y++){
			// console.log(`tags of ${x} is ${tagsАrray[y]}`);
			
			if(tagsАrray[y] == "animated"){
				$(`#r34img${x}`).toggleClass('anim');

			}
		}
	}



	$('.card__image-src').click(function(event){	
		$('.card__body, .r34previewer')
		.toggleClass('active');

		$('body')
		.toggleClass('lock');

		var r34id = event.target.id.slice(6);

		var r34URLMicro = data[r34id].preview_url;
		var r34URLSimple = data[r34id].sample_url;
		var r34URLFull = data[r34id].file_url;


		var imageURL = r34URLFull
		var imageURL = `https://wimg.rule34.xxx/${imageURL.slice(26)}`;
		console.log(imageURL)

		var img = document.createElement('img');
		
		img.src = imageURL;
		document.getElementById('r34previewer').appendChild(img);
		img.classList.add('r34previewer-img');
		img.setAttribute("id", "r34previewer-img");

	});
	$('#r34previewer').click(function(event){

		// if(isVideo){
		// 	console.log(isVideo)
		// 	document.getElementById('r34previewer-vid').remove();
		// } else if (isVideo == false) {
		// 	console.log(isVideo)
			document.getElementById('r34previewer-img').remove();
			
		// } else {
		// 	console.log('no data')
		// }
		

		$('.r34previewer')
		.toggleClass('active');
		$('body')
		.toggleClass('lock');	
	});
}

