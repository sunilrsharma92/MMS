var objhandleRequest=new handleRequest();
//*******************************************************************************************************************	

$(document).ready(function(){
try
{
	var loginData = $.session.get('loginData');
	var addresslistcheck = "";
		if (loginData != null)
		{
			var sessionData = JSON.parse(loginData);
//				alert("UserDate : "+JSON.stringify(sessionData));
					var address = sessionData.address1;
					var address2 = sessionData.address2;
					var street = sessionData.street;
					var state = sessionData.state;
					var city = sessionData.city;
					var pincode = sessionData.pinCode;
					var key = sessionData.key;
					var userType = sessionData.userType;
					
					$("#address1Save").val(address);
					$("#address2Save").val(address2);
					$("#streetSave").val(street);
					$("#citySave").val(city);
					$("#pincodeSave").val(pincode);
					
					objhandleRequest.getUserAddressfromShippingaddress(key, userType);
					var addressList = $.session.get('addressList');
					var count = $.session.get('count');
					addresslistcheck = addressList;
					if(address !="" && address !=null)
						{
//						alert("address = "+address);
							count = parseInt(count)+1;
							addressList = addressList + '<div class="divSection">'
							+'<div class="space"></div>'
							+'<label><input id="" value="one" style="margin-top: 0px;" name="addList" type="radio">Address '+count+' : </label>'
							+'<div class="space"></div>'
							+'<textarea  rows="5" cols="30">'+address+'</textarea>'
							+'</div>';
						}
					if(address2 !="" && address2 !=null)
					{
//						alert("address2 = "+address2);
							count = parseInt(count)+1;
							addressList = addressList + '<div class="divSection">'
							+'<div class="space"></div>'
							+'<label><input id="" value="one" style="margin-top: 0px;" name="addList" type="radio">Address '+count+' : </label>'
							+'<div class="space"></div>'
							+'<textarea  rows="5" cols="30">'+address2+'</textarea>'
							+'</div>';
					}
//					alert(addressList);
					if(addressList !="" && addressList != null)
						{
							$("#displayExistAddress").empty();
							document.getElementById("displayExistAddress").innerHTML = addressList;
							$("#addresstable").hide();
						}
					else
						{
							$("#addresstable1").show();
							document.getElementById("addresstable1").style.display = 'block';
						}
					
		}

	$("#acordionsignin").click(function() {

		$("#loginlabel").trigger("click");
		$("#logintab").trigger("click");
		
	});
	
	
//*******************************************************************************************************************	
	
	$("#acordionsignup").click(function() {
		
		$("#loginlabel").trigger("click");
		$("#signuptab").trigger("click");
		
	});
	
	$("#newadd").click(function(){
		$("#displayExistAddress").hide();
		$("#addresstable1").hide();
		$("#newaddtextarea").show();
	});
	
	$("#oldadd").click(function(){
		if(addresslistcheck !="" && addresslistcheck != null && addresslistcheck.length !=0)
			{
				$("#displayExistAddress").show();
				$("#newaddtextarea").hide();
				$("#addresstable1").hide();
			}
		else
			{
				$("#addresstable1").show();
			}
	});
	
	$(".2nd_next").click(function(){
		
		$.session.set('checkout','checkout');
		getProductfromCookie("prod");
		
	});

	
//	var loginData = $.session.get('loginData');
	if(loginData != null)
	{
// 		$("#panelbody").hide();
		$("#acordionsignin").hide();
		$("#acordionsignup").hide();
		$(".2nd_previous").hide();
		$("#nextAccordion").trigger("click");
		
	}
	else
		{
			$("#acordionsignin").show();
			$("#acordionsignup").show();
			$(".2nd_previous").show();
			
		}
}
catch (e) {
	console.log("Exception on Checkout.js : "+e);
}
});
	
	function appendProducttoCheckoutTable(productList, totalpurchase, total, count)
	{
		$("#monylabel").empty();
		$("#monylabel").append(total);
		
		$("#prodCount").empty();
		$("#prodCount").append(count);

		$("#appendProducttoCheckoutCart").empty();
		$("#appendProducttoCheckoutCart").append(productList);
	
		$("#totalpurchaseOnCheckout").empty();
		$("#totalpurchaseOnCheckout").append(totalpurchase);
	}
	
	function conformOrder()
	{
		jAlert("Order Successful");
	}