'use strict';
/*global $:false */

function fileFolding() {
    var buttonSelector       = '.github-pro-file-fold',
        buttonParentSelector = '.file',
        fileContentSelector  = '.blob-wrapper, .render-wrapper',
        fileEditSelector     = '.file-actions [aria-label="View the whole file"]',
        buttonTemplate       = '<a class="btn btn-sm github-pro-file-fold">Fold</a>';

    // Remove the buttons
    $(buttonSelector).remove();

    // Add a button to each file's action section
    $(fileEditSelector).each(function() {
        $(this).before(buttonTemplate);
    });

    // Listener for the buttons
    $(buttonSelector).click(function(event) {
        var $this = $(this);
        $this.parents(buttonParentSelector).find(fileContentSelector).toggle();
        $this.text($this.text() === 'Fold' ? 'Unfold': 'Fold');
    });
}
