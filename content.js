
function checkForAdWindow() {
  const adWindow = document.querySelector('#gregbox-outer')

  if(!adWindow) {
    setTimeout(checkForAdWindow, 1000)
    return;
  }

  const backdrop = adWindow.nextSibling;

  adWindow.parentNode.removeChild(backdrop);
  adWindow.parentNode.removeChild(adWindow);

}

checkForAdWindow();
