var contextMenuItem = {
    id: "wooordhunt", 
    title:"Translate on WooordHunt '%s'",
    contexts: ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

function onRequest() {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString(); "
    }, function(selection) {
        chrome.tabs.create({
            url: "https://wooordhunt.ru/word/" + selection[0]
        });
    });
};

chrome.contextMenus.onClicked.addListener(onRequest);
chrome.browserAction.onClicked.addListener(onRequest);