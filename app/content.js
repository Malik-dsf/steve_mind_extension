
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'surlignerH2') {
      var h2Elements = document.querySelectorAll('h2');
      h2Elements.forEach(function(element) {
        element.style.backgroundColor = 'yellow';
      });
  
      // Réponse à l'envoyeur
      sendResponse({message: 'Titres H2 surlignés avec succès !'});
    } else if (request.action === 'compterMots') {
      // Récupérer le contenu du corps de la page
      var contenuPage = document.body.innerText;
  
      // Supprimer les caractères spéciaux et les espaces multiples
      var contenuNettoye = contenuPage.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  
      // Diviser le contenu en mots
      var mots = contenuNettoye.split(" ");
  
      // Compter le nombre de mots
      var nombreDeMots = mots.length;
  
      // Afficher le résultat dans la console du contenu de la page
      console.log("Le nombre de mots sur la page est : " + nombreDeMots);
  
      // Réponse à l'envoyeur
      sendResponse({message: 'Nombre de mots sur la page : ' + nombreDeMots});
    }
  });
  