// refer to question 3 before development starts for scope document

document.getElementById("aboutText").innerHTML = document.getElementById("aboutText").innerHTML.replace(/Magic/g, "Something");

var moreInfo = document.getElementById("moreInfoTrigger");
var infoContent = document.getElementById("moreInfoContent");
moreInfo.addEventListener("click", function(e) {
		infoContent.style.display = (infoContent.style.display === "none") ? "block" : "none";
});

