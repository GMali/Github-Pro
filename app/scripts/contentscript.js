'use strict';
/*global assigneeCount:false, fileFolding:false */

// Run the features when the current active tab has finished updating
chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
    assigneeCount();
    fileFolding();
    sendResponse(message.msg);
});