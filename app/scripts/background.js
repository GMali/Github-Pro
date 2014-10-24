'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('Github Pro\nVersion: ', details.previousVersion);
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

    if (changeInfo.status === 'complete') {
        var url = new URL(tab.url);

        if ( url.origin === 'https://github.com') {

            // The current open tab will be listening to this message if it is
            // running contentscript.js. Which, only runs on github.com
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {msg: 'msg'}, function(msg) {
                    console.log(msg);
                });
            });
        }
    }
});