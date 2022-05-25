// var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`
var rerequestURL = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1`
// var request = new XMLHttpRequest();
// request.open('GET', rerequestURL)
// request.responseType = 'json';
// request.send();


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

window.onload = function() {
	var isVideo = false;
    $.getJSON(rerequestURL, function(data){
        
		for(let x = 0; x < maxValue; x++){

			var tagString = data[x].tags
			var tagsАrray = tagString.split(' ');
			
			$(`#r34img${x}`).attr("src", `${data[x].preview_url}`);

			for(let y = 0; y < tagsАrray.length; y++){
				// console.log(`tags of ${x} is ${tagsАrray[y]}`);
				
				if(tagsАrray[y] == "animated"){
					$(`#r34img${x}`).toggleClass('anim');

				}
				
				// console.log();

			}
		}
        
		// console.log(data)



		$('.card__image-src').click(function(event){
		
			$('.card__body, .r34previewer')
			.toggleClass('active');
			$('body')
			.toggleClass('lock');
	
			var r34id = event.target.id.slice(6);
	
			var r34URLMicro = data[r34id].preview_url;
			var r34URLSimple = data[r34id].sample_url;
			var r34URLFull = data[r34id].file_url;
			
			var testurl = "https://api-cdn.rule34.xxx/samples/5384/sample_d3c7ccd8a3d5c7ef240549aab4484070.jpg";
	
			var imageURL = r34URLFull;
	
			// request.open('GET', imageURL)
			// request.responseType = 'blob';
			// request.send();
	
			// console.log(imageURL);


			let last4CharURL = r34URLFull.slice(-3)
			let isMp4 = false;
			if(last4CharURL == 'mp4'){
				isMp4 = true;
			}

			// console.log(last4CharURL);

			var addVideo = 
			$("<video>", {id: "r34previewer-vid", class: "r34previewer-vid", src: `${imageURL}`, autoplay: '1', loop: '1'});

			var addImage = 
			$("<img>", {id: "r34previewer-img", class: "r34previewer-img", src: `${r34URLSimple}`});

			

			if(isMp4){
				// $('#r34previewer-vid').attr('src', `${imageURL}`)
				console.log(addVideo)
				$('#r34previewer').append(addVideo);
				isVideo = true;
				addVideo = '';
				console.log(addVideo)
			} else {
				$('#r34previewer').append(addImage);
				isVideo = false;
				addImage = '';
			}


			

			// console.log(testurl);
			// console.log(r34URLMicro);
			// console.log(r34URLSimple);
			// console.log(r34URLFull);
				
		});


		
    }).fail(function(){
        console.log("An error has occurred.");
    });

	$('#r34previewer').click(function(event){

		
		// var evenVid = document.getElementsByClassName('r34previewer')[0];
		// console.log(isVideo);
		// console.log(!!evenVid.children.length);

		if(isVideo){
			document.getElementById('r34previewer-vid').remove();
		} else {
			document.getElementById('r34previewer-img').remove();
		}

		// console.log('123')
	
		$('.card__body, .r34previewer')
		.toggleClass('active');
		$('body')
		.toggleClass('lock');
	
		// $(`#r34previewer-img`).attr("src", '../media/images/placeholder.svg');
		// $(`#r34previewer-vid`).attr("src", '#');
		// $(`#r34previewer-vid`).get(0).pause();
	
	});
	


}
