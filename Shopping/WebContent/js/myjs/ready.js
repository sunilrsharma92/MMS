/**
 * 
 */
//*************************** Document ready function starts from here ***********************************
var action = "";
var arrayofProduct = [];

$(document).ready(function(){
	
	
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
		}
		
	}
	
	$('#userType').jqxSwitchButton({ height: 27, width: 81, checked: true });
	
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
	
	
	// -- logout
	$("#logoutLink").click(function() {
//		alert("hahaa");
		$.session.remove('loginData');
		$.session.remove('usertype');
		window.location.replace("indexTemplate.jsp");
	});
	
	// -- My Profile link
	$("#profileLink").click(function() {
//		alert("profileLink");
		var userType = $.session.get('userType');
		if(userType == "customer")
			{
				$("#loadpage").load("customerProfile.jsp");
			}
		
		if(userType == "supplier")
			{
				$("#loadpage").load("shopProfile.jsp");
			}
		
	});

	$.cookie('pageState',"indexBody");
	
	$('.btn-toggle').click(function() {
	    $(this).find('.btn').toggleClass('active');  
	    
	    if ($(this).find('.btn-primary').size()>0) {
	    	$(this).find('.btn').toggleClass('btn-primary');
	    }
	    
	    
	    $(this).find('.btn').toggleClass('btn-default');
	       
	});
	
	
	
	action = "length";
	getProductfromCookie(action);
	
	//***********Request for all product category *******************//
		objhandleRequest.handleCategoryRequest();
	//*********************** END *************************//
	
	// -- shud be called only when profile page is openend -- For Deva
//	var supplierKey = 1;
//	objhandleRequest.handleShopProfileDisplay(supplierKey);
	//*********************** END *************************//
	

$("#editbtn").click(function(){
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
});




$("#getCartProduct").click(function(){
	
	getProductfromCookie("prod");
	
});





$('#checkout').click(function(){
	
//	$('#cartmodal').modal('hide');
//	$('#LoginModal').modal('show');
//	getCustOfflineDetails();
});






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


});

//*************************** Document ready function ends here ***********************************

function loadPage(id)
{
	var vid = $(id).attr("id");
//	alert("ready.js_266  "+vid);
	
	if(vid == "indexBody")
		{
			$.cookie('pageState',vid);
		}
	else if(vid == "shopProfile")
			{
				$.cookie('pageState',vid);
				ShopProfileDisplay();
			}
	else if(vid == "checkout")
	{
		$.cookie('pageState',vid);
		$("#checkoutClose").trigger("click");
	}
	
	$("#loadpage").load(vid+".jsp");
	
//	var pageState = $.cookie("pageState");
//	alert("pageState : "+pageState);
	
}




function saveShopkeeperDetails()
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

}

function saveUserDetails()
{

	document.getElementById("action").value = "edit";
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var mobileNo = $("#mobileNo").val();
	var email = $("#email").val();
	var address1 = $("#address1").val();
	var address2 = $("#address2").val();
	var state = $("#state").val();
	var street = $("#street").val();
	var city = $("#city").val();
	var pincode = $("#pincode").val();
//	var 
	
	console.log("firstName : " + firstName + "  lastName : " + lastName + "  mobileNo : " + mobileNo +"  email : "+email+"" +
			"  address1 : "+address1+"  address2 : "+address2 +"  state : "+state +"  city : "+city +"  street : "+street +"  pincode : "+pincode  );

objhandleRequest.handleUserDetailsSave(firstName, lastName, mobileNo, email, address1, address2, state, city, street, pincode);

}


function resetPassword()
{

	var password1 = $("#password1").val();
	var password2 = $("#password2").val();
	var email = "sharma.sunil.nov@gmail.com";
	var userType = "customer"; // -- change: after login,put usertype here
	
	objhandleRequest.handleResetPassword(password1, userType, email);
	
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
	
	getProductfromCookie("prod");
	document.getElementById("ok"+id).style.display = "none";
	document.getElementById("btn"+id).disabled = false;
		}
	catch (e)
	{
		console.log("ready.js  :: removeproductfromCArt(id)  :: Exception"+e)
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

function ShopProfileDisplay()
{
	var supplierKey = 1;
	objhandleRequest.handleShopProfileDisplay(supplierKey);
}

//objhandleRequest.handleCategoryRequest();
var objhandleRequest=new handleRequest();