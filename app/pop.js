
//fonction surligner les h2
document.addEventListener('DOMContentLoaded', function() {
    var surlignerBtn = document.getElementById('surlignerBtn');
    surlignerBtn.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'surlignerH2'}, function(response) {
          console.log(response);
        });
      });
    });
  });