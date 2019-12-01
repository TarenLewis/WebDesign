//var query = document.querySelector("input");


document.querySelector(".js-userinput").addEventListener('click', function(e) {

    if (document.querySelector("input").value == "Type here...") {
        document.querySelector("input").value = "";
    }
});

document.querySelector(".js-go").addEventListener('click', function(e) {

    var input = document.querySelector("input").value;
    pushToDOM(input);
});


//If the enter key is pressed, push to dom
document.querySelector(".js-userinput").addEventListener('keyup', function(e) {

    var input = document.querySelector("input").value;

    if (e.keyCode == 13 || e.which == 13) {
        pushToDOM(input);

    }
});


var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=B1ZEbug15MxOMytsld9mFTDamm0C7lpp";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e) {
    console.log(e);

    var data = e.target.response;
    pushToDOM(data);

});



function pushToDOM(input) {

    var response = JSON.parse(input);
    //console.log("Response: " + response)

    var container = document.querySelector(".js-container");
    var imageURLS = response.data;

    imageURLS.forEach(function(image) {

        //console.log(image.images.fixed_height.url);
        //imageURL = response.data.images.fixed_height.url;
        container.innerHTML += "<img src=\"" + imageURL + "\">";

    });


    // for (i = 0; i < response.data.length; i++) {
    //     imageURL = response.data[i].images.fixed_height.url;
    //     container.innerHTML += "<img src=\"" + imageURL + "\">";
    // }


    //<img src="https://media1.giphy.com/media/wMvESGxZ0Cqd2/200.gif?cid=b324b20c8475c7f28e2a0c5d017403e992b46ab1dbbf025b&rid=200.gif" alt="giphy image">



}