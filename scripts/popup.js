// ===================================================== //
// JavaScript for your popup.html menu goes in this file //
// ===================================================== //

// CHEESIFY EXTENSION ======================================================= //
// 2. SEND MESSAGE (to cheesify.js) (send a message to the active tab to 'cheesify' it):
function sendCheesifyMsg() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { // Finds tabs that are active in the current window
    chrome.tabs.sendMessage(tabs[0].id, { action: 'cheesify' }); // Sends a message ('cheesify' object) to the first tab (tabs[0])
  });
}

// 1: Listen to click 'Cheesify' button event, trigger the function above
document.getElementById('cheesify').addEventListener('click', event => sendCheesifyMsg());


// FONT-PICKER EXTENSION ======================================================= //
function sendFontMsg() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'font' });
  });
}

document.getElementById('font-picker').addEventListener('click', event => sendFontMsg());


// READING-LIST EXTENSION ======================================================= //
// 2. SEND MESSAGE (to background.js) (send a message containing the current page's title & url to our background script):
function addItemToList() {
  btnPostToAPI.disabled = true; // disable the button while processing
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.runtime.sendMessage({ action: 'postItem', title: tabs[0].title, url: tabs[0].url }, (data) => {
      btnPostToAPI.disabled = false; // reactivate the button once finished
    });
  });
}

// 1: Listen to click 'Add to Read List' button event, trigger the function above
const btnPostToAPI = document.getElementById('post-to-api')
btnPostToAPI.addEventListener('click', event => addItemToList());
