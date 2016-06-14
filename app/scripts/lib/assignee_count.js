'use strict';
/*global $:false */

/**
 * The feature method
 * Calculates the PRs assigned to each active assignee and displays them in
 * descending order. Helpful when you want to get your PRs looked at, but
 * assigning them to busy folks might not get it seen soon enough.
 */
function assigneeCount() {
    var assignees         = {},
        sortedAssignees   = [],
        $avatars          = $('.table-list-cell-avatar-stack a'),
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
            var username     = $(this).attr('aria-label').replace('View everything assigned to ', ''),
                userFullName = $(this).find('img').attr('alt');

            // Store it like hashmap
            assignees[username] = _incrementAssignee(username, userFullName, assignees[username]);
        });

        // Sort
        sortedAssignees = _sortAssignees(assignees);

        // Create the container
        sortedAssignees.forEach(function (assignee) {
            var $badge = _createBadge(assignee);
            $container.prepend($badge);
        });

        // Render!
        $('#js-issues-toolbar').before($container);
    }
}


/*******************************************************************************
 * HELPER FUNCTIONS
 *******************************************************************************


/**
 * Keep track of assginee duplicates. Classic hashmap solution for duplicates,
 * but the value has extra information about the assignee/user
 * @param  {String} username     assignee's Github username (unique)
 * @param  {String} userFullName assignee's full name (Firstname Lastname)
 * @param  {Object} assignee     value of the hashmap.
 * @return {Object}              updated value of the hashmap
 */
function _incrementAssignee (username, userFullName, assignee) {
    assignee = assignee || { count : 0, fullName : userFullName, username : username };
    assignee.count++;
    return assignee;
}

/**
 * Sorts an object by it's value
 * @param  {Object} assignees key: String, value: Number
 * @return {Array}            sorted object values. [ ["name", count], ... ]
 */
function _sortAssignees (assignees) {
    return Object.keys(assignees)
            .map(function (username) { return [username, assignees[username]]; })
            .sort(function (user1, user2) { return user1[1].count - user2[1].count; });
}

/**
 * Creates an badge-like element that has the assignee name and count. it is
 * rendered as an anchor tag with href that will toggle the assignee filter
 * @param  {String}         assignee an assignee object from the assignees hash
 * @return {jQuery Object}           the object that needs to get rendered
 */
function _createBadge (assignee) {
    var url = window.location;
    var assigneeLink = url.origin + url.pathname + '/assigned/' + assignee[1].username;
    var assigneeIndex = url.href.indexOf('/assigned');
    var href = assigneeIndex >= 0 ? url.href.slice(0, assigneeIndex) : assigneeLink;

    return $('<a>')
        .addClass('subnav-item')
        .attr('href', href)
        .attr('data-github-pro-username', assignee[0])
        .html(assignee[1].fullName + ': ' + assignee[1].count);
}
