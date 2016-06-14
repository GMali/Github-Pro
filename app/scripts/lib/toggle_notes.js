'use strict';
/*global $:false */
/*jshint unused:false */

function toggleNotes() {
    var toggleButtonSelector = '.js-toggle-all-notes';

    // Don't run this if we've already added the button
    if ($(toggleButtonSelector).length) {
        return;
    }

    var $singleToggles = $('.show-file-notes input'),
        buttonTemplate = '<div class="diffbar-item"><label><input type="checkbox" checked="checked" class="js-toggle-all-notes" style="margin-right: 5px;">Show all notes</label></div>';

    // Add the checkbox
    $('.diffbar .diffbar-item.js-select-menu').after(buttonTemplate);

    // Easier to simulate the click than toggling all comments and checkboxes
    $(toggleButtonSelector).change(function(event) {
        $.each($singleToggles, function(index, value) {
            value.click();
        });
    });
}
