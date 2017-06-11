function checkForAdWindow() {
  const adWindow = document.querySelector('#gregbox-outer')

  if(!adWindow) {
    setTimeout(checkForAdWindow, 1000)
    return;
  }

  const backdrop = adWindow.nextSibling;
  const button = backdrop.nextSibling;
  const img = button.nextSibling;



  adWindow.parentNode.removeChild(backdrop);
  adWindow.parentNode.removeChild(button);
  adWindow.parentNode.removeChild(img);
  adWindow.parentNode.removeChild(adWindow);

}

checkForAdWindow();
