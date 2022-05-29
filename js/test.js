// var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`
var rerequestURL = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&tags=mp4`
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

					// var imageURL = `https://ws-cdn-video.rule34.xxx//${type}/${r34Folder}/${r34Image}.${r34Format}`
					// var imageURL = r34data[thisId].file_url;
					var imageURL = 'https://rule34.xxx/images/5402/2a0d1ec831997dbd60618dfae9d52002.mp4?6153181';

/* 
https://ws-cdn-video.rule34.xxx//images/5402/2a0d1ec831997dbd60618dfae9d52002.mp4?6153181
https://ws-cdn-video.rule34.xxx//images/5402/2a0d1ec831997dbd60618dfae9d52002.mp4?6153181


*/

					var div_prviewer = 
					$("<video>", {
						id: "r34previewer-img",
						class: "r34previewer-img",
						src: imageURL,
						controls: "controls"
					});
					$('#mediaPreviewer').append(div_prviewer);

					// $("#r34previewer-img").html(`<source src="${imageURL}" type="video/mp4"></source>`)

				} else {
					if(r34data[thisId].sample == 1) {

						type = 'samples';
						r34Format = 'jpg'
	
						var imageURL = `https://rule34.xxx//${type}/${r34Folder}/sample_${r34Image}.${r34Format}?${r34ID}`
						
					} else if (r34data[thisId].sample == 0) {
	
						type = 'images';
	
						if(r34Format == 'png' || r34Format == 'jpeg'){
							var imageURL = `https://wimg.rule34.xxx//${type}/${r34Folder}/${r34Image}.${r34Format}?${r34ID}`
						} else {
							var imageURL = `https://rule34.xxx//${type}/${r34Folder}/${r34Image}.${r34Format}?${r34ID}`
						}
					}

					var div_prviewer = 
					$("<img>", {
						id: "r34previewer-img",
						class: "r34previewer-img lazyload",
						src: imageURL
					});
					$('#mediaPreviewer').append(div_prviewer);
				} 
							

	
	
				console.log(imageURL)
				console.log(r34ImageArray)
				console.log(r34Format)

		
			} else if (this.id == 'r34previewer') {
				console.log(this.id)
		
				$('#r34previewer-img').remove();
			}
	
/*
	 https://rule34.xxx//images/5403/845824dba5547ae6c3eba3762fac6d8d.jpeg?6153622 я
https://wimg.rule34.xxx//images/5403/845824dba5547ae6c3eba3762fac6d8d.jpeg?6153622 надо


*/
	
			$('.r34previewer').toggleClass('active');
			$('body').toggleClass('lock');	
	
		});

	}
	
}); 
