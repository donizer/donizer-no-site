// var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`
var rerequestURL = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1`
var request = new XMLHttpRequest();
request.open('GET', rerequestURL)
request.responseType = 'json';
request.send();

var testurl = "https://api-cdn.rule34.xxx/samples/5384/sample_d3c7ccd8a3d5c7ef240549aab4484070.jpg";
// var testurl = "https://cdn.discordapp.com/attachments/497404476907454466/978986951120154674/unknown.png";

var maxValue = 100;




$(document).ready(function(){

	
	
	var isVideo = false;

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

	request.onload = function() {
		var r34data = request.response;

		// console.log(r34data);
		for(let x = 0; x < maxValue; x++){
			
			$(`#r34img${x}`).attr('src', r34data[x].preview_url);
			
		}

		$('.card__image-src, .r34previewer').click(function(){

			if (this.id != 'r34previewer') {

				var r34id = this.id.slice(6)


				var type,
					r34Folder,
					r34Hash,
					r34Image,
					r34ImageArray,
					r34Format,
					r34ID;

				if(r34data[r34id].sample == 1) {

					type = 'samples';
					r34Folder = r34data[r34id].directory;
					r34Hash = `sample_${r34data[r34id].hash}`;
					r34ImageArray = r34data[r34id].image.split('.');
					r34Image = r34ImageArray[0];
					r34Format = 'jpg'
					r34ID = r34data[r34id].id;


					var imageURL = `https://wimg.rule34.xxx//${type}/${r34Folder}/${r34Hash}.${r34Format}?${r34ID}`
					
				} else if (r34data[r34id].sample == 0) {

					type = 'images';
					r34Folder = r34data[r34id].directory;
					r34ImageArray = r34data[r34id].image.split('.');
					r34Image = r34ImageArray[0];
					r34Format = r34ImageArray[r34ImageArray.length-1];
					r34ID = r34data[r34id].id;


					var imageURL = `https://wimg.rule34.xxx//${type}/${r34Folder}/${r34Image}.${r34Format}?${r34ID}`
					
				}

				// var sampleURL = `https://rule34.xxx/${r34data[r34id].file_url.slice(26)}?${r34data[r34id].id}`
				// var sampleURL = r34data[r34id].sample_url.slice(26);

				var div_prviewer = 
				$("<img>", {
					id: "r34previewer-img",
					class: "r34previewer-img lazyload",
					src: '#'
				});
		
				$('#mediaPreviewer').append(div_prviewer);

				$('#r34previewer-img').attr('src', imageURL);



				console.log(imageURL)
				console.log(r34ImageArray)
				console.log(r34Format)
		
			} else if (this.id == 'r34previewer') {
				console.log(this.id)
		
				$('#r34previewer-img').remove();
			}
	
/*
     https://rule34.xxx//images/5399/d92f8ff63addc57075869810e2038e79.jpeg?6149497
https://wimg.rule34.xxx//images/5399/d92f8ff63addc57075869810e2038e79.jpeg?6149497

     https://rule34.xxx//images/5399/19dc0a32d175f59aad8e7f6f3cbe1fd3.jpeg?6149489
https://wimg.rule34.xxx//images/5399/19dc0a32d175f59aad8e7f6f3cbe1fd3.jpeg?6149489

https://rule34.xxx//samples/5400/sample_5faa2c8386bd9a47dd8cb1f72fe2d492.jpg?6150408
https://rule34.xxx//samples/5400/sample_5faa2c8386bd9a47dd8cb1f72fe2d492.jpg?6150408

*/
	
			$('.r34previewer').toggleClass('active');
			$('body').toggleClass('lock');	
	
		});

	}
	
}); 
