// ==UserScript==
// @name Add Notifications of Confluence in Jira
// @namespace http://tampermonkey.net/
// @version 0.1
// @description try to take over the world!
// @author You
// @match https://jira.coinmarketrank.io/*
// @grant none
// ==/UserScript==

AJS.$(document).ready(function() {

'use strict';
var x = AJS.$("#system-help-menu").parent();
var currentpage = document.location.origin;
var unreaded = "1";
var iframesrc = currentpage+"/wiki/plugins/servlet/notifications-miniview#notification";
var btn = AJS.$("<li><a id='notifications-anchor' href='#' class='mw-anchor read aui-nav-imagelink' title='Open Notifications (g , n)'>"+
"<div class='badge-i aui-icon aui-icon-small aui-iconfont-comment'></div>"+
"<span class='badge-w' style='display:none;'><span class='badge'>"+unreaded+"</span></span>"+
"</a></li>");

x.append(btn);
AJS.$("#notifications-anchor").click(function(event){
event.preventDefault();
window.open(iframesrc, "newwin", 'modal=yes,width=611px,height=611px,resizable=no,scrollbars=no,top=50px,left=476px');
});

});