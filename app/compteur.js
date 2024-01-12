chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'compterMots') {
    var contenuPage = document.body.innerText;
    var contenuNettoye = contenuPage.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    var mots = contenuNettoye.split(" ");
    var nombreDeMots = mots.length;

    alert("Le nombre de mots sur la page est : " + nombreDeMots);
  }
});
