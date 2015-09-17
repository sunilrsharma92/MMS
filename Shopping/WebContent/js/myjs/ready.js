/**
 * 
 */
//*************************** Document ready function starts from here ***********************************
var action = "";
var arrayofProduct = [];

$(document).ready(function(){
//*******************************************************************************************************************
	$.session.set('viewprod','');
	var path = window.location.pathname;
	var page = path.split("/").pop();
	console.log( page );
	
	if(page == "indexTemplate.jsp")
	{
		var query = window.location.search.substring(1);
		console.log(query);
		
		if(query == "otp")
		{
			$("#otpLogin").show();
			$("#loginlabel").trigger("click");
		}
		
	}

//*******************************************************************************************************************	
	
	$('#userType').jqxSwitchButton({ height: 27, width: 81, checked: true });

//*******************************************************************************************************************	

//	 -- check session to put login drop down
	var loginData = $.session.get('loginData');
//	var userType = $.session.get('userType');

	if(loginData != null)
	{
		// -- makes myAcc visible is session is present
		$("#myAcc").show();
		$("#loginDialogLink").hide();
		
		var sessionData = JSON.parse(loginData);
		
		/*if(userType == "customer")
			var name = sessionData.custFirstName;*/
		
		if(userType == "supplier")
		{
			$("#custOrderPanel").hide(); // -- not needed for shopkeeper
		}
		
//		setLoginDropDown(name);
	}
	else
	{
//		$("#myAccount").attr('data-target','#LoginModal'); // -- not useful,since #myAcc is shown and #login is hided
//		document.getElementById("loginlabel").innerHTML ="Login";
	}
	// -- check session to put login drop down
	
//*******************************************************************************************************************

	// -- logout
	$("#logoutLink").click(function() {
//		alert("hahaa");
		$.session.remove('loginData');
		$.session.remove('usertype');
		window.location.replace("indexTemplate.jsp");
	});
	
	
//*******************************************************************************************************************
	
	$("#continueshopping").click(function() {
		
		$("#checkoutClose").trigger("click");
	
	});
	
//*******************************************************************************************************************
	
	// -- My Profile link
	$("#profileLink").click(function() {
//		alert("profileLink");
		var vid = "";
		var userType = $.session.get('userType');
		if(userType == "customer")
			{
				vid = "customerProfile";
				$("#loadpage").load("customerProfile.jsp");
			}
		
		if(userType == "supplier")
			{
				vid = "shopProfile";
				$("#loadpage").load("shopProfile.jsp");
				shopProfileDisplay();
			}
		
		$.session.set('pageState', vid);
		
	});

//*******************************************************************************************************************
	
//	$.cookie('pageState',"indexBody");
	
	
	$('.btn-toggle').click(function() {
	    $(this).find('.btn').toggleClass('active');  
	    
	    if ($(this).find('.btn-primary').size()>0) {
	    	$(this).find('.btn').toggleClass('btn-primary');
	    }
	    
	    
	    $(this).find('.btn').toggleClass('btn-default');
	       
	});
	
//*******************************************************************************************************************
	
	action = "length";
	getProductfromCookie(action);
	
//***********Request for all product category ************************************************************************

	objhandleRequest.handleCategoryRequest();

//*********************** END ************************************************************************************
		
	// -- shud be called only when profile page is openend -- For Deva
//	var supplierKey = 1;
//	objhandleRequest.handleShopProfileDisplay(supplierKey);
	//*********************** END *************************//
	
//*******************************************************************************************************************
		
/*$("#editbtn").click(function(){
	var action=$("#action").val();
	if(action=="edit")
	{
	console.log($("#firstName").text()+$("#lastName").text()+$("#address").text()+$("#state").text()+$("#city").text()+$("#pincode").text())
    document.getElementById("action").value="save";
	var firstName=$("#firstName").text();
	var lastName=$("#lastName").text();
	var address=$("#address").text();
	var state=$("#state").text();
	var city=$("#city").text();
	var pincode=$("#pincode").text();
	
	$("#editbtn").attr('id','savebtn');
	
	$("#firstName1").empty();
	$("#lastName1").empty();
	$("#address1").empty();
	$("#state1").empty();
	$("#city1").empty();
	$("#pincode1").empty();
	
	document.getElementById("firstName1").innerHTML='<input type="text" style="margin-bottom: 6px;"  id="firstName" value="'+firstName+'"/>';
	document.getElementById("lastName1").innerHTML='<input type="text" style="margin-bottom: 6px;" id="lastName" value="'+lastName+'"/>';
	document.getElementById("address1").innerHTML='<input type="text" style="margin-bottom: 6px;"  id="address" value="'+address+'"/>';
	document.getElementById("state1").innerHTML='<input type="text" style="margin-bottom: 6px;" id="state" value="'+state+'"/>';
	document.getElementById("city1").innerHTML='<input type="text" style="margin-bottom: 6px;"  id="city" value="'+city+'"/>';
	document.getElementById("pincode1").innerHTML='<input type="text" style="margin-bottom: 6px;" id="pincode" value="'+pincode+'"/>';
	}
	else if(action=="save")
	{
		saveShopkeeperDetails();
	}
});*/


//*******************************************************************************************************************

$(".getCartProduct").click(function(){
	
	getProductfromCookie("prod");
	
});

//*******************************************************************************************************************


$('#checkout').click(function(){
	
//	$('#cartmodal').modal('hide');
//	$('#LoginModal').modal('show');
//	getCustOfflineDetails();
});


//*******************************************************************************************************************



$("#userlogin").click(function(){
	
//	alert("Hii");
	var emailLogin = $("#emailLogin").val();
	var passLogin = $("#passLoginTemp").val();
	var otpLogin = $("#otpLogin").val();
	var userType = $("#userType").val();
	

	if(userType)
	{
		userType = "customer";
	}
	else
	{
		userType = "supplier";
	}
	
	console.log("emailLogin : " + emailLogin + "  passLogin : " + passLogin + "  userType : " + userType +"  otpLogin : "+otpLogin );
	$(".overlay").show();
	objhandleRequest.handleLogin(emailLogin, passLogin, userType, otpLogin);
	
//	if(emailLogin != "" && passLogin != "")
//		{
//			if(document.getElementById('otpLogin').style.display == 'block' && otpLogin == "")
//			{
//					validationMsg("otpLogin","OTP is required..!! Check it in your mail");
//					return false;
//			}
//			else
//			{
//				var result = jConfirm("Are you sure you want to register as "+userType,"Make My Shopy",function()
//						{
//							
//						});
//					
//				if(result)
//				{
//					return true;
//					objhandleRequest.handleLogin(emailLogin, passLogin, userType, otpLogin);
//				}
//				else
//				{
//					return false;
//				}
//			}
//		}
//	else
//		{
//			if(emailLogin == "" )
//			{
//				validationMsg("emailLogin","Email is required");
//			}
//			if(passLogin == "" )
//			{
//				validationMsg("passLoginTemp","Password is required");
//			}
//			return false;
//		}
	
});

//*******************************************************************************************************************

$("#signup").click(function(){
//	alert("SignUp");
	
	var passSignUp = $('#passSignUp').val();
//	var firstNameSignUp = $('#firstNameSignUp').val();
	var mobileKey = $('#mobile').val();
	var emailKey = $('#emailSignUp').val();
	var userType = $("#userType").val();

	if(userType)
	{
		userType = "customer";
	}
	else
	{
		userType = "supplier";
	}
//	console.log("passSignUp" + passSignUp + "firstNameSignUp" +firstNameSignUp+ "mobileKey" + mobileKey	+ "emailKey" + emailKey + "userType" + userType);
	console.log("passSignUp" + passSignUp +"mobileKey" + mobileKey	+ "emailKey" + emailKey + "userType" + userType);
	
//	return false;
	var result = jConfirm("Are you sure you want to register as "+userType,"Make My Shopy",function(e)
	{
		if(e)
		{
			$(".overlay").show();
			objhandleRequest.handleRegisteration(passSignUp, mobileKey, emailKey, userType);
			return true;
		}
		else
		{
			return false;
		}
	});
		
});

//*******************************************************************************************************************

});

//*************************** Document ready function ends here ***********************************

/*function getDataFromSession(requestedValue)
{
	var data = requestedValue;
	console.log("requestedValue : "+requestedValue);
	var loginData = $.session.get('loginData');
	var sessionData = JSON.parse(loginData);
	
	var responseVal = sessionData.data;
	
	console.log("getDataFromSession responseVal : " + responseVal);
	return responseVal;
}

function getIntDataFromSession(requestedValue)
{
	console.log("requestedValue1 : "+requestedValue);
	var loginData = $.session.get('loginData');
	var sessionData = JSON.parse(loginData);
	
	var responseVal = sessionData.requestedValue;
	var email = sessionData.emailId;
	console.log("getIntDataFromSession responseVal : " + responseVal + "  email : " + email);
	return responseVal;
}*/

function loadProductViewPage(id)
{
	$.session.set('viewprod','viewprod');
	$("#loadpage").load(id+".jsp");
}

function loadPage(id)
{
	$.session.set('viewprod','');
	var vid = $(id).attr("id");
//	alert("Page Name  "+vid);
	
	if(vid == "indexBody")
		{
			$.session.set('pageState', vid);
//			$.cookie('pageState',vid);
		}
	
	/*if(vid == "viewProduct")
	{
		$.session.set('pageState', vid);
//			$.cookie('pageState',vid);
	}*/
	
	else if(vid == "shopProfile")
			{
				$.session.set('pageState', vid);
				ShopProfileDisplay();
			}
	else if(vid == "checkout")
	{
		$.session.set('pageState', vid);
		$("#checkoutClose").trigger("click");
	}
	
	$("#loadpage").load(vid+".jsp");
	
	if(vid == "checkout")
		{
			$.session.set('checkout','checkout');
			getProductfromCookie("prod");
		}
	
//	var pageState = $.cookie("pageState");
//	alert("pageState : "+pageState);
	
}



// -- old method,currently not in use
/*function saveShopkeeperDetails()
 {

	$("#action").val("edit");
	document.getElementById("action").value = "edit";
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var address = $("#address").val();
	var state = $("#state").val();
	var city = $("#city").val();
	var pincode = $("#pincode").val();
	
	console.log("firstName : " + firstName + "  lastName : " + lastName + "  city : " + city +"  state : "+state+"  pincode : "+pincode );

objhandleRequest.handleShopProfileDetails(firstName, lastName,address,city,state,pincode);

}*/

function saveUserDetails()
{

	document.getElementById("action").value = "edit";
	var firstName = $("#firstNameSave").val();
	var lastName = $("#lastNameSave").val();
	var mobileNo = $("#mobileNoSave").val();
//	var sessionEmail = $("#emailSave").val();
	var address1 = $("#address1Save").val();
	var address2 = $("#address2Save").val();
	var state = $("#stateSave").val();
	var street = $("#streetSave").val();
	var city = $("#citySave").val();
	var pincode = $("#pincodeSave").val();
	var userType = $.session.get('userType'); 
	
	/*var email = getDataFromSession("emailId");
	var key = getIntDataFromSession("key");*/
	
	var loginData = $.session.get('loginData');
	var sessionData = JSON.parse(loginData);
	
	var email = sessionData.emailId;
	var key = sessionData.key;
	
	
	console.log("firstName : " + firstName + "  lastName : " + lastName + "  mobileNo : " + mobileNo +"  email : "+email+"" +
			"  address1 : "+address1+"  address2 : "+address2 +"  state : "+state +"  city : "+city +"  street : "+street +"  pincode : "+pincode+" userType :"+userType 
			+" key "+key);

objhandleRequest.handleUserDetailsSave(firstName, lastName, mobileNo, email, address1, address2, state, city, street, pincode, userType, key);

}


function changePassword()
{
	var oldPwd = $("#oldPwd").val();
	var password1 = $("#password1").val();
	var password2 = $("#password2").val();
	
	var userType = $.session.get('userType');
	var loginData = $.session.get('loginData');
	var sessionData = JSON.parse(loginData);
	
	var email = sessionData.emailId;
	
	objhandleRequest.handleChangePassword(oldPwd, password1, userType, email);
	
}



/*function checkUsernameAvail()
 {
	alert("checkUsernameAvail");

	var usernameSignUp = $("#usernameSignUp").val();

	console.log("usernameSignUp" + usernameSignUp + "for availability");
	objhandleRequest.handleUsernameAvailCust(usernameSignUp);
}*/

function forgotPwd()
 {
//	alert("forgot");

//	var usernameForgotPwd = $("#usernameForgotPwd").val();
	var emailForgotPwd = $("#emailForgotPwd").val();
	var userType = $("#userType").val();
	
	if(userType)
	{
		userType = "customer";
	}
	else
	{
		userType = "supplier";
	}

	console.log("emailForgotPwd : "+ emailForgotPwd+"   userType"+ userType);
	$(".overlay").show();
	objhandleRequest.handleForgotPwd(emailForgotPwd, userType);

}
	
$("#getCartProduct").click(function()
{
//		alert("hii");
	getProductfromCookie("prod");
	
});

//*************************** Document ready function ends here ***********************************


function getSelectedProduct(subid,strmainCategoryid)
{
	var strsubCategoryid=$(subid).attr("id");
	$("#myCarousel").hide();
//	alert("strsubCategoryid : "+strsubCategoryid+" strmainCategoryid : "+strmainCategoryid);
	
	objhandleRequest.handledisplaySelectedProduct(strmainCategoryid , strsubCategoryid);
}


//*********************Getting Product Count on load of page to display in cart.*********************//
function getProductfromCookie(condition)
{
	try
	{
	var i = 0;
	var count = 0;
	var prodjoin = "";
	var gettingCookieArray = $.cookie("key");
	
	if(gettingCookieArray !=null)
		{
	var gettingCookieValue = JSON.parse(gettingCookieArray);
	console.log("JSON.parse(gettingCookieArray) : "+gettingCookieValue);
	for (i in gettingCookieValue)
	{
		var gettingProductId = gettingCookieValue[i];
		
		if(i==0)
			{
				prodjoin = gettingProductId+"#";
			}
		else
			{
				prodjoin = prodjoin+gettingProductId+"#";
			}
		
		
		count++;
		$(".productCountOnCart").empty();
		document.getElementById("productCountOnCart").innerHTML = i;
		document.getElementById("productCountOnCart1").innerHTML = i;
		
		if(condition == "okenable")
			{
				document.getElementById("ok"+gettingProductId).style.display = "block";
				document.getElementById("btn"+gettingProductId).disabled = true;
			}
		
	}
		}
//	alert("count : "+count)
	if(count>0)
		{
			count = parseInt(i) + 1;
//			alert("count1 : "+count)
			$(".productCountOnCart").empty();
			document.getElementById("productCountOnCart").innerHTML = count;
			document.getElementById("productCountOnCart1").innerHTML = count;
		}
	else
		{
			$(".productCountOnCart").empty();
			document.getElementById("productCountOnCart").innerHTML = count; 	
			document.getElementById("productCountOnCart1").innerHTML = count; 	
		}
	
	
	if (condition === "prod")
	{
		console.log("prodjoin : "+prodjoin);
		
		objhandleRequest.handledisplayProductinCart(prodjoin);
	}
	}
	catch (e)
	{
		console.log("ready.js    getProductfromCookie(condition)    Exception : "+e);
	}
	
}
//************************************************************************************//

//*********************Getting Product ID from Cookies Array and pushing it in arrayofProduct Array.*********************//
function getcookies()
{
	var gotCookies = $.cookie("key");
	try
		{
	var gotCookiesArray = JSON.parse(gotCookies);
//	console.log("getcookies()   JSON.parse(a)   : "+gotCookiesArray);
	arrayofProduct = [];
	for(var i in gotCookiesArray)
		{
			var productIdfromCookie = gotCookiesArray[i];
			arrayofProduct.push([ productIdfromCookie ]);
		}
		}
	catch (e)
	{
		console.log("ready.js  :: getcookies()  :: Exception"+e)
	}
}
//************************************************************************************//

//*********************Add product count to cart after click on Add to cart button*********************//

function addproducttoCArt(productid)
	{
	getcookies();
	for(var i in arrayofProduct)
		{
			arrayofProduct[i] == productid;
			
		}
    arrayofProduct.push([ productid ]);
	
	var len = arrayofProduct.length;
	
	$(".productCountOnCart").empty();
	document.getElementById("productCountOnCart").innerHTML=len;
	document.getElementById("productCountOnCart1").innerHTML=len;
	
	$.cookie('key',JSON.stringify(arrayofProduct));
	
	document.getElementById("ok"+productid).style.display = "block";
//	$("#getCartProduct").focus();
	
	var checkAllCookies_AddedorNot = $.cookie("key");
	var checkCookiesArray = JSON.parse(checkAllCookies_AddedorNot);
	console.log("getcookies()   JSON.parse(checkAllCookies_AddedorNot)   : "+checkCookiesArray);
	
	document.getElementById("btn"+productid).disabled = true;

}
//************************************************************************************//

function viewProduct(images, prodName, price, stockvalue,productid ,stockcrtbtn)
{
	var disablebtn = '';
	if(document.getElementById("btn"+productid).disabled == true)
		{
			disablebtn = 'disabled="disabled"';
		}
	else
		{
			disablebtn = '';
		}
	
	var zoominage = '<div class="row">'
		+'<img id="img_01" style="width:550px; height:350px;" src="'+images+'" data-zoom-image="'+images+'"/>'
		+'</div>'
		+'<div class="row" id="gallery_01">'
		+'<a href="#" data-image="'+images+'" data-zoom-image="'+images+'">'
		+'<img id="img_01" class="heightWidth"  src="'+images+'" />'
		+'</a>'

		/*+'<a href="#" data-image="img/small/1001002a.png" data-zoom-image="img/large/1001002a.png">'
		+'<img id="img_01" class="heightWidth"  src="img/thumb/1001002a.png" />'
		+'</a>'

		+'<a href="#" data-image="img/small/1001004a.png" data-zoom-image="img/large/1001004a.png">'
		+'<img id="img_01" class="heightWidth"  src="img/thumb/1001004a.png" />'
		+'</a>'

		+'<a href="#" data-image="img/small/1001005a.png" data-zoom-image="img/large/1001005a.png">'
		+'<img id="img_01" class="heightWidth"  src="img/thumb/1001005a.png" />'
		+'</a>'*/

		+'</div>';


	var prodDisc = '<div class="row" style="width:100%; margin-top:20px;margin-left:20px;">'
		+'<label><h2>Name of product : <h2>'+prodName+'</label>'
		+'</div><!--/row-->'
		+'<div class="row" style="width:100%;margin-top:20px;margin-left:20px;">'
		+'<label><h3>Product Describtion</h3></label>'
		+'<p>Cotton Blanket Also Known As Solapuri Chaddar Is Very Attractive And Durable. Cotton Blanket Is Made On Jacquard Design To Give Adorable Centre Design Like Galicha.</p>'
		+'</div><!--/row-->'
		+'<div class="row" style="width:100%;margin-top:20px;margin-left:20px;">'
		+'<div class="cartbtn "><button type="button" ' + disablebtn + ' onclick="disablebtn('+productid+'); addproducttoCArt(' + productid + ');" class="btn btn-success cartsz " id="btn' + productid + '">Add <span class="pull-right glyphicon glyphicon-shopping-cart"></span></button></div>'
		+'</div>';
	
	$.session.set('zoominage',zoominage);
	$.session.set('prodDisc',prodDisc);
	
}

//************************************************************************************//


function removeproductfromCArt(id)
{
	var gotCookies = $.cookie("key");
	try
		{
	var gotCookiesArray = JSON.parse(gotCookies);
	
	if(gotCookiesArray == "")
		{
			$(".productCountOnCart").empty();
			document.getElementById("productCountOnCart").innerHTML="0";
			document.getElementById("productCountOnCart1").innerHTML="0";
		}
//	console.log("getcookies()   JSON.parse(a)   : "+gotCookiesArray);
	arrayofProduct = [];
	for(var i in gotCookiesArray)
		{
			var productIdfromCookie = gotCookiesArray[i];
			if(id!=productIdfromCookie)
				{
					arrayofProduct.push([ productIdfromCookie ]);
				}
			else
				{
//					alert("Delete : "+id);
				}
			
		}
	$.cookie('key',JSON.stringify(arrayofProduct));
	
	
	var pageState = $.session.get('pageState');
	if(pageState == "checkout")
	{
		$.session.set('checkout','checkout');
		getProductfromCookie("prod");
	}
	
	
	getProductfromCookie("prod");
	
	var viewprod = $.session.get('viewprod');
	if(viewprod == "viewprod")
	{
		enablebtn(id);
	}
	
	document.getElementById("ok"+id).style.display = "none";
	document.getElementById("btn"+id).disabled = false;
		}
	catch (e)
	{
		console.log("ready.js  :: removeproductfromCArt(id)  :: Exception"+e);
	}
	
}


function searchProduct()
{
//	alert("txt : ");
	var txt = $("#search").val();
	if(txt != "")
		{
			$("#myCarousel").hide();
		}
	else if(txt == "")
		{
			$("#myCarousel").show();
		}
//	alert("txt 1 : "+txt);
	objhandleRequest.searchProduct(txt);
}

function callAlerts(msg)
{
	jAlert(msg,"Make My Shopy");
}

//function validationMsg(id,msg)
//{
//	if($("#"+id).val() == "")
//	{
//		$("#"+id).attr('placeholder',msg);
////		$("#"+id).add
//	}
//	$("#"+id).css('color','red');
//	$("#"+id).css('border-color','red');
//}

function quantity(txtboxid,action)
{
//	var btnid = $(id).attr("id");
	if(action == "add")
		{
			var val = parseInt($("#"+txtboxid).val());
			var total = val+1;
		    $("#"+txtboxid).val(total);
		}
	else if(action == "minus")
		{
			var val = parseInt($("#"+txtboxid).val());
			if(val>1)
			{
				var total = val-1;
				$("#"+txtboxid).val(total);
			}
		}
}

//objhandleRequest.handleCategoryRequest();
var objhandleRequest=new handleRequest();