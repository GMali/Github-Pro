'use strict';
/*global $:false */
/*jshint unused:false */

/**
 * Sorts an object by it's value
 * @param  {Object} assignees key: String, value: Number
 * @return {Array}            sorted object values. [ ["name", count], ... ]
 */
function sortAssignees(assignees) {
    return Object.keys(assignees)
            .map(function (user) { return [user, assignees[user]]; })
            .sort(function (user1, user2) { return user1[1] - user2[1]; });
}

/**
 * The feature method
 * Calculates the PRs assigned to each active assignee and displays them in
 * descending order. Helpful when you want to get your PRs looked at, but
 * assigning them to busy folks might not get it seen soon enough.
 */
var assigneeCount = function assigneeCount() {
    var assignees         = {},
        sortedAssignees   = [],
        $avatars          = $('.table-list-cell-avatar a img'),
        // Features might have this pattern, so writing it this way to make it
        // easier to refactor later
        containerClass    = 'github-pro-assignee-count',
        containerSelector = '.' + containerClass,
        $container        = $('<div>').addClass(containerClass);

    // Remove the existing container
    $(containerSelector).remove();

    // We only want to show the container if assignees exist on the page
    if ( $avatars.length > 0 ) {

        // Collect assignee data from DOM
        $avatars.each(function() {
            var user = $(this).attr('alt');
            assignees[user] = (assignees[user] || 0) + 1;
        });

        // Sort
        sortedAssignees = sortAssignees(assignees);

        // Create the container
        sortedAssignees.forEach(function (assignee) {
            $container.prepend('<span class="subnav-item">' + assignee[0] + ': ' + assignee[1] + '</span>');
        });

        // Render!
        $('#js-issues-toolbar').before($container);
    }
};