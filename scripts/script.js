// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

window.onload = makeApiCall;

function makeApiCall(e, name) {
    var requestUrl = "https://api.magicthegathering.io/v1/cards";

    if (name) {
        requestUrl = requestUrl + "?name=\"" + name + "\"";
    }

    var request = new XMLHttpRequest();
    request.open("GET", requestUrl);

    request.responseType = "json";

    request.send();

    request.onload = (e) => fillPage(request.response);
}

function fillPage(myObject) {

    var urlText = "card-specific.html?id=";

    if(myObject.cards.length < 1) {
        var cards = document.getElementById("cards");
        cards.innerHTML = "No results found";
        return;
    }

    myObject.cards.forEach(card => {

        var cards = document.getElementById("cards");

        var outerDiv = document.createElement("div");
        outerDiv.setAttribute("class", "col-sm-4");
        cards.appendChild(outerDiv);

        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "card-container");
        outerDiv.appendChild(innerDiv);

        var h4 = document.createElement("h4");
        h4.innerHTML = card.name;
        innerDiv.appendChild(h4);

        var img = document.createElement("img");
        if (card.imageUrl) {
            img.setAttribute("src", card.imageUrl);
        } else {
            img.setAttribute("src", "https://via.placeholder.com/223x310");
        }
        innerDiv.appendChild(img);

        var a = document.createElement("a");
        a.innerHTML = "View More";
        a.setAttribute("href", urlText + card.multiverseid);
        a.setAttribute("class", "btn btn-success");
        innerDiv.appendChild(a);
    });
}

document.getElementById("searchButton").onclick = searchBtn;

function searchBtn() {
    document.getElementById("cards").innerHTML = "";
    var searchInput = document.getElementById("search").value;
    makeApiCall(null, searchInput);
}