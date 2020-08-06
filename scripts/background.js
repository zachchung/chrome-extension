// ================================================= //
// Code for your background script goes in this file //
// ================================================= //

const postBinUrl = 'https://postb.in/1596635470640-1886278439778' // 👈 Paste your PostBin url here

// 2: MAIN FUNCTION (make a POST request to PostBin using fetch()):
function postItem(title, url) {
  return fetch(postBinUrl, {
    method: 'POST',
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ title: title, url: url })
  })
}

// 1. RECEIVE MESSAGE (from popup.js) & call main function
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'postItem') postItem(request.title, request.url).then(response => sendResponse(response)); // send to popup.js to reactive the button?
    return true // Necessary when sendResponse() is sent asynchronously so that the script that sent the message waits for the response.
  }
);
