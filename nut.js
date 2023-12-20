chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
    selection = info.selectionText;
    //open the selection in a new tab
    chrome.tabs.create({ url: "https://nhentai.net/search/?q=" + selection, active: false});
    //change the title of the context menu item
    chrome.contextMenus.update("selection", {
        title: "Open " + selection + " in nhentai.net"
    });
}
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Open %s in nhentai.net',
    type: 'normal',
    id: 'selection',
    contexts: ['selection']
  });
});