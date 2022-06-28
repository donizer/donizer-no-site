// var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`

var h = 0;
var recivedData = [];
while(h <= 10){


	var requestArray = ``;

	var rerequestURL = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1000&json=1&tags=ahri+-mp4+-video&pid=${h}`


	$.getJSON(rerequestURL).then(function(data){
		
	console.log(`${h} is ${data.length}`)
	});


	


	// console.log(rerequestURL)
	
	
	h++;

}

// 123
// for (var i = 0; i <= 10; i++) {
//     $.ajax({
// 		dataType: "json",
//         url: `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1000&json=1&tags=ahri+-mp4+-video&pid=${i}`,
		
//         type: 'GET',
//         beforeSend: function() {
//             console.log("Downloading ");
//         },
//         async: false,
//         complete: function() {
//         },
//         success: function(result) {
// 			var getResult = result;

//             console.log("Download Success ");
// 			console.log(result.length)
			
//         }
		
//     });
// 	if (getResult.length == 0) { break; }
// }
// 123

// for (var i = 1; i <= 10 || result.length == 0; i++) {
//     $.ajax({
// 		dataType: "json",
//         url: `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1000&json=1&tags=ahri+-mp4+-video&pid=${i}`,
		
//         type: 'GET',
//         beforeSend: function() {
//             console.log("Downloading ");
//         },
//         async: false,
//         complete: function() {
//         },
//         success: function(result) {
//             console.log("Download Success ");
// 			console.log(result)
//         }
//     });
// }



var rerequestURL = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&tags=ahri+-mp4+-video&limit=1000`
var request = new XMLHttpRequest();
request.open('GET', rerequestURL)
request.responseType = 'json';
request.send();


var isHD = false;

function changeQuality(){
	isHD = !isHD;
	document.getElementById("quality-changer").classList.toggle('button-bad');
	console.log(isHD)

	
	if(isHD == true){
	document.getElementById("quality-changer").innerHTML = "Switch quality to SD";
	} else {
	document.getElementById("quality-changer").innerHTML = "Switch quality to HD";
	}
	
};


request.onload = function() {
	var r34data = request.response;
	var maxValue = 100;

	var isVideo = false;
	var r34Image,
		r34ImageArray,
		r34Format;

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
	for (var x = 0; x < maxValue; x++) {
		r34Image = r34data[x].image;
		r34ImageArray = r34Image.split('.');
		r34Format = r34ImageArray[r34ImageArray.length-1];

		if (r34Format == "mp4" || r34Format == "gif") {
			console.log(`format is ${r34Format}`)
			$(`#r34img${x}`).toggleClass('anim');

		}

		$(`#r34img${x}`).attr('src', r34data[x].preview_url);

		$(`#r34obj${x}`).css('order', `-${r34data[x].score}`);
		
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

				// var imageURL = `https://api-cdn-mp4.rule34.xxx/${type}/${r34Folder}/${r34Image}.${r34Format}` // робоча страта

				// var imageURL = `https://ws-cdn-video.rule34.xxx/${type}/${r34Folder}/${r34Image}.${r34Format}?${r34ID}` // робоча страта

				var imageURL = `https://ws-cdn-video.rule34.xxx/${type}/${r34Folder}/${r34Image}.${r34Format}?${r34ID}` // робоча страта


				var div_prviewer = 
				$("<video>", {
					id: "r34previewer-img",
					class: "r34previewer-img",
					controls: "controls"
				}).append(
					$("<source>", {
						src: imageURL
					})
				);
				$('#mediaPreviewer').append(div_prviewer);
				console.log(imageURL)

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

				if(isHD == true) {
					var div_prviewer = 
					$("<picture>", {
						id: "r34previewer-img"
					}).append(
						$("<source>", {srcset: imageURLFull}),
						$("<img>", {
							class: "r34previewer-img"
						})
					);
					$('#mediaPreviewer').append(div_prviewer);
				} else {
					var div_prviewer = 
					$("<picture>", {
						id: "r34previewer-img"
					}).append(
						$("<source>", {srcset: imageURLSample}),
						$("<img>", {
							class: "r34previewer-img"
						})
					);
					$('#mediaPreviewer').append(div_prviewer);	
				}
			} 

		} else if (this.id == 'r34previewer') {
			console.log(this.id);
			$('#r34previewer-img').remove();
		}

		$('.r34previewer').toggleClass('active');
		$('body').toggleClass('lock');	

	});
}



