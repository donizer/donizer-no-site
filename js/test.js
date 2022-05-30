// var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`
var rerequestURL = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&tags=ahri`
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



		var r34Image,
			r34ImageArray,
			r34Format;
		for (let x = 0; x < maxValue; x++) {
			
			
			

			r34Image = r34data[x].image;
			r34ImageArray = r34Image.split('.');
			r34Format = r34ImageArray[r34ImageArray.length-1];

			if(r34Format == "mp4" || r34Format == "gif"){
				console.log(`format is ${r34Format}`)
				$(`#r34img${x}`).toggleClass('anim');

			}

			$(`#r34img${x}`).attr('src', r34data[x].preview_url);
			
		}


		$('.card__image-src, .r34previewer').click(function(){

			if (this.id != 'r34previewer') {

				var thisId = this.id.slice(6)

				var type,
					r34Folder = r34data[thisId].directory,
					r34ImageArray = r34data[thisId].image.split('.'),
					r34Image = r34ImageArray[0],
					r34Format = r34ImageArray[r34ImageArray.length-1],
					r34ID = r34data[thisId].id;

				
				if(r34Format == 'mp4'){
					type = 'images';

					var imageURL = `https://api-cdn.rule34.xxx/${type}/${r34Folder}/${r34Image}.${r34Format}` // робоча страта
				
					// var imageURLalt1 = `https://api-cdn.rule34.xxx//${type}/${r34Folder}/${r34Image}.${r34Format}`
					// var imageURLalt2 = `https://api-cdn-mp4.rule34.xxx//${type}/${r34Folder}/${r34Image}.${r34Format}`
					// var imageURLalt3 = `https://ws-cdn-video.rule34.xxx//${type}/${r34Folder}/${r34Image}.${r34Format}?${r34ID}`
				
					var div_prviewer = 
					$("<video>", {
						id: "r34previewer-img",
						class: "r34previewer-img",
						controls: "controls",
						preload: "auto"
					});
					$('#mediaPreviewer').append(div_prviewer);

					$("#r34previewer-img").html(`<source src="${imageURL}" type="video/mp4"></source>
					`)
					console.log(imageURL)
					// console.log(imageURLalt1)
					// console.log(imageURLalt2)
					// console.log(imageURLalt3)

					/* 

					https://wimg.rule34.xxx//images/5393/a0da64b2d9a567743079268f52b114b5.jpeg?6143047

					*/

				} else {
					if(r34data[thisId].sample == 1) {
	
						var imageURLFull =   `https://wimg.rule34.xxx//images/${r34Folder}/${r34Image}.${r34Format}`;


						if (r34Format == 'jpg')
						var imageURLSample = `https://rule34.xxx//samples/${r34Folder}/sample_${r34Image}.jpg`;
						else
						var imageURLSample = `https://rule34.xxx//samples/${r34Folder}/sample_${r34Image}.jpg?${r34ID}`;						


						console.log(`1 sample is ${imageURLSample}`);
						console.log(`1 full is ${imageURLFull}`);
						
					} else if (r34data[thisId].sample == 0) {
	
						if (r34Format == 'jpeg'){
							var imageURLFull =   `https://wimg.rule34.xxx//images/${r34Folder}/${r34Image}.${r34Format}`;
						
							var imageURLSample = `${imageURLFull}?${r34ID}`;
						} else {
							var imageURLFull =   `https://wimg.rule34.xxx//images/${r34Folder}/${r34Image}.${r34Format}?${r34ID}`;
						
							var imageURLSample = `${imageURLFull}`;

						}


						console.log(`0 sample is ${imageURLSample}`);
						console.log(`0 full is ${imageURLFull}`);
					}

					// var apiFullURL = `https://api-cdn.rule34.xxx//${type}/${r34Folder}/${r34Image}.${r34Format}?${r34ID}`;

					var div_prviewer = 
					$("<picture>", {
						id: "r34previewer-img"
					}).append(
						$("<source>", {srcset: imageURLSample}),
						$("<source>", {srcset: imageURLFull}),
						$("<img>", {
							// id: "r34previewer-img",
							class: "r34previewer-img"
						})
					);
					$('#mediaPreviewer').append(div_prviewer);

				} 

			} else if (this.id == 'r34previewer') {
				console.log(this.id);
		
				$('#r34previewer-img').remove();
			}

			$('.r34previewer').toggleClass('active');
			$('body').toggleClass('lock');	
	
		});
	}
}); 
