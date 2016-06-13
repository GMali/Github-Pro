'use strict';
/*global $:false */
/*jshint unused:false */

function toggleNotes() {
    var siblingSelector = '.diffbar .diffbar-item.js-select-menu',
        buttonSelector = '.js-toggle-all-notes',
        $singleToggles = $('.show-file-notes input'),
        buttonTemplate  = '<div class="diffbar-item"><label><input type="checkbox" checked="checked" class="js-toggle-all-notes" style="margin-right: 5px;">Show all notes</label></div>';

    // Add the checkbox
    $(siblingSelector).after(buttonTemplate);

    // Easier to simulate the click than toggling all comments and checkboxes
    $(buttonSelector).change(function(event) {
        $.each($singleToggles, function(index, value) {
            value.click();
        });
    });
}
