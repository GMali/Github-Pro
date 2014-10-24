'use strict';
/*global prAssignees:false, diffFolding:false */

// Run the features when the current active tab has finished updating
chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
    prAssignees();
    diffFolding();
    sendResponse(message.msg);
});