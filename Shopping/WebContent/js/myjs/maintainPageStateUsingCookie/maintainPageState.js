$(document).ready(function()
{
	var pageState = $.session.get("pageState");
	$("#loadpage").empty();
	$("#loadpage").load(pageState + ".jsp");
	if(pageState == "checkout")
	{
		$.session.set("checkout", "checkout");
		getProductfromCookie("prod");
	}
	else
	{
		$.session.remove("checkout");
	}
});