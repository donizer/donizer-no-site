'use strict'


// var rerequestURL = `https://r34-json-api.herokuapp.com/posts?tags=ahri`
var rerequestURL = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&tags=animated`
var request = new XMLHttpRequest();
request.open('GET', rerequestURL)
request.responseType = 'json';

// var r34Data;
// $.getJSON(rerequestURL, 
//     function(data) {
//         r34Data = data;
//         // or use your data here by calling yourFunction(data);
//         console.log(r34Data)
//     }
// );

// console.log(r34Data)