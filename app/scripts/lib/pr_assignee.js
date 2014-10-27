'use strict';
/*global $:false */
/*jshint unused:false */

var prAssignees = function prAssignees() {
    var assignees         = {},
        $avatars          = $('.table-list-cell-avatar a'),
        $container        = $('<ul>').addClass('github-pro-pr-assignees'),
        containerSelector = '.github-pro-pr-assignees';

    // Remove the existing container
    $(containerSelector).remove();

    // We only want to show the container if assignees exist on the page
    if ( $avatars.length > 0 ) {

        // Collect assignee data from DOM
        $avatars.each(function() {
            var label = $(this).attr('aria-label');
            var assigneeName = label.replace('View everything assigned to ', '');
            assignees[assigneeName] = (assignees[assigneeName] || 0) + 1;
        });

        // Create the container
        for (var user in assignees) {
            $container.prepend('<li>' + user + ': ' + assignees[user] + '</li>');
        }

        $('.site').append($container);
    }
};