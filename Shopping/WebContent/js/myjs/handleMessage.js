var objhandleRequest = new handleRequest();
var customerDetails = "";
var localOrderId = "";
function handleMainCategoryResponse(response)
{
	try
	{
		var category = "";
		var subcategory = "";
		var a = "";
		var maincategory = response.category;
		var submaincategory = response.subcategory;
		if(maincategory != "")
		{
			for ( var i in maincategory)
			{
				var categoryId = maincategory[i].categoryid;
				var categoryName = maincategory[i].categoryname;
				category = category + "<a href='#demo" + categoryId + "' id='" + categoryId + "' class='list-group-item ' data-toggle='collapse' data-parent='#MainMenu'>" + categoryName + "<span class='pull-right glyphicon glyphicon-menu-down'></span></a>";
				var check1 = "<div class='collapse' id='demo" + categoryId + "'>";
				if(submaincategory != "")
				{
					subcategory = "<div class='collapse' id='demo" + categoryId + "'>";
					for ( var j in submaincategory)
					{
						var categoryId1 = submaincategory[j].categoryid;
						var subcategoryName = submaincategory[j].subcategoryname;
						var subcategoryid = submaincategory[j].subcategoryid;
						if(categoryId1 == categoryId)
						{
							subcategory = subcategory + "<a onclick='getSelectedProduct(this," + categoryId + ");' id='" + subcategoryid + "' style='background-color: white;' class='list-group-item'>" + subcategoryName + "</a>";
						}
					}
				}
				if(subcategory.length != check1.length)
				{
					category = category + subcategory + "</div>";
				}
				else
				{
					category = category;
				}
				subcategory = null;
			}
		}
		$("#categorybox").empty();
		$("#categorybox").append(category);
	}
	catch (e)
	{
		writeLogAjax("handleMainCategoryResponse :::::: Exception" + e, 0);
	}
}
function handleProductArrayForAutoCompleteResponse(response)
{
	try
	{
		var autoCompleteLabel = response.autoCompleteLabel;
		var action = response.action;
		$.session.set("response", response);
		autocompleteLabel(response, action);
	}
	catch(e)
	{
		console.log("handleProductArrayForAutoCompleteResponse Exception : "+e);
	}
	
}
function handleShopProfDispResponse(response)
{
	try
	{
		var action = response.status;
		$.session.set("shopprofileResponse", response);
		
		if(action == 3)
		{
			var key = response.key;
			$.session.set("shopProfileKey", key);
			var companyname = response.companyname;
			var firstName = response.firstName;
			var lastName = response.lastName;
			var address1 = response.address1;
			var city = response.city;
			var state = response.state;
			var pinCode = response.pinCode;
			var profileImg = response.profileImg;
			var viewshop = $.session.get("viewshop");
			$("#shopprofileimg").attr("src", profileImg);
//			alert("viewshop : "+viewshop);
			if(viewshop == "viewshop")
			{
				$("label[for='firstNameDisplay']").html(companyname);
				$(".hidemenu").hide();
				$.session.set("viewshop", "");
//				alert("companyname : "+companyname);
			}
			else
			{
				$("label[for='firstNameDisplay']").html(firstName + " " + lastName);
				$(".hidemenu").show();
//				alert("Name : "+firstName + " " + lastName);
			}
			$("label[for='stateDisplay']").html(state);
			$("label[for='addressDisplay']").html(address1);
			$("label[for='cityDisplay']").html(city);
			$("label[for='pincodeDisplay']").html(pinCode);
		}
		else
		{
			jAlert(statusdesc, "Error occurred while populating shop details");
		}
		writeLogAjax("handleShopProfDispResponse :::::: " + JSON.stringify(response), 1);
	}
	catch (e)
	{
		writeLogAjax("handleShopProfDispResponse :::::: Exception" + e, 0);
		console.log("handleShopProfDispResponse :::::: Exception" + e);
	}
}
function handleProductDisplayResponse(response)
{
	try
	{
		var productList = "";
		var product = response.product;
		for ( var i in product)
		{
			var productid = product[i].productid;
			var price = product[i].price;
			var stock = product[i].stock;
			var prodName = product[i].prodName;
			var images = product[i].images;
			var stockvalue = "";
			var stockcrtbtn = "";
			if(stock == "0")
			{
				stockvalue = "red";
				stockcrtbtn = 'disabled="disabled" style="background-color: #FF0000;border-color: #FF0000;"';
			}
			else
			{
				if(stock != "0")
				{
					stockvalue = "green";
					stockcrtbtn = "";
				}
			}
			var viewProductclick = "viewProduct('" + images + "','" + prodName + "','" + price + "','" + stockvalue + "','" + productid + "','" + stockcrtbtn + "');";
			var loadProductViewPage = "loadProductViewPage('viewProduct');";
			productList = productList + '<div class="col-md-2 col-sm-3  col-xs-4 wrap">' + '<div class="portfolio-item" onclick="' + loadProductViewPage + " " + viewProductclick + '">' + '<div class="inner-wrap">' + '<span id="ok' + productid + '" class="pull-right glyphicon glyphicon-ok oktick" style="display:none;"></span>' + '<a href="#">' + '<img id="' + productid + '" class="img-portfolio img-responsive" src="' + images + '">' + "</a>" + "</div>" + "</div>" + '<div class="align-center">' + '<div class="productname ">' + prodName + "</div>" + '<div class="productprice" style="color: ' + stockvalue + '";>Rs.' + price + "</div>" + '<div class="cartbtn "><button type="button" ' + stockcrtbtn + ' onclick="addproducttoCArt(' + productid + ')" class="btn btn-success cartsz " id="btn' + productid + '">Add <span class="pull-right glyphicon glyphicon-shopping-cart"></span></button></div>' + "</div>" + "</div>";
		}
		$("#productList").empty();
		$("#productList").append('<hr class="small"><h3 class="font" align="center">Search Result</h3><hr class="small">' + productList);
		var condition = "okenable";
		var loginData = $.session.get("loginData");
		if(loginData != null)
		{
			var productidArray = response.productid;
			var count = productidArray.length;
			for ( var i in productidArray)
			{
				var gettingProductId = productidArray[i].productid;
				try
				{
					document.getElementById("ok" + gettingProductId).style.display = "block";
					document.getElementById("btn" + gettingProductId).disabled = true;
				}
				catch (e)
				{
					console.log("handleProductDisplayResponse disable button Exception : " + e);
				}
			}
			$(".productCountOnCart").empty();
			document.getElementById("productCountOnCart").innerHTML = count;
			document.getElementById("productCountOnCart1").innerHTML = count;
			$.session.set("itemsinCart", count);
		}
		else
		{
			getProductfromCookie(condition);
		}
	}
	catch (e)
	{
		writeLogAjax("handleProductDisplayResponse :::::: Exception" + e, 0);
	}
}
function handleShopListResponse(response)
{
	try
	{
		var shopdiv = "";
		$.session.set("loadShopPage", response);
		var shopList = response.product;
		for ( var i in shopList)
		{
			var shopid = shopList[i].shopid;
			var companyname = shopList[i].companyname;
			var address1 = "" + shopList[i].address1;
			var address2 = "" + shopList[i].address2;
			var state = shopList[i].state;
			var city = shopList[i].city;
			var street = shopList[i].street;
			var images = shopList[i].images;
			var address = "";
			if(address1 != "" && address1 != null && address1.length > 4)
			{
				address = address + "<p>Address 1: " + address1 + "</p>";
			}
			if(address2 != "" && address2 != null && address2.length > 4)
			{
				address = address + "<p>Address 2: " + address2 + "</p>";
			}
			var loadProfilePage = "loadShopProfilePage('" + shopid + "');";
			shopdiv = shopdiv + '<div class="col-md-4 back" onclick="' + loadProfilePage + '">' + '           <div class="main-wrap">' + '              <div class="shop-img boxshadow">' + '                  <a href="#"> <img class="iim img-responsive" src="' + images + '"></a>' + '                  <div class="shop-details">' + "                    <p>Name: " + companyname + "</p>" + address + "                    <p>City: " + city + "</p>" + "                    <p>State: " + state + "</p>" + "                    <p>Street: " + street + "</p>" + "                  </div>" + "              </div>" + "              " + "        " + "            </div>" + '            <div style="height: 68px;">' + '              <a href="#" class="button" style="width: 100%; font-size: 20px; color: rgb(0, 170, 153); margin-top: 9px;">Shop Now</a>' + "            </div>" + "        </div>";
		}
		$("#shopList").empty();
		$("#shopList").append(shopdiv);
	}
	catch (e)
	{
		writeLogAjax("handleShopDisplayResponse :::::: Exception" + e, 0);
	}
}
function handleAddtoCartWithLoginResponse(response)
{
	var itemsinCart = response.itemsinCart;
	$(".productCountOnCart").empty();
	document.getElementById("productCountOnCart").innerHTML = itemsinCart;
	document.getElementById("productCountOnCart1").innerHTML = itemsinCart;
	$.session.set("itemsinCart", itemsinCart);
}
function handleRemoveProductFromCartResponse(response)
{
	console.log("handleRemoveProductFromCartResponse : " + JSON.stringify(response));
	var loginData = $.session.get("loginData");
	if(loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
		$.session.set("removeProduct", "removeProduct");
		objhandleRequest.handledisplayProductinCart("", "withlogin", userid, userType);
	}
	else
	{
		getProductfromCookie("prod");
	}
}
function handleConformOrderResponse(response)
{
	console.log("handleConformOrderResponse : " + JSON.stringify(response));
	var loginData = $.session.get("loginData");
	if(loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
		objhandleRequest.handledisplayProductinCart("", "withlogin", userid, userType);
		
		$.session.set("ordernotification","ordernotification");
		var orderid = response.orderid;
		localOrderId = orderid;
//		alert("orderid : "+orderid);
		objhandleRequest.getOrdersHistory(userid, userType, 1015, orderid);
		
	}
}
function handleOrderHistoryResponse(response)
{
	dataGridOrderHistory(response);
}
function handleOrderDetailsResponse(response)
{
	var action = $.session.get("ordernotification");
	if(action == "ordernotification")
	{
		EmailProductPurchased(response);
		$.session.remove("ordernotification");
	}
	else
	{
		displayProductPurchased(response);
	}
	
}

function handleOrderDetailsEmailTemplateResponse(response)
{

	var statusdesc = response.statusdesc;
	jqueryconform("Message", statusdesc);
	
	var loginData = $.session.get("loginData");
	if(loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
		objhandleRequest.handledisplayProductinCart("", "withlogin", userid, userType);
		$("#profileLink").trigger("click");
	}
	
}

function EmailProductPurchased(response)
{
	try
	{
		var shopidArray = [];
		var purchasearray = [];
		var action = "";
		var productList = "";
		var GrandTotal = 0;
		var template = "";
		
		var GlobalResponse = response.Order;
//		alert("GlobalResponse : "+JSON.stringify(GlobalResponse));
		for ( var i in GlobalResponse)
		{
			var GlobalShopid = GlobalResponse[i].shopid;
			var GlobalOrderid = GlobalResponse[i].orderid;
			if(i == 0)
			{
				shopidArray.push([ GlobalShopid ]);
			}
			else
			{
				for ( var j in shopidArray)
				{
					if(shopidArray[j] == GlobalShopid)
					{
						action = "false";
					}
					else
					{
						if(shopidArray[j] != GlobalShopid)
						{
							action = "true";
						}
					}
				}
				if(action == "true")
				{
					shopidArray.push([ GlobalShopid ]);
				}
			}
		}
		for ( var k in shopidArray)
		{
			var shopkeeperid = shopidArray[k];
			for ( var l in GlobalResponse)
			{
				var shopkeeperidresponse = GlobalResponse[l].shopid;
				if(shopkeeperidresponse == shopkeeperid)
				{
					var userid = GlobalResponse[l].userid;
					var orderid = GlobalResponse[l].orderid;
					var datetime = GlobalResponse[l].datetime;
					var shopid = GlobalResponse[l].shopid;
					var productid = GlobalResponse[l].productid;
					var productname = GlobalResponse[l].productname;
					var productimg = GlobalResponse[l].productimg;
					var productprice = GlobalResponse[l].productprice;
					var total = GlobalResponse[l].total;
					GrandTotal = GrandTotal + total;
					var quantity = GlobalResponse[l].quantity;
					var shopname = GlobalResponse[l].companyname;
					var name = GlobalResponse[l].name;
					var phone = GlobalResponse[l].phone;
					var address1 = GlobalResponse[l].address1;
					var address2 = GlobalResponse[l].address2;
					var city = GlobalResponse[l].city;
					var state = GlobalResponse[l].state;
					var street = GlobalResponse[l].street;
					var pincode = GlobalResponse[l].pincode;
					var country = GlobalResponse[l].country;
					var img = GlobalResponse[l].img;
					var type = GlobalResponse[l].userType;
					var add = "";
//					console.log(address1.length + " " + address2.length);
					if(address1 != "" && address1 != null && address1.length > 6)
					{
						add = address1;
					}
					else
					{
						if(address2 != "" && address2 != null && address2.length > 6)
						{
							add = address2;
						}
						else
						{
							add = "(No address to display)";
						}
					}
					/*if(type == "supplier")
					{
						shopname = "";
						shopname = name;
						add = add + ". Contact Number : " + phone;
					}*/
					productList = productList + '<tr style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;page-break-inside: avoid;">'+
					'                        <td class="cimg" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;width: 5%;line-height: 1.42857143;vertical-align: top;border-top: 1px solid #ddd;background-color: #fff!important;"><img style="width: 20px; height: 20px;" id="" src="'+productimg+'"></td>'+
					'                        <td class="cname" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;width: 50%;text-align: left;line-height: 1.42857143;vertical-align: top;border-top: 1px solid #ddd;background-color: #fff!important;">'+productname+'</td>'+
					'                        <td class="cqty" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;line-height: 1.42857143;vertical-align: top;border-top: 1px solid #ddd;background-color: #fff!important;">'+quantity+'</td>'+
					'                        <td class="cprice" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;line-height: 1.42857143;vertical-align: top;border-top: 1px solid #ddd;background-color: #fff!important;">'+productprice+'</td>'+
					'						 </tr>';
					
				}
			}
			var table = '<tr><td colspan = "5">' + '<table style="width: 100%">' + '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 19px;">' + shopname + "</td></tr>" + '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 14px;">' + add + "</td></tr>" + "</table>" + "</td></tr>" + productList + '<tr><td colspan = "5" style="background-color: #2D97D9;"></td></tr>';			
			purchasearray = [];
			productList = "";
			template = template + table;
			table = "";
		}
		
		purchaseTemplet(template, shopname, add, GrandTotal, localOrderId);
		
	}
	catch (e)
	{
		console.log("customerProfile.js --> displayProductPurchased --> Exception --> " + e);
	}
}

function handleProductDisplayinCartResponse(response)
{
	try
	{
		writeLogAjax("handleProductDisplayinCartResponse :::::: " + JSON.stringify(response), 1);
		var productList = "";
		var productList1 = "";
		var totalpurchase = "";
		var total = 0;
		var count = 0;
		var product = response.product;
		if(product == "")
		{
			$("#appendProducttoCart").empty();
		}
		for ( var i in product)
		{
			count++;
			var productid = product[i].productid;
			var price = product[i].price;
			var stock = product[i].stock;
			var prodName = product[i].prodName;
			var images = product[i].images;
			var quantity = product[i].quantity;
			total = total + (price * quantity);
			var quantityfunctionAdd = "quantity('demo" + productid + "','add','" + price + "','" + productid + "');";
			var quantityfunctionMinus = "quantity('demo" + productid + "','minus','" + price + "','" + productid + "');";
			var quantityfunctionAdd1 = "quantity('demo1" + productid + "','add','" + price + "','" + productid + "');";
			var quantityfunctionMinus1 = "quantity('demo1" + productid + "','minus','" + price + "','" + productid + "');";
			productList = productList + "<tr>" + '<td class="cimg"><img class="cartimgsize" id="' + productid + '" src="' + images + '"></td>' + '<td class="cname">' + prodName + "</td>" + '<td class="csize">' + stock + " kg</td>" + '<td class="cqty">' + '<div class="input-group bootstrap-touchspin quantitybtn">' + '<span class="input-group-btn">' + '<button class="btn btn-default bootstrap-touchspin-down" id="minus' + productid + '" onclick="' + quantityfunctionMinus + '" type="button">-</button></span>' + '<input id="demo' + productid + '" type="text" disabled="disabled" value="' + quantity + '" name="demo1" class="form-control cartquantity">' + '<span class="input-group-btn">' + '<button class="btn btn-default bootstrap-touchspin-up" id="add' + productid + '" onclick="' + quantityfunctionAdd + '" type="button">+</button>' + "</span>" + "</div>" + "</td>" + '<td class="cprice">' + price + "</td>" + '<td align="center"><button type="button" onclick="removeproductfromCArt(' + productid + ')" class="btn btn-danger btn-xs cartdelbtn"><span id="cdel" class="glyphicon glyphicon-remove"></span></button></td>' + "</tr>";
			productList1 = productList1 + "<tr>" + '<td class="cimg"><img class="cartimgsize" id="' + productid + '" src="' + images + '"></td>' + '<td class="cname">' + prodName + "</td>" + '<td class="csize">' + stock + " kg</td>" + '<td class="cqty">' + '<div class="input-group bootstrap-touchspin quantitybtn">' + '<span class="input-group-btn">' + '<button class="btn btn-default bootstrap-touchspin-down" id="minus1' + productid + '" onclick="' + quantityfunctionMinus1 + '" type="button">-</button></span>' + '<input id="demo1' + productid + '" type="text" disabled="disabled" value="' + quantity + '" name="demo1" class="form-control cartquantity">' + '<span class="input-group-btn">' + '<button class="btn btn-default bootstrap-touchspin-up" id="add1' + productid + '" onclick="' + quantityfunctionAdd1 + '" type="button">+</button>' + "</span>" + "</div>" + "</td>" + '<td class="cprice">' + price + "</td>" + '<td align="center"><button type="button" onclick="removeproductfromCArt(' + productid + ')" class="btn btn-danger btn-xs cartdelbtn"><span id="cdel" class="glyphicon glyphicon-remove"></span></button></td>' + "</tr>";
		}
		$.session.set("itemsinCart", count);
		$(".productCountOnCart").empty();
		document.getElementById("productCountOnCart").innerHTML = count;
		document.getElementById("productCountOnCart1").innerHTML = count;
		totalpurchase = totalpurchase + '<span class="tlbprce">Total Price :</span>' + '<span class="totalprize"><strong> Rs ' + total + "</strong> </span>";
		$("#appendProducttoCart").empty();
		$("#appendProducttoCart").append(productList);
		$("#totalpurchase").empty();
		$("#totalpurchase").append(totalpurchase);
		$("#totalcartAmmounthidden").val(total);
		var removeProduct = $.session.get("removeProduct");
		if(removeProduct == "removeProduct")
		{
			$(".productCountOnCart").empty();
			document.getElementById("productCountOnCart").innerHTML = count;
			document.getElementById("productCountOnCart1").innerHTML = count;
			$.session.set("removeProduct", "");
		}
		var checkout = $.session.get("checkout");
		if(checkout != null && checkout !== "" && checkout == "checkout")
		{
			console.log("hii");
			appendProducttoCheckoutTable(productList1, totalpurchase, total, count);
		}
		$(".overlay").hide();
	}
	catch (e)
	{
		writeLogAjax("handleProductDisplayinCartResponse :::::: Exception" + e, 0);
	}
}
function getCustomerOfflineData(response)
{
	customerDetails = response;
}
function handleSignUpResponse(response)
{
	$(".overlay").show().delay(100).fadeOut();
	var action = response.status;
	var statusdesc = response.statusdesc;
	if(action == 3)
	{
		var email = response.email;
		jqueryconform("Message", "We have send OTP to " + email + " and to your registered mobile please provide us during your first login");
		$("#logintab").trigger("click");
		$("#otpLogin").show();
	}
	else
	{
		jqueryconform("Message", statusdesc);
	}
}
function handleUserShippingAddressResponse(response)
{
	var action = response.status;
	var statusdesc = response.statusdesc;
	if(action == 3)
	{
		var addressList = "";
		var count = 0;
		var addressdetails = response.address;
		for ( var j in addressdetails)
		{
			count = parseInt(j) + 1;
			var address = addressdetails[j].shippingaddress;
			addressList = addressList + '<div class="divSection">' + '<div class="space"></div>' + '<label><input id="radio' + count + '" value="one" style="margin-top: 0px;" name="addList" type="radio">Address ' + count + " : </label>" + '<div class="space"></div>' + '<textarea id="textarea' + count + '" rows="5" cols="30">' + address + "</textarea>" + "</div>";
		}
		$.session.set("addressList", addressList);
		$.session.set("count", count);
	}
	else
	{
		jqueryconform("Message", statusdesc);
	}
}
function handleForgetPasswordResponse(response)
{
	$(".overlay").show().delay(100).fadeOut();
	var action = response.status;
	if(action == 3)
	{
		var email = response.email;
		jqueryconform("Message", "We have send your password to " + email + " please check it out");
		$("#crossClose").trigger("click");
	}
	else
	{
		var statusdesc = response.statusdesc;
		jqueryconform("Message", statusdesc);
	}
}
function handleSaveUserDetailsResponse(response)
{
	var action = response.status;
	var userType = response.userType;
	if(action == 3)
	{
		var saveType = response.saveType;
		if(saveType == "personalDetail")
		{
			var firstName = response.firstName;
			var lastName = response.lastName;
			var phone = response.phone;
			if(userType == "supplier")
			{
				var name = firstName + " " + lastName;
				$("label[for='firstNameDisplay']").html(name);
			}
		}
		if(saveType == "address")
		{
			var address1 = response.address1;
			var address2 = response.address2;
			var street = response.street;
			var city = response.city;
			var state = response.state;
			var pinCode = response.pinCode;
			if(userType == "supplier")
			{
				$("label[for='stateDisplay']").html(state);
				$("label[for='addressDisplay']").html(address1);
				$("label[for='cityDisplay']").html(city);
				$("label[for='pincodeDisplay']").html(pinCode);
			}
		}
		delete response["password"];
		$.session.remove("loginData");
		$.session.set("loginData", JSON.stringify(response));
		jqueryconform("Message", "Updated successfully");
	}
	else
	{
		var statusdesc = response.statusdesc;
		jqueryconform("Message", statusdesc);
	}
}
var addresslistcheck = "";
function handleResetPasswordResponse(response)
{
	$(".overlay").show().delay(100).fadeOut();
	var action = response.status;
	var statusdesc = response.statusdesc;
	if(action != 3)
	{
		jqueryconform("Message", statusdesc);
	}
	else
	{
		jqueryconform("Message", "Password changed successfully");
	}
}
function handleLoginResponse(response)
{
	try
	{
		$(".overlay").show().delay(100).fadeOut();
		var action = response.status;
		var statusdesc = response.statusdesc;
		var itemsinCart = response.itemsinCart;
		$.session.set("itemsinCart", itemsinCart);
		var msg = "Your account is not yet verified. Please enter your verification code(OTP)";
		var invalidOTP = "Invalid OTP. Please check your mail for the valid OTP";
		var userType = response.userType;
		if(userType != null)
		{
			removePwdFromSession(response, userType);
		}
		if(action != 3)
		{
			jqueryconform("Message", statusdesc);
			$.session.remove("loginData");
			$.session.remove("usertype");
			$.session.remove("pageState");
			$.session.remove("checkout");
			$.session.remove("contentState");
			$.session.remove("addressList");
			$.session.remove("count");
			$.session.remove("viewprod");
			$.session.remove("zoominage");
			$.session.remove("prodDisc");
			$.session.remove("checkoutlogin");
			$.session.remove("itemsinCart");
			$.session.remove("profileimg");
		}
		else
		{
			$("#myAcc").show();
			$("#loginDialogLink").hide();
			$("#crossClose").trigger("click");
			var checkoutlogin = $.session.get("checkoutlogin");
			if(checkoutlogin == "checkoutlogin")
			{
				getcookies();
				var userid = response.key;
				for ( var i in arrayofProduct)
				{
					var arr = arrayofProduct[i];
					var productarr = arr.toString().split("/");
					var productid = "";
					var shopid = "";
					for ( var h in productarr)
					{
						productid = productarr[0];
						shopid = productarr[1];
					}
					objhandleRequest.aadToCartForLoggedUser(userid, userType, productid, "authoriseduser", "1", "add", shopid);
				}
				arrayofProduct = 0;
				$("#loadpage").empty();
				$("#loadpage").load("checkout.jsp");
			}
			else
			{
				getcookies();
				var userid = response.key;
				var arrayofProductLength = arrayofProduct.length;
				for ( var j in arrayofProduct)
				{
					var arr = arrayofProduct[j];
					var productarr = arr.toString().split("/");
					var productid = "";
					var shopid = "";
					for ( var k in productarr)
					{
						productid = productarr[0];
						shopid = productarr[1];
					}
					objhandleRequest.aadToCartForLoggedUser(userid, userType, productid, "authoriseduser", "1", "add", shopid);
				}
				$.cookie("key", "");
				if(arrayofProductLength == 0)
				{
					arrayofProduct = 0;
					location.replace("indexTemplate.jsp");
				}
			}
		}
	}
	catch(e)
	{
		console.log("handleLoginResponse Exception : "+e);
	}
}
function removePwdFromSession(response, userType)
{
	delete response["password"];
	writeLogAjax("response :: " + JSON.stringify(response), 1);
	$.session.remove("loginData");
	$.session.set("loginData", JSON.stringify(response));
	$.session.remove("userType");
	$.session.set("userType", userType);
}
function handleProfilePicResponse(response)
{
	var action = response.status;
	var statusdesc = response.statusdesc;
	if(action != 3)
	{
		jqueryconform("Message", statusdesc);
	}
	else
	{
		jqueryconform("Message", "Password changed successfully");
		var profileImg = response.profileImg;
		var loginData = $.session.get("loginData");
		console.log("response :: " + JSON.stringify(loginData));
		delete loginData["profileImg"];
		loginData.profileImg = profileImg;
		console.log("response :: " + JSON.stringify(loginData));
		$.session.remove("loginData");
		$.session.set("loginData", JSON.stringify(loginData));
		$("#profilePic").attr("src", profileImg);
	}
}