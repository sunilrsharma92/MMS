/**
 * 
 */


$(document).ready(function(){
	
//	var pageState = $.cookie("pageState");
	var pageState = $.session.get('pageState');
//	alert("pageState : "+pageState);
	
	$("#loadpage").load(pageState+".jsp");
	
});