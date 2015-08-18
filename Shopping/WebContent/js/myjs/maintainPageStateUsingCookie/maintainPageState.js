/**
 * 
 */


$(document).ready(function(){
	
	var pageState = $.cookie("pageState");
	$("#loadpage").load(pageState+".jsp");
	
});