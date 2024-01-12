chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'surlignerH2') {
      var h2Elements = document.querySelectorAll('h2');
      h2Elements.forEach(function(element) {
        element.style.backgroundColor = 'yellow';
      });
  
      // Réponse à l'envoyeur
      sendResponse({message: 'Titres H2 surlignés avec succès !'});
    }
  });