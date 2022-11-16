function addPip() {
  const videos = document.querySelectorAll("video");
  for (let index = 0; index < videos.length; index++) {
    const video = videos[index];
    video.removeAttribute("disablepictureinpicture");
  }
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: addPip,
    });
  }
});
