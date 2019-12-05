//Take input
//@js-check

document.querySelector(".js-userinput").addEventListener('click', function() {
    if (document.querySelector("input").value === "Type here...") {
        document.querySelector("input").value = "";
    }
});

//if Go button is clicked, push to dom
document.querySelector(".js-go").addEventListener('click', function() {
    var input = document.querySelector("input").value;
    console.log("gobutton input: " + input);

    sendRequest(input);
});

//If the enter key is pressed, push to dom
document.querySelector(".js-userinput").addEventListener('keyup', function(e) {

    var input = document.querySelector("input").value;

    if (e.keyCode == 13 || e.which == 13) {
        console.log("keyup input: " + input);
        sendRequest(input);
    }
});

function sendRequest(input) {
    // AJAX Request

    var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=B1ZEbug15MxOMytsld9mFTDamm0C7lpp";
    console.log("url: " + url);
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function(e) {

        var data = e.target.response;
        pushToDOM(data);
    });
}

//Display
function pushToDOM(input) {
    var response = JSON.parse(input);

    var container = document.querySelector(".js-container");
    container.innerHTML = "";
    var imageURLS = response.data;

    imageURLS.forEach(function(image) {
        var imageURL = image.images.fixed_height.url;
        container.innerHTML += " <img src= \"" + imageURL + "\" class=\".container-image\">  ";
    });
}