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
	$('#UserType').jqxSwitchButton({ height: 27, width: 81, checked: true });

//	$('#UserType').on('change', function (event) {
//        console.log(event.args.check);
//        alert("sunil"+event.args.check);
//    });
	
//	var sPath = window.location.pathname;
//	var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
//	alert("Page Name : "+sPage);

	
//	$.cookie('pageState',"indexBody");
	
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
	var supplierKey = 1;
	objhandleRequest.handleShopProfileDisplay(supplierKey);

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
		saveUserDetails();
	}
});

$("#getCartProduct").click(function(){
	
	getProductfromCookie("prod");
	
});

$('#checkout').click(function(){
	
	$('#cartmodal').modal('hide');
	$('#LoginModal').modal('show');

});



});

//*************************** Document ready function ends here ***********************************

function loadPage(id)
{
	var vid = $(id).attr("id");
	
	if(vid == "indexBody")
		{
			$.cookie('pageState',vid);
		}
	else if(vid == "shopProfile")
			{
				$.cookie('pageState',vid);
			}
	
	$("#loadpage").load(vid+".jsp");
	
	var pageState = $.cookie("pageState");
//	alert("pageState : "+pageState);
	
}




function saveUserDetails()
 {

	$("#action").val("edit");
	document.getElementById("action").value = "edit";
	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var address = $("#address").val();
	var state = $("#state").val();
	var city = $("#city").val();
	var pincode = $("#pincode").val();

objhandleRequest.handleShopProfileDetails(firstName, lastName,address,city,state,pincode);

}


function login() 
{
//	alert("login");

	var emailLogin = $("#emailLogin").val();
	var passLogin = $("#passLoginTemp").val();
	var otpLogin = $("#otpLogin").val();
//	var passLogin = $("#UserType").val();
	var userType = $("#UserType").val();

	if(userType)
		userType = "customer";
	else
		userType = "supplier";
	
	console.log("emailLogin" + emailLogin + "passLogin" + passLogin + "userType" + userType +"otpLogin"+otpLogin );
	objhandleRequest.handleLogin(emailLogin, passLogin, userType, otpLogin);
}


function signUp()
{
//	alert("signUp");

	var passSignUp = $('#passSignUp').val();
	var mobileKey = $('#mobile').val();
	var emailKey = $('#emailSignUp').val();
	var userType = $("#UserType").val();

	if(userType)
		userType = "customer";
	else
		userType = "supplier";

	console.log("passSignUp" + passSignUp + "mobileKey" + mobileKey	+ "emailKey" + emailKey + "userType" + userType);
	objhandleRequest.handleSignUp(passSignUp, mobileKey, emailKey, userType);
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
	var userType = "customer";

	console.log("emailForgotPwd"+ emailForgotPwd);
	objhandleRequest.handleForgotPwd( emailForgotPwd, userType);

}
	
	$("#getCartProduct").click(function(){
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
		$("#productCountOnCart").empty();
		document.getElementById("productCountOnCart").innerHTML = i;
		
		if(condition == "okenable")
			{
				document.getElementById("ok"+gettingProductId).style.display = "block";
				document.getElementById("btn"+gettingProductId).disabled = true;
			}
		
	}

//	alert("count : "+count)
	if(count>0)
		{
			count = parseInt(i) + 1;
			$("#productCountOnCart").empty();
			document.getElementById("productCountOnCart").innerHTML = count;
		}
	else
		{
			$("#productCountOnCart").empty();
			document.getElementById("productCountOnCart").innerHTML = count;
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
	
	$("#productCountOnCart").empty();
	document.getElementById("productCountOnCart").innerHTML=len;
	
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
			$("#productCountOnCart").empty();
			document.getElementById("productCountOnCart").innerHTML="0";
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

//objhandleRequest.handleCategoryRequest();
var objhandleRequest=new handleRequest();