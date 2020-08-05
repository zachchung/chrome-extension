// TODO: Uncomment the code below

let active = false;

function toggleFontPicker() {
  const displayBoxTemplate = '<div id="font-picker-box">My Font Picker</div>';
  if (active) {
    document.getElementById('font-picker-box').remove();
    document.removeEventListener("mouseover", getFont);
  } else {
    document.querySelector('body').insertAdjacentHTML('afterbegin', displayBoxTemplate);
    document.addEventListener("mouseover", getFont);
  }
  active = !active
}

const getFont = (event) => {
  document.getElementById('font-picker-box').innerText = window.getComputedStyle(event.target).fontFamily.split(",")[0];
}

// TODO: Add a listener using runtime.onMessage.addListener to trigger the toggleFontPicker() action when clicking the button in popup.html
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // actions based on the request (which corresponds to the object we sent in our message)
    // if action = 'cheesify' object (sent from popup.js), call cheesify fn
    if (request.action === 'font') toggleFontPicker();
  }
);
