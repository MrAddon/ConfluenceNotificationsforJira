// ==UserScript==
// @name Add Notifications of Confluence in Jira
// @namespace http://tampermonkey.net/
// @version 0.1
// @description try to take over the world!
// @author You
// @match https://jira.odigeo.com/*
// @grant none
// ==/UserScript==

AJS.$(document).ready(function() {

var x = jQuery("#system-help-menu").parent();
var currentpage = document.location.origin;
var unreaded = "";
var iframesrc = currentpage+"/wiki/plugins/servlet/notifications-miniview#notification";
$.ajax({
url : iframesrc,
success : function (data) {
unreaded = $(data).find('.unread').length;
},
error : function () {
unreaded = ("-1");
}
}).done(function(){
var btn = $("<li id='notification-button' ><a id='notifications-anchor' href='#' class='mw-anchor read aui-nav-imagelink' title='Open Notifications (g , n)'>"+
"<div class='badge-i aui-icon aui-icon-small aui-iconfont-comment'></div>"+
"<span class='badge-w'><span class='badge'>"+unreaded+"</span></span>"+
"</a></li>");

x.append(btn);
$("#notifications-anchor").click(function(event){
event.preventDefault();
window.open(iframesrc, "newwin", 'modal=yes,width=611px,height=611px,resizable=no,scrollbars=no,top=50px,left=476px');
});
var unread_timer = setInterval(function() {
$.ajax({
url : iframesrc,
success : function (data) {
unreaded = $(data).find('.unread').length;
$("#notification-button .badge").text(unreaded);
    //alert(unreaded)
},
error : function (jqXHR, textStatus, errorThrown) {
//console.log(textStatus);
}
});
}, 5000);
});

});