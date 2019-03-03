"use strict";
window.onload = makeApiCall();

// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function makeApiCall() {
    // variable for the id
    var id = getQueryStringValue("id");
    var requestUrl = "https://api.magicthegathering.io/v1/cards/" + id;
    console.log(requestUrl);
    var request = new XMLHttpRequest();
    request.open("GET", requestUrl);
    request.responseType = "json";
    request.send();

    request.onload = (e) => fillPage(request.response);
}

function fillPage(myObject) {
    if (myObject.card) {
        var image = document.getElementById("image");
        image.setAttribute("src", myObject.card.imageUrl);

        document.getElementById("name").innerHTML = myObject.card.name;
        document.getElementById("about").innerHTML = myObject.card.text;
        document.getElementById("rarity").innerHTML = myObject.card.rarity;
        document.getElementById("color").innerHTML = myObject.card.colors;
    } else {
        var row = document.getElementById("row");
        row.innerHTML = "";
        var p = document.createElement("p");
        p.innerText = "No card found";
        row.appendChild(p);

    }

}