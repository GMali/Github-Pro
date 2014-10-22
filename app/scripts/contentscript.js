'use strict';
/*global prAssignees:false, diffFolding:false */

// https://github.com/SemanticSugar/adroll/pulls?*
if (window.location.pathname === '/SemanticSugar/adroll/pulls') {
    prAssignees();
}

// https://github.com/SemanticSugar/adroll/pull/*
if (window.location.pathname.indexOf('/SemanticSugar/adroll/pull/') >= 0) {
    diffFolding();
}