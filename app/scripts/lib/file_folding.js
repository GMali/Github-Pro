'use strict';
/*global $:false */
/*jshint unused:false */

function fileFolding() {
    var buttonSelector      = '.github-pro-file-fold',
        fileContentSelector = '.blob-wrapper',
        fileActionsSelector = '.file .meta .actions',
        buttonTemplate      = '<a class="minibutton github-pro-file-fold">Fold</a>';

    // Remove the buttons
    $(buttonSelector).remove();

    // Add a button to each file's action section
    $(fileActionsSelector).each(function() {
        $(this).prepend(buttonTemplate);
    });

    // Listener for the buttons
    $(buttonSelector).click(function(event) {
        var $this = $(this);
        $this.parent().parent().parent().find(fileContentSelector).toggle();
        $this.text($this.text() === 'Fold' ? 'Unfold': 'Fold');
    });
}