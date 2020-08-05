// ======================================================= //
// Code for your Cheesify content script goes in this file //
// ======================================================= //

// 1: Listen for messages on the content page using chrome.runtime.onMessage
// RECEIVE MESSAGE (from popup.js):
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // actions based on the request (which corresponds to the object we sent in our message)
    // if action = 'cheesify' object (sent from popup.js), call cheesify fn
    if (request.action === 'cheesify') cheesify();
  }
);

// 2: Add the image replacement script below
function cheesify() {
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/${img.width}x${img.height}/?cheese&${Math.random()}`;
    img.srcset = img.src;
  })
}
