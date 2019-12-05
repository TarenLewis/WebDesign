document.querySelector(".js-go").addEventListener('click', function() {

    const animals = ["dog", "cat", "giraffe", "penguin", "koala", "goat", "dolphin"];

    for (let i = 0; i < animals.length; i++) {
        setTimeout(function() {
            sendRequest(animals[i]);
        }, 2000 * i);
    };

})


function sendRequest(input) {

    // AJAX Request
    let url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=B1ZEbug15MxOMytsld9mFTDamm0C7lpp";
    let GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function(e) {
        let data = e.target.response;
        pushToDOM(data);
    });
}

//Display
function pushToDOM(input) {

    let response = JSON.parse(input);
    console.log(response);

    const container = document.querySelector(".js-container");
    container.innerHTML = "";
    let imageURLS = response.data;

    let img1 = response.data[0].images.fixed_height.url;
    container.innerHTML = " <img src= \"" + img1 + "\" class=\".container-image\">  ";

}