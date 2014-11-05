'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('Github Pro\nVersion: ', details.previousVersion);
});


// Every time a tab has been updated (first load or dom change via ajax)
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

    // And has completed loading
    if (changeInfo.status === 'complete') {

        // And if the tab is a Github tab
        var url = new URL(tab.url);
        if ( url.origin === 'https://github.com') {

            // Send a message to that page's contentscript!
            // Basically, the message listener will run all the features
            chrome.tabs.sendMessage(tab.id, {msg: 'page has been loaded'}, function(msg) {
                console.log(msg);
            });
        }
    }
});