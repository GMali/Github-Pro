'use strict';
/*global $:false */
/*jshint unused:false */

var prAssignees = function prAssignees() {
    var assignees = {};

    $('.table-list-cell-avatar a').each(function() {
        var label = $(this).attr('aria-label');
        var assignee = label.replace('View everything assigned to ', '');
        if (assignees[assignee]) {
            assignees[assignee]++;
        } else {
            assignees[assignee] = 1;
        }
    });

    var assigneeList = '<ul id="extension_pr_assignees">';

    for (var user in assignees) {
        var li = '<li>' + user + ': ' + assignees[user] + '</li>';
        assigneeList += li;
    }

    assigneeList += '</ul>';

    $('.site').append(assigneeList);
};