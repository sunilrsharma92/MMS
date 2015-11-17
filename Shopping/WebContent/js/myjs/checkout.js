var objhandleRequest = new handleRequest();
var count = 0;
var orderAddress = "";
$(document).ready(function()
{
	try
	{
		var loginData = $.session.get("loginData");
		var addresslistcheck = "";
		if(loginData != null)
		{
			var sessionData = JSON.parse(loginData);
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
			var stopInterval = setInterval(function()
			{
				num++;
				if(num > 1)
				{
					clearInterval(stopInterval);
					var addressList = $.session.get("addressList");
					count = $.session.get("count");
					addresslistcheck = addressList;
					if(address != "" && address != null)
					{
						count = parseInt(count) + 1;
						addressList = addressList + '<div class="divSection">' + '<div class="space"></div>' + '<label><input id="radio' + count + '" value="one" style="margin-top: 0px;" name="addList" type="radio">Address ' + count + " : </label>" + '<div class="space"></div>' + '<textarea  id="textarea' + count + '" rows="5" cols="30">' + address + "</textarea>" + "</div>";
					}
					if(address2 != "" && address2 != null)
					{
						count = parseInt(count) + 1;
						addressList = addressList + '<div class="divSection">' + '<div class="space"></div>' + '<label><input id="radio' + count + '" value="one" style="margin-top: 0px;" name="addList" type="radio">Address ' + count + " : </label>" + '<div class="space"></div>' + '<textarea  id="textarea' + count + '" rows="5" cols="30">' + address2 + "</textarea>" + "</div>";
					}
					if(addressList != "" && addressList != null)
					{
						$("#displayExistAddress").empty();
						document.getElementById("displayExistAddress").innerHTML = addressList;
						$("#addresstable").hide();
					}
					else
					{
						document.getElementById("newadd").checked = true;
						$("#displayExistAddress").empty();
						document.getElementById("displayExistAddress").innerHTML = "No address found.";
						$("#newadd").trigger("click");
					}
				}
			}, 500);
		}
		$("#acordionsignin").click(function()
		{
			$("#loginlabel").trigger("click");
			$("#logintab").trigger("click");
			$.session.set("checkoutlogin", "checkoutlogin");
		});
		$("#acordionsignup").click(function()
		{
			$("#loginlabel").trigger("click");
			$("#signuptab").trigger("click");
		});
		$("#newadd").click(function()
		{
			$("#displayExistAddress").hide();
			$("#addresstable1").hide();
			$("#newaddtextarea").show();
		});
		$("#oldadd").click(function()
		{
			if(addresslistcheck != "" && addresslistcheck != null && addresslistcheck.length != 0)
			{
				$("#displayExistAddress").show();
				$("#newaddtextarea").hide();
				$("#addresstable1").hide();
			}
			else
			{
				$("#displayExistAddress").show();
			}
		});
		$(".2nd_next").click(function()
		{
			$.session.set("checkout", "checkout");
			checklogin();
		});
		if(loginData != null)
		{
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
	catch (e)
	{
		writeLogAjax("Exception on Checkout.js : " + e, 0);
	}
});
function appendProducttoCheckoutTable(productList1, totalpurchase, total, count)
{
	try
	{
		$("#monylabel").empty();
		$("#monylabel").append(total);
		$("#prodCount").empty();
		$("#prodCount").append(count);
		$("#appendProducttoCheckoutCart").empty();
		$("#appendProducttoCheckoutCart").append(productList1);
		$("#totalpurchaseOnCheckout").empty();
		$("#totalpurchaseOnCheckout").append(totalpurchase);
		$("#totalpurchaseOnCheckoutHidden").val(total);
	}
	catch (e)
	{
		console.log("checkout.js appendProducttoCheckoutTable Exception : " + e);
	}
}
function conformOrder()
{
	try
	{
		var totalammount = $("#totalpurchaseOnCheckoutHidden").val();
		var address = "";
		var ammount = $("#totalpurchaseOnCheckout").text();
		if(ammount == "Total Price : Rs 0.00 " || ammount == "Total Price : Rs 0 " || ammount == "Total Price : Rs 0.0 " || ammount == "Total Price : NaN" || ammount == "Total Price : " || ammount == "")
		{
			jqueryconform("Message", "Your cart is empty. \n Add product in cart to proceed further.");
			$("#conformOrder").attr("data-toggle", "");
			return false;
		}
		else
		{
			$.confirm(
			{
			title : "Alert Message !",
			backgroundDismiss : false,
			content : "<b>Total Ammount : </b>" + totalammount + "\n <b>Delivery Address : </b>" + orderAddress + "\n",
			confirm : function()
			{
				$(".overlay1").show();
				var loginData = $.session.get("loginData");
				if(loginData != null)
				{
					var sessionData = JSON.parse(loginData);
					var userid = sessionData.key;
					var userType = sessionData.userType;
					objhandleRequest.conformOder(userid, userType, orderAddress);
					return true;
				}
			},
			cancel : function()
			{
				$("#conformOrder").attr("data-toggle", "");
			}
			});
			$.cookie("key", null);
		}
	}
	catch (e)
	{
		console.log("checkout.js conformOrder Exception : " + e);
	}
}
function proceed(condition)
{
	try
	{
		var txtareaAddress = "";
		if(condition == "login")
		{
			var loginData = $.session.get("loginData");
			if(loginData == null)
			{
				jqueryconform("Message", "Please login first to proceed");
				$("#nextAccordion").attr("data-toggle", "");
				return false;
			}
			else
			{
				$("#nextAccordion").attr("data-toggle", "collapse");
				return true;
			}
		}
		if(condition == "address")
		{
			var oldadd = $("#oldadd").is(":checked");
			if(oldadd == true)
			{
				for (var i = 0; i < count; i++)
				{
					var j = parseInt(i) + 1;
					var bool = $("#radio" + j).is(":checked");
					if(bool == true)
					{
						txtareaAddress = "";
						txtareaAddress = $("#textarea" + j).val();
					}
				}
				if(txtareaAddress != "" && txtareaAddress != null && txtareaAddress.length != 0)
				{
					orderAddress = txtareaAddress;
					$(".2nd_next").attr("data-toggle", "collapse");
				}
				else
				{
					jqueryconform("Message", "Please select atleast one address or add a new address");
					$("#nextAccordion1").attr("data-toggle", "");
					return false;
				}
			}
		}
		if(condition == "newaddress")
		{
			var newadd = $("#newadd").is(":checked");
			if(newadd == true)
			{
				var newAddress = document.getElementById("newatxtddress").value;
				if(newAddress != "" && newAddress != null && newAddress.length != 0)
				{
					orderAddress = newAddress;
					$("#newaddressnbtn").attr("data-toggle", "collapse");
					checklogin();
					return true;
				}
				else
				{
					jqueryconform("Message", "Please Enter the new address details");
					$("#newaddressnbtn").attr("data-toggle", "");
					return false;
				}
			}
		}
	}
	catch (e)
	{
		console.log("checkout.js proceed Exception : " + e);
	}
}
function checklogin()
{
	try
	{
		var loginData = $.session.get("loginData");
		if(loginData != null)
		{
			var sessionData = JSON.parse(loginData);
			var userid = sessionData.key;
			var userType = sessionData.userType;
			$.session.set("checkout", "checkout");
			objhandleRequest.handledisplayProductinCart("", "withlogin", userid, userType);
		}
		else
		{
			getProductfromCookie("prod");
		}
	}
	catch (e)
	{
		console.log("checkout.js checklogin Exception : " + e);
	}
}