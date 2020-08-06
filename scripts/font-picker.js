// TODO: Uncomment the code below

// 2: MAIN FUNCTION:
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

// 1. RECEIVE MESSAGE (from popup.js) & call main function
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'font') toggleFontPicker();
  }
);
