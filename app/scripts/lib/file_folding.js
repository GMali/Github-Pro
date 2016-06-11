'use strict';
/*global $:false */
/*jshint unused:false */

function fileFolding() {
    var buttonSelector      = '.github-pro-file-fold',
        fileContentSelector = '.blob-wrapper, .render-wrapper',
        fileEditSelector = '.file-actions [aria-label="View the whole file"]',
        buttonTemplate      = '<a class="btn btn-sm github-pro-file-fold">Fold</a>';

    // Remove the buttons
    $(buttonSelector).remove();

    // Add a button to each file's action section
    $(fileEditSelector).each(function() {
        $(this).before(buttonTemplate);
    });

    // Listener for the buttons
    $(buttonSelector).click(function(event) {
        var $this = $(this);
        $this.parent().parent().parent().find(fileContentSelector).toggle();
        $this.text($this.text() === 'Fold' ? 'Unfold': 'Fold');
    });
}
