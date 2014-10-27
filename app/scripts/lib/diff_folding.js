'use strict';
/*global $:false */
/*jshint unused:false */

var diffFolding = function diffFolding() {
    var buttonSelector      = '.github-pro-diff-fold',
        fileContentSelector = '.blob-wrapper',
        fileActionsSelector = '.file .meta .actions',
        buttonTemplate      = '<a class="minibutton github-pro-diff-fold">Fold</a>';

    // Remove the buttons
    $(buttonSelector).remove();

    // Add a button to each file's action section
    $(fileActionsSelector).each(function() {
        $(this).prepend(buttonTemplate);
    });

    // Listener for the buttons
    $(buttonSelector).click(function(event) {
        var $this = $(this);
        $this.parents().find(fileContentSelector).toggle();
        $this.text($this.text() === 'Fold' ? 'Unfold': 'Fold');
    });
};