// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

var requestURL = 'https://api.magicthegathering.io/v1/cards';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = (e) => fillPage(request.response);

function fillPage(myObject) {

    var urlText = 'card-specific.html?id=';
    myObject.cards.forEach(card => {

        if (card.imageUrl != undefined || card.imageUrl != null) {

            var cards = document.getElementById("cards");

            var outerDiv = document.createElement('div');
            outerDiv.setAttribute('class', 'col-sm-4');
            cards.appendChild(outerDiv);

            var innerDiv = document.createElement('div');
            innerDiv.setAttribute('class', 'card-container');
            outerDiv.appendChild(innerDiv);

            var h4 = document.createElement('h4');
            h4.innerHTML = card.name;
            innerDiv.appendChild(h4);

            var img = document.createElement('img');
            img.setAttribute('src', card.imageUrl);
            innerDiv.appendChild(img);

            var a = document.createElement('a');
            a.innerHTML = "View More";
            a.setAttribute('src', urlText + card.multiverseid);
            a.setAttribute('class', "btn btn-success");
            innerDiv.appendChild(a);

        }
    });
}