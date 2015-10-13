/**
 * 
 */


$(document).ready(function(){
	
//	var pageState = $.cookie("pageState");
	var pageState = $.session.get('pageState');
//	alert("pageState : "+pageState);
	
	$("#loadpage").load(pageState+".jsp");
	
	if(pageState == "checkout")
	{
//		alert("state : "+pageState);
		$.session.set('checkout','checkout');
		getProductfromCookie("prod");
	}
	else
		{
			$.session.remove('checkout');
		}
	
});