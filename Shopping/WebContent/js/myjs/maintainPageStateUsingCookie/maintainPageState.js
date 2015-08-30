/**
 * 
 */


$(document).ready(function(){
	
	var pageState = $.cookie("pageState");
//	alert("pageState : "+pageState);
	
	$("#loadpage").load(pageState+".jsp");
	
});