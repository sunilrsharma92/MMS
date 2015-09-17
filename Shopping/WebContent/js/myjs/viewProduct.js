
$(document).ready(function(){
	
	var zoominage = $.session.get('zoominage');
	var prodDisc = $.session.get('prodDisc');
	
	document.getElementById("viewProductdiv").innerHTML = zoominage;
		
	document.getElementById("productdisc").innerHTML = prodDisc;
	
	
	
});

function disablebtn(productid)
{
	
	document.getElementById("btn"+productid).disabled = true;
	
}

function enablebtn(productid)
{
	
	document.getElementById("btn"+productid).disabled = false;
		
}