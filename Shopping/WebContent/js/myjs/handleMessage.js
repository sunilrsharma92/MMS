/**
 * 
 */

var objhandleRequest = new handleRequest();
var customerDetails = "";

function handleMainCategoryResponse(response)
{
	try
	{
		// writeLogAjax('handleMainCategoryResponse :::::: '+JSON.stringify(response),1);

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

				category = category +"<a href='#demo" + categoryId + "' id='" + categoryId + "' class='list-group-item ' data-toggle='collapse' data-parent='#MainMenu'>" + categoryName 
									+ "<span class='pull-right glyphicon glyphicon-menu-down'></span></a>";
		          
		          
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
		writeLogAjax("handleMainCategoryResponse :::::: Exception" + e,0);
	}
}
/*
function handleShopProfileDetailResponse(response)
{
	try
	{
		writeLogAjax('handleShopProfileDetailResponse :::::: ' + JSON.stringify(response),1);

		var supFirstName = response.supFirstName;
		var supLastName = response.supLastName;
		var supAddress = response.supAddress;
		var supCity = response.supCity;
		var supState = response.supState;
		var supPinCode = response.supPinCode;

		$("#firstName1").empty();
		$("#lastName1").empty();
		$("#address1").empty();
		$("#state1").empty();
		$("#city1").empty();
		$("#pincode1").empty();

		document.getElementById("firstName1").innerHTML = '<label id="firstName">' + supFirstName + '</label>';
		document.getElementById("lastName1").innerHTML = '<label id="lastName">' + supLastName + '</label>';
		document.getElementById("address1").innerHTML = '<label id="address">' + supAddress + '</label>';
		document.getElementById("state1").innerHTML = '<label id="state">' + supState + '</label>';
		document.getElementById("city1").innerHTML = '<label id="city">' + supCity + '</label>';
		document.getElementById("pincode1").innerHTML = '<label id="pincode">' + supPinCode + '</label>';

	}
	catch (e)
	{
		writeLogAjax("handleShopProfileDetailResponse :::::: Exception" + e,0);
	}
}*/

function handleShopProfDispResponse(response)
{
	try
	{
		var action = response.status;
		if(action == 3)
		{
			var firstName = response.firstName;
			var lastName = response.lastName;
			var address1 = response.address1;
			var city = response.city;
			var state = response.state;
			var pinCode = response.pinCode;
			
			$("label[for='firstNameDisplay']").html(firstName+" "+lastName);
			$("label[for='stateDisplay']").html(state);
			$("label[for='addressDisplay']").html(address1);
			$("label[for='cityDisplay']").html(city);
			$("label[for='pincodeDisplay']").html(pinCode);
		}
		else
		{
			jAlert(statusdesc, "Error occurred while populating shop details");
		}
		writeLogAjax('handleShopProfDispResponse :::::: ' + JSON.stringify(response),1);

//		getCustomerOfflineData(response); // -- not aware of the use,may be was to store session

	}
	catch (e)
	{
		writeLogAjax("handleShopProfDispResponse :::::: Exception" + e,0);
	}
}

function handleProductDisplayResponse(response)
{
	try
	{

		// writeLogAjax('handleProductDisplayResponse :::::: '+JSON.stringify(response),1);
		var productList = "";
		// var total = 0;
		var product = response.product;
		for ( var i in product)
		{

			var productid = product[i].productid;
			var price = product[i].price;
			var stock = product[i].stock;
			var prodName = product[i].prodName;
			var images = product[i].images;

			// total = total+price;
			var stockvalue = "";
			var stockcrtbtn = "";

			if(stock == "0")
			{
				stockvalue = "red";
				stockcrtbtn = 'disabled="disabled" style="background-color: #FF0000;border-color: #FF0000;"';
			}
			else if(stock != "0")
			{
				stockvalue = "green";
				stockcrtbtn = "";
			}
			var viewProductclick = "viewProduct('"+images+"','"+prodName+"','"+price+"','"+stockvalue+"','"+productid+"','"+stockcrtbtn+"');"
			var loadProductViewPage = "loadProductViewPage('viewProduct');"			
			
			productList = productList + '<div class="col-md-2 col-sm-3  col-xs-4 wrap">' 
			+ '<div class="portfolio-item" onclick="'+loadProductViewPage+' '+viewProductclick+'">' + '<div class="inner-wrap">' 
			+ '<span id="ok' + productid + '" class="pull-right glyphicon glyphicon-ok oktick" style="display:none;"></span>' 
			+ '<a href="#">' + '<img id="' + productid + '" class="img-portfolio img-responsive" src="' + images + '">' 
			+ '</a>' + '</div>' + '</div>' + '<div class="align-center">' + '<div class="productname ">' + prodName + '</div>' 
			+ '<div class="productprice" style="color: ' + stockvalue + '";>Rs.' + price + '</div>'
			// + '<div class="instock ">Stock : '+stock+'</div>'
			// + '<div class="quantity ">Quantity:<input id="qtytxt" type="text"
			// name="quantity"></div>'
			+ '<div class="cartbtn "><button type="button" ' + stockcrtbtn + ' onclick="addproducttoCArt(' + productid + ')" class="btn btn-success cartsz " id="btn' + productid + '">Add <span class="pull-right glyphicon glyphicon-shopping-cart"></span></button></div>' + '</div>' + '</div>';

			// if(i+1%6==0)
			// {
			// productList = productList+'</br>';
			// }
		}

		$("#productList").empty();
		$("#productList").append(productList);

		var condition = "okenable";
		getProductfromCookie(condition);

		// product":[{"prodName":"Vaseline - Aloe
		// Lotion","stock":100,"price":80,"productid":1,"images":"Images\\Personal
		// Care\\Creams And Lotions\\0E0E43A3-3479-4318-8DAE-D6BCB7F0ED1F.jpg"}

	}
	catch (e)
	{
		writeLogAjax("handleProductDisplayResponse :::::: Exception" + e,0);
	}
}

function handleProductDisplayinCartResponse(response)
{
	try
	{
		writeLogAjax('handleProductDisplayinCartResponse :::::: ' + JSON.stringify(response),1);
		var productList = "";
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
			total = total + price;
			var quantityfunctionAdd = "quantity('demo" + productid + "','add','"+price+"');"
			var quantityfunctionMinus = "quantity('demo" + productid + "','minus','"+price+"');"
			
			productList = productList + '<tr>' + '<td class="cimg"><img class="cartimgsize" id="' + productid + '" src="' + images + '"></td>' + '<td class="cname">' + prodName + '</td>' + '<td class="csize">' + stock + ' kg</td>' + '<td class="cqty">'

			+ '<div class="input-group bootstrap-touchspin quantitybtn">' 
			+ '<span class="input-group-btn">' 
			+ '<button class="btn btn-default bootstrap-touchspin-down" id="minus' + productid + '" onclick="' + quantityfunctionMinus + '" type="button">-</button></span>' + '<input id="demo' + productid + '" type="text" value="1" name="demo1" class="form-control cartquantity">' + '<span class="input-group-btn">' 
			+ '<button class="btn btn-default bootstrap-touchspin-up" id="add' + productid + '" onclick="' + quantityfunctionAdd + '" type="button">+</button>'
			+'</span>' 
			+ '</div>'

			+ '</td>' + '<td class="cprice">' + price + '</td>' + '<td align="center"><button type="button" onclick="removeproductfromCArt(' + productid + ')" class="btn btn-danger btn-xs cartdelbtn"><span id="cdel" class="glyphicon glyphicon-remove"></span></button></td>' + '</tr>';

		}

		// writeLogAjax(total,1);

		totalpurchase = totalpurchase + '<span class="tlbprce">Total Price :</span>' + '<span class="totalprize"><strong> Rs ' + total + '</strong> </span>';
		// +'<!--<span class="usave">You save :</span> '
		// +'<span class="rups"><strong> Rs 0</strong> </span>-->';

		$("#appendProducttoCart").empty();
		$("#appendProducttoCart").append(productList);

		$("#totalpurchase").empty();
		$("#totalpurchase").append(totalpurchase);
		
		$("#totalcartAmmounthidden").val(total);
		
		var checkout = $.session.get('checkout');
		if(checkout !=null && checkout !=="" && checkout == "checkout")
			{
			
				appendProducttoCheckoutTable(productList, totalpurchase, total, count);
				$.session.remove('checkout');
			}
		
	}
	catch (e)
	{
		writeLogAjax("handleProductDisplayinCartResponse :::::: Exception" + e,0);
	}
}

function getCustomerOfflineData(response)
{
	customerDetails = response;
}

/*
 * function getCustOfflineDetails() { // alert(); // var supFirstName =
 * customerDetails.supFirstName; // var supLastName =
 * customerDetails.supLastName; // var supAddress = customerDetails.supAddress; //
 * var supCity = customerDetails.supCity; // var supState =
 * customerDetails.supState; // var supPinCode = customerDetails.supPinCode; // //
 * alert("customerDetails : "+customerDetails);
 *  }
 */

function handleSignUpResponse(response)
{
	// alert("hii");
	$(".overlay").show().delay(100).fadeOut();
	var action = response.status;
	var statusdesc = response.statusdesc;

	if(action == 3)
	{
		var email = response.email;
		jAlert("we have send OTP to " + email + " and to your registered mobile please provide us during your first login", "Message");
//			$("#crossClose").trigger( "click" );
			$("#logintab").trigger( "click" );
			$("#otpLogin").show();
	}
	else
	{
		jAlert(statusdesc, "Alert Message");
	}
	// return false;
}

function handleUserShippingAddressResponse(response)
{
//	$(".overlay").show().delay(100).fadeOut();
	var action = response.status;
	var statusdesc = response.statusdesc;
	
	if(action == 3)
	{
		
		var addressList = "";
		var count = 0;
		var addressdetails = response.address;
		
//		jAlert(JSON.stringify(addressdetails), "Message");
		for(var j in addressdetails)
			{
				count = parseInt(j)+1;
				var address = addressdetails[j].shippingaddress;
				addressList = addressList + '<div class="divSection">'
						+'<div class="space"></div>'
						+'<label><input id="radio'+count+'" value="one" style="margin-top: 0px;" name="addList" type="radio">Address '+count+' : </label>'
						+'<div class="space"></div>'
						+'<textarea id="textarea'+count+'" rows="5" cols="30">'+address+'</textarea>'
						+'</div>';
				
			}
		$.session.set('addressList', addressList);
		$.session.set('count', count);
	}
	else
	{
		jAlert(statusdesc, "Alert Message");
	}
}

function handleForgetPasswordResponse(response)
{
	// alert(JSON.stringify(response));
	// alert("hii");
	$(".overlay").show().delay(100).fadeOut();
	var action = response.status;
	if(action == 3)
	{
		var email = response.email;
		jAlert("We have send your password to " + email + " please check it out", "Message");
		$( "#crossClose" ).trigger( "click" );
	}
	else
	{
		var statusdesc = response.statusdesc;
		jAlert(statusdesc, "Alert Message");
	}
	// return false;
}

function handleSaveUserDetailsResponse(response)
{
	// alert(JSON.stringify(response));
	// alert("hii");
//	$(".overlay").show().delay(100).fadeOut();
	var action = response.status;
	var userType = response.userType;
	
	if(action == 3)
	{
		var saveType = response.saveType;
//		alert("saveType : "+saveType)
		if(saveType == "personalDetail")
		{
			var firstName = response.firstName;
			var lastName = response.lastName;
			var phone = response.phone;
//			alert("userType rr : "+userType);
			if(userType == "supplier")
			{
//				alert("inside : "+userType);
				var name = firstName+" "+lastName;
				$("label[for='firstNameDisplay']").html(name);
//				$("label[for='lastNameDisplay']").html(lastName);
			}
			
			// -- take data from session
			// delete the old variables in loginData
			// set session with the updated part
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
			
			// -- take data from session
			// delete the old variables in loginData
			// set session with the updated part
			
		}
		
		delete response["password"];

//		writeLogAjax("response after save details :: " + JSON.stringify(response),1);

		$.session.remove('loginData');
		$.session.set('loginData', JSON.stringify(response));
		
		jAlert("Updated successfully", "Alert Message");
		
	}
	else
	{
		var statusdesc = response.statusdesc;
		jAlert(statusdesc, "Alert Message");
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
		jAlert(statusdesc, "Alert Message");
	}
	else
	{
		jAlert("Password changed successfully", "Alert Message");
	}
//	
}

function handleLoginResponse(response)
{
	
	$(".overlay").show().delay(100).fadeOut();
	var action = response.status;
	var statusdesc = response.statusdesc;
	var msg = "Your account is not yet verified. Please enter your verification code(OTP)";
	var invalidOTP = "Invalid OTP. Please check your mail for the valid OTP";
	var userType = response.userType;
//	alert(response.userType);

	 if (userType != null) 
	{
		 removePwdFromSession(response, userType);
	}

	if(action != 3)
	{
		jAlert(statusdesc, "Alert Message");
		if(statusdesc == msg || statusdesc == invalidOTP)
			{
				document.getElementById("otpLogin").style.display = "inline-flex";
			}
		else
			{
			if($("#otpLogin").val() != null && $("#otpLogin").val() != "")
				{
					document.getElementById("otpLogin").style.display = "inline-flex";
				}
			else
				{
					$("#otpLogin").hide();
				}
				
			}
	}
	else
	{
//		jAlert("Login Successfull", "Alert Message");
		
		$("#myAcc").show();
		$("#loginDialogLink").hide();
		$( "#crossClose" ).trigger( "click" );
		
//		alert('checkoutlogin : Before');
		var checkoutlogin = $.session.get('checkoutlogin');
		if(checkoutlogin == 'checkoutlogin')
		{
			$("#loadpage").load("checkout.jsp");
//			var num = 0;
//			var stopInterval = setInterval(function(){
//				num++;
////				$("#loadpage").load("checkout.jsp");
//				if(num>1)
//					{
//						clearInterval(stopInterval);
//					}
//			}, 500);
			
//			var loginData = $.session.get('loginData');
//			var sessionData = JSON.parse(loginData);
//			
//			var address = sessionData.address1;
//			var address2 = sessionData.address2;
//			var key = sessionData.key;
//			var userType = sessionData.userType;
//			
//			objhandleRequest.getUserAddressfromShippingaddress(key, userType);
//			var addressList = $.session.get('addressList');
//			var count = $.session.get('count');
//			addresslistcheck = addressList;
//			
//			if(address !="" && address !=null)
//				{
//					count = parseInt(count)+1;
//					addressList = addressList + '<div class="divSection">'
//					+'<div class="space"></div>'
//					+'<label><input id="" value="one" style="margin-top: 0px;" name="addList" type="radio">Address '+count+' : </label>'
//					+'<div class="space"></div>'
//					+'<textarea  rows="5" cols="30">'+address+'</textarea>'
//					+'</div>';
//				}
//			if(address2 !="" && address2 !=null)
//			{
////				alert("address2 = "+address2);
//					count = parseInt(count)+1;
//					addressList = addressList + '<div class="divSection">'
//					+'<div class="space"></div>'
//					+'<label><input id="" value="one" style="margin-top: 0px;" name="addList" type="radio">Address '+count+' : </label>'
//					+'<div class="space"></div>'
//					+'<textarea  rows="5" cols="30">'+address2+'</textarea>'
//					+'</div>';
//			}
//
//			if(addressList !="" && addressList != null)
//				{
//					$("#displayExistAddress").empty();
//					document.getElementById("displayExistAddress").innerHTML = addressList;
//					$("#addresstable").hide();
//				}
//			else
//				{
//					$("#addresstable1").show();
//					document.getElementById("addresstable1").style.display = 'block';
//				}
//			for(var i = 0;i<2;i++)
//				{
//					$("#loadpage").load("checkout.jsp");
//				}
			
		}
		else
			{
				location.replace("indexTemplate.jsp");
			}
		
//		setLoginDropDown(custName);
	}

}

function removePwdFromSession(response, userType)
{
	delete response["password"];

	writeLogAjax("response :: " + JSON.stringify(response),1);

	$.session.remove('loginData');
	$.session.set('loginData', JSON.stringify(response));

	$.session.remove('userType');
	$.session.set('userType', userType);
}

/*function setLoginDropDown(custName)
{

	$("#myAccount").attr('data-target', '');
	// $("#userlogin").attr('data-dismiss','modal');

	document.getElementById("loginlabel").innerHTML = '<ul class="nav navbar-nav navbar-right"><li class="dropdown">' 
		+ '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> ' 
		+ custName 
		+ ' <span class="caret"></span></a>' 
		+ '<ul class="dropdown-menu">' 
		+ '<li><a href="#" id="profileLink">Profile</a></li>' 
		+ '<li><a href="#"></a>Favoiurate Shops</li>' 
		+ '<li><a href="#">Recent Order</a></li>' 
		+ '<li role="separator" class="divider"></li>' 
		+ '<li><a href="#" id="logoutLink">Logout</a></li>' 
		+ '</ul>' 
		+ '</li></ul>';

	$("#crossClose").trigger("click");
}*/

function handleProfilePicResponse(response)
{
	var action = response.status;
	var statusdesc = response.statusdesc;
	if(action != 3)
	{
		jAlert(statusdesc, "Alert Message");
	}
	else
	{
		jAlert("Password changed successfully", "Alert Message");
		
		var profileImg = response.profileImg;
		var loginData = $.session.get('loginData');
		
		console.log("response :: " + JSON.stringify(loginData));
		
		delete loginData["profileImg"];
		
		loginData.profileImg = profileImg;
		console.log("response :: " + JSON.stringify(loginData));

		$.session.remove('loginData');
		$.session.set('loginData', JSON.stringify(loginData));
		
		$("#profilePic").attr('src',profileImg);
		
	}
}
