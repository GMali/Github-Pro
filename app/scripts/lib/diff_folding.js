'use strict';
/*global $:false */
/*jshint unused:false */

var diffFolding = function diffFolding() {
    $('.github-pro-diff-fold').remove();

    var $files = $('.file');

    $files.each(function() {
        var $actions = $(this).find('.meta .actions');
        $actions.prepend('<a class="minibutton github-pro-diff-fold">Fold</a>');
    });

    $('.github-pro-diff-fold').click(function(event) {
        event.preventDefault();
        var $foldButton = $(event.currentTarget);
        $foldButton.parent().parent().parent().find('.blob-wrapper').slideToggle(function() {
            if ($foldButton.text() === 'Fold') {
                $foldButton.text('Unfold');
            } else {
                $foldButton.text('Fold');
            }
        });
    });
};