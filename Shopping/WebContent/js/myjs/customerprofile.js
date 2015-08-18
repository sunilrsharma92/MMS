/**
 * 
 */

function loadPage(id)
{
	var idofpage = $(id).attr("id");
//	alert(idofpage);
	switch(idofpage)
	{
	case "orders":
		$("#loadpagecontent").load("myorders.html");
		break;
	case "customerPage":
		$("#loadpagecontent").load("customerPage.html");
		break;
	case "changepassword":
		$("#loadpagecontent").load("changepassword.html");
		break;
	case "addresses":
		$("#loadpagecontent").load("addresses.html");
		break;
	case "deactivate":
		$("#loadpagecontent").load("deactivate.html");
		break;
	default:
		alert("Comming Soon..");
		break;
	}
}