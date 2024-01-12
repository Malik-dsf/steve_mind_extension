
  document.addEventListener('DOMContentLoaded', function() {
    // Fonction surligner les H2
    var surlignerBtn = document.getElementById('surlignerBtn');
    surlignerBtn.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'surlignerH2'}, function(response) {
          console.log(response);
        });
      });
    });
  
    // Fonction compter les mots
    var compterMotsBtn = document.getElementById('compterMots');
    compterMotsBtn.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'compterMots' });
      });
    });
  });
  
