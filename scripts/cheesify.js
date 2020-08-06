// ======================================================= //
// Code for your Cheesify content script goes in this file //
// ======================================================= //

// 1. RECEIVE MESSAGE (from popup.js) & call main function:
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // if action = 'cheesify' object (sent from popup.js), call cheesify function
    if (request.action === 'cheesify') cheesify();
  }
);

// 2: MAIN FUNCTION (select all images and replace with random cheese images)
function cheesify() {
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/${img.width}x${img.height}/?cheese&${Math.random()}`;
    img.srcset = img.src;
  })
}
