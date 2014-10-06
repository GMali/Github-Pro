'use strict';
/*global $:false */

/*******************************************************************************
 * FUNCTION DEFINITIONS
 ******************************************************************************/

var displayAssignees = function displayAssignees() {
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


var enableDiffFolding = function enableDiffFolding() {
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

/*******************************************************************************
 * Feature enabling on URL
 ******************************************************************************/

// https://github.com/SemanticSugar/adroll/pulls?*
if (window.location.pathname === '/SemanticSugar/adroll/pulls') {
    displayAssignees();
}

// https://github.com/SemanticSugar/adroll/pull/*
if (window.location.pathname.indexOf('/SemanticSugar/adroll/pull/') >= 0) {
    enableDiffFolding();
}