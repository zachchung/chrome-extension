// ======================================================= //
// Code for your Cheesify content script goes in this file //
// ======================================================= //

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // actions based on the request (which corresponds to the object we sent in our message)
    if (request.action === 'cheesify') cheesify();
  }
);

// TODO: Add the image replacement script below
function cheesify() {
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/${img.width}x${img.height}/?cheese&${Math.random()}`;
    img.srcset = img.src;
  })
}
