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
		$("#loadpagecontent").load("myorders.jsp");
		break;
	case "customerPage":
		$("#loadpagecontent").load("customerPage.jsp");
		break;
	case "changepassword":
		$("#loadpagecontent").load("changepassword.jsp");
		break;
	case "addresses":
		$("#loadpagecontent").load("addresses.jsp");
		break;
	case "deactivate":
		$("#loadpagecontent").load("deactivate.jsp");
		break;
	default:
		alert("Comming Soon..");
		break;
	}
}