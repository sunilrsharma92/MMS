var objhandleRequest=new handleRequest();
//*******************************************************************************************************************	
var count = 0;
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
					
					var num = 0;
					var stopInterval = setInterval(function(){
						num++;
						if(num>1)
							{
								clearInterval(stopInterval);
								
								var addressList = $.session.get('addressList');
								count = $.session.get('count');
								addresslistcheck = addressList;
								if(address !="" && address !=null)
									{
//									alert("address = "+address);
										count = parseInt(count)+1;
										addressList = addressList + '<div class="divSection">'
										+'<div class="space"></div>'
										+'<label><input id="radio'+count+'" value="one" style="margin-top: 0px;" name="addList" type="radio">Address '+count+' : </label>'
										+'<div class="space"></div>'
										+'<textarea  id="textarea'+count+'" rows="5" cols="30">'+address+'</textarea>'
										+'</div>';
									}
								if(address2 !="" && address2 !=null)
								{
//									alert("address2 = "+address2);
										count = parseInt(count)+1;
										addressList = addressList + '<div class="divSection">'
										+'<div class="space"></div>'
										+'<label><input id="radio'+count+'" value="one" style="margin-top: 0px;" name="addList" type="radio">Address '+count+' : </label>'
										+'<div class="space"></div>'
										+'<textarea  id="textarea'+count+'" rows="5" cols="30">'+address2+'</textarea>'
										+'</div>';
								}
//								alert("count : before : "+count)
//								$.session.remove('count');
//								$.session.set('count',count);
//								alert(addressList);
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
					}, 500);
					
					
		}

	$("#acordionsignin").click(function() {

		$("#loginlabel").trigger("click");
		$("#logintab").trigger("click");
		$.session.set('checkoutlogin','checkoutlogin')
		
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
		$("#totalpurchaseOnCheckoutHidden").val(total);
	}
	
	function conformOrder()
	{
		var totalammount = $("#totalpurchaseOnCheckoutHidden").val();
		var address = "";
		
		for(var i=0; i<count; i++)
		{
		var j = parseInt(i)+1;
		var bool = $("#radio"+j).is(":checked");
			if(bool == true)
				{
					address = "";
					address = $("#textarea"+j).val();
				}
			
		}
		alert("totalammount : "+totalammount+" address : "+address);
		
		jAlert("Order Successful");	
	}
	
	function proceed(condition)
	{
		var txtareaAddress = "";
		if(condition == "login")
			{
				var loginData = $.session.get('loginData');
				if(loginData == null)
					{
						jAlert('Please login first to proceed', 'Message');
						$("#nextAccordion").attr('data-toggle','');
						return false;
					}
				else
					{
						$("#nextAccordion").attr('data-toggle','collapse');
						return true;
					}
			}
		if(condition == "address")
			{
			var oldadd = $("#oldadd").is(":checked");
			
			if(oldadd == true)
			{
				
				for(var i=0; i<count; i++)
				{
				var j = parseInt(i)+1;
				var bool = $("#radio"+j).is(":checked");
					if(bool == true)
						{
							txtareaAddress = "";
							txtareaAddress = $("#textarea"+j).val();
						}
					
				}
					if(txtareaAddress != "" && txtareaAddress != null && txtareaAddress.length != 0)
						{
						$(".2nd_next").attr('data-toggle','collapse');
						/*jConfirm('Address : '+txtareaAddress, 'Message',function(e){
							if(e == true)
								{
									return true;
								}
							else
								{
//									$(".2nd_next").attr('data-toggle','');
									return false;
								}
						});*/
							
						}
					else
						{
							jAlert('Please select atleast one address or add a new address','Message');
							$("#nextAccordion1").attr('data-toggle','');
							return false;
						}
				
			}
				
			}
		if(condition == "newaddress")
			{
				var newadd = $("#newadd").is(":checked");
				if(newadd == true)
				{
					var newAddress = $("#newatxtddress").val();
					if(newAddress != "" && newAddress != null && newAddress.length != 0)
					{
						$("#newaddressnbtn").attr('data-toggle','collapse');
						return true;
					}
					else
					{
						jAlert('Please Enter the new address details','Message');
						$("#newaddressnbtn").attr('data-toggle','');
						return false;
					}
				}
			
			}
		
	}