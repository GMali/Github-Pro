'use strict';
/*global assigneeCount:false, fileFolding:false, toggleNotes:false */

// Run the features when the current active tab has finished updating
chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
    assigneeCount();
    fileFolding();
    toggleNotes();
    sendResponse(message.msg);
});