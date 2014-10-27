'use strict';
/*global prAssignees:false, fileFolding:false */

// Run the features when the current active tab has finished updating
chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
    prAssignees();
    fileFolding();
    sendResponse(message.msg);
});