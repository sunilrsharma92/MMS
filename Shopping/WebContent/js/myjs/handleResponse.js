function handleAllListResponse(jsonMsg)
{
	try
	{
		callServlet(jsonMsg, function(strJsonResponse)
		{
			if(strJsonResponse != null && strJsonResponse.length > 10)
			{
				var response = JSON.parse(strJsonResponse);
				var command = response.command;
				var status = parseInt(response.status);
				
				if(command != 2002 && command != 2005 && command != 2014 && command != 2015 && command != 2016 && command != 2006)
				{
					writeLogAjax("command : " + command + " status : " + status + " JSON Response FROM SERVLET :  " + JSON.stringify(response), 1);
				}
				else
				{
					writeLogAjax("command : " + command + " status : " + status, 1);
				}
				
				listResponseHandler(response, command, status);
			}
			else
			{
				$(".overlay").show().delay(100).fadeOut();
				jqueryconform("Alert Message", "Response is blank");
				writeLogAjax("***********************************No Response FROM SERVLET***********************************", 0);
			}
		});
	}
	catch (e)
	{
		console.log("handleAllListResponse(jsonMsg) Exception : " + e);
		writeLogAjax("handleAllListResponse(jsonMsg) Exception : " + e, 0);
	}
}
function listResponseHandler(response, command, status)
{
	try
	{
		switch (status)
		{
			case 3:
				switch (command)
				{
					case 2000:
						handleMainCategoryResponse(response);
						break;
					case 2001:
						break;
					case 2002:
						handleProductArrayForAutoCompleteResponse(response);
						break;
					case 2010:
						handleShopProfDispResponse(response);
						break;
					case 2011:
						handleAddtoCartWithLoginResponse(response);
						break;
					case 2012:
						handleRemoveProductFromCartResponse(response);
						break;
					case 2013:
						handleConformOrderResponse(response);
						break;
					case 2014:
						handleOrderHistoryResponse(response);
						break;
					case 2015:
						handleOrderDetailsResponse(response);
						break;
					case 2016:
						handleOrderDetailsEmailTemplateResponse(response);
						break;
					case 2003:
						handleProductDisplayResponse(response);
						break;
					case 2006:
						handleShopListResponse(response);
						break;
					case 2004:
						break;
					case 2005:
						handleProductDisplayinCartResponse(response);
						break;
					case 2007:
						handleUserShippingAddressResponse(response);
						break;
					case 2051:
						handleLoginResponse(response);
						break;
					case 2052:
						handleSignUpResponse(response);
						break;
					case 2054:
						handleForgetPasswordResponse(response);
						break;
					case 2055:
						handleSaveUserDetailsResponse(response);
						break;
					case 2056:
						handleResetPasswordResponse(response);
						break;
					case 2057:
						handleProfilePicResponse(response);
						break;
					case 2020:
						getOrders(response);
						break;
					case 2021:
						setOrdersStatus(response);
						break;
				}
				break;
			case 1:
				break;
			case 2:
				switch (command)
				{
					case 1005:
						$("#appendProducttoCart").empty();
						$("#productCountOnCart").empty();
						$("#monylabel").empty();
						$("#prodCount").empty();
						$("#appendProducttoCheckoutCart").empty();
						$("#totalpurchase").empty();
						$("#totalpurchaseOnCheckout").empty();
						$("#totalpurchase").empty();
						$("#monylabel").append("0");
						$("#prodCount").append("0");
						$("#totalpurchase").append('<span class="tlbprce">Total Price :</span>' + '<span class="totalprize"><strong> Rs 0.00</strong> </span>');
						$("#totalpurchaseOnCheckout").append('<span class="tlbprce">Total Price :</span>' + '<span class="totalprize"><strong> Rs 0.00</strong> </span>');
						document.getElementById("productCountOnCart").innerHTML = "0";
						break;
					case 1007:
						handleUserShippingAddressResponse(response);
						break;
					case 1010:
						handleShopProfDispResponse(response);
						break;
					case 1013:
						var statusdesc = response.statusdesc;
						jqueryconform("Message", statusdesc);
						break;
					case 1016:
						var statusdesc = response.statusdesc;
						jqueryconform("Message", statusdesc);
						$("#profileLink").trigger("click");
						break;
					case 1051:
						handleLoginResponse(response);
						break;
					case 1052:
						handleSignUpResponse(response);
						break;
					case 1054:
						handleForgetPasswordResponse(response);
						break;
					case 1055:
						handleSaveUserDetailsResponse(response);
						break;
					case 1056:
//						handleChangePasswordResponse(response);
						break;
					case 1021:
						setOrdersStatus(response);
						break;
					
				}
				break;
			case 10:
				switch (command)
				{
					case 1052:
						handleSignUpResponse(response);
						break;
					case 1051:
						handleLoginResponse(response);
						break;
				}
				break;
			case 11:
				switch (command)
				{
					case 1052:
						handleSignUpResponse(response);
						break;
				}
				break;
			case 12:
				switch (command)
				{
					case 1052:
						handleSignUpResponse(response);
						break;
				}
				break;
			case 5:
				break;
			case 6:
				break;
			case 7:
				break;
			default:
				break;
		}
	}
	catch (e)
	{
		console.log("handleResponse Exception : " + e);
	}
}