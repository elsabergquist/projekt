
var svenska = ` Yourcase är ett nytänkande företag vars vision är att eliminera
                nyproduktionen av plast. Vi säljer datorfodral som är tillverkade
                av återvunnet material såsom plast. Vi värnar om vår planet och
                vill göra det lättare för alla att göra det.`;

var engelska = `Yourcase is a new-thinking company with the vision to eliminate
                newproduction of plastic. We sell computercases wich are made of
                recycled material such as plastic. We take care of the enviorment
                so it won't be too hard for you to do it.`;

var nuvarandeSprak = "Svenska";

var textRuta = document.getElementById("bildtext1");

function changeLanguage() {
  if (nuvarandeSprak == "Svenska") {
    textRuta.innerHTML = engelska;
    nuvarandeSprak = "Engelska";
    document.getElementById("English").innerText = "Svenska";
  }
  else {
    textRuta.innerHTML = svenska;
    nuvarandeSprak = "Svenska";
    document.getElementById("English").innerText = "English";
}

}
document.getElementById("English").onclick = function () {
    changeLanguage();
}
