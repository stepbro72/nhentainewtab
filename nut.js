chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
  selection = info.selectionText;
  let targetSite;

  switch (info.menuItemId) {
    case 'nhentai':
      targetSite = "https://nhentai.net/search/?q=";
      break;
    case 'sextb':
      targetSite = "https://sextb.net/search/";
      break;
    case 'missav':
      targetSite = "https://missav.com/en/search/";
      break;
    case 'javlibrary':
      targetSite = "http://www.javlibrary.com/en/vl_searchbyid.php?keyword=";
      break;
  }

  //open the selection in a new tab
  chrome.tabs.create({ url: targetSite + selection, active: false });
}
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Open %s in nhentai.net',
    type: 'normal',
    id: 'nhentai',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    title: 'Open %s in sextb.net',
    type: 'normal',
    id: 'sextb',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    title: 'Open %s in missav.com',
    type: 'normal',
    id: 'missav',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    title: 'Open %s in javlibrary.com',
    type: 'normal',
    id: 'javlibrary',
    contexts: ['selection']
  });

});