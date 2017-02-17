




chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' black!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="black"'
  });
});