// refer to question 3 before development starts for scope document

var aboutText = document.getElementById("aboutText").innerHTML.replace(/Magic/g, "Something");
document.getElementById("aboutText").innerHTML = aboutText;


var moreInfo = document.getElementById("moreInfoTrigger");
var infoContent = document.getElementById("moreInfoContent");
moreInfo.addEventListener("click", function(e) {
		infoContent.style.display = (infoContent.style.display === "none") ? "block" : "none";
});
