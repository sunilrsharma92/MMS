var action = "";
var arrayofProduct = [];
var datalabelShop = "";
var datalabelProd = "";
var shopAction = "";
var prodAction = "";
$(document).ready(function()
{
try
{
	$(".indexoverlay").show();
//	$("#indexMenuPage").load("indexMenu.jsp");
	var ps = $.session.get("pageState");
//	alert("Page State : "+ps);
	if(ps == undefined)
	{
		$("#loadpage").empty();
		$("#loadpage").load("indexBody.jsp");
	}
	
	$.session.set("viewprod", "");
	var path = window.location.pathname;
	var page = path.split("/").pop();
	writeLogAjax("Page : " + page, 1);
	if(page == "indexTemplate.jsp")
	{
		var query = window.location.search.substring(1, 4);
//		console.log(query);
		writeLogAjax("query : " + query, 1);
		if(query == "otp")
		{
			$("#otpLogin").show();
			$("#loginlabel").trigger("click");
		}
	}
	$("#mobcat").click(function()
	{
		$(".col-cat").removeClass("hidden-xs");
	});
	
	var loginData = $.session.get("loginData");
	if(loginData != null)
	{
		$("#myAcc").show();
		$("#loginDialogLink").hide();
		var sessionData = JSON.parse(loginData);
		if(userType == "supplier")
		{
			$("#custOrderPanel").hide();
		}
	}
	else
	{
	}
	$("#logoutLink").click(function()
	{
		$.confirm(
		{
		title : "Alert Message !",
		backgroundDismiss : false,
		content : "Are you sure you want to logout",
		confirm : function()
		{
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
			$.session.remove("shopprofileResponse");
			$.session.remove("shopProfileKey");
			$.session.remove("viewshop");
			$.session.remove("userType");
			$.session.remove("userType1");
			$.session.remove("ordernotification");
			$.cookie("key", null);
			localStorage.clear();
			window.location.replace("indexTemplate.jsp");
		},
		cancel : function()
		{
		}
		});
	});
	$("#continueshopping").click(function()
	{
		$("#checkoutClose").trigger("click");
	});
	
	$("#profileLink").click(function()
	{
		
		$.session.remove("shopid");
		
		var userType1 = $.session.get("userType1");
		if(userType1 != null && userType1 != "" && userType1 != undefined)
		{
			$.session.set("userType", userType1);
		}
		var vid = "";
		$.session.set("viewshop", "");
		var userType = $.session.get("userType");
		if(userType == "customer")
		{
			vid = "customerProfile";
			$("#loadpage").empty();
			$("#loadpage").load("customerProfile.jsp");
		}
		if(userType == "supplier")
		{
			vid = "shopProfile";
			$("#loadpage").empty();
			$("#loadpage").load("shopProfile.jsp");
		}
		$.session.set("pageState", vid);
		$(".customeroverlay").show();
//		$(".overlay1").hide();
	});
	
	$(".btn-toggle").click(function()
	{
		$(this).find(".btn").toggleClass("active");
		if($(this).find(".btn-primary").size() > 0)
		{
			$(this).find(".btn").toggleClass("btn-primary");
		}
		$(this).find(".btn").toggleClass("btn-default");
	});
	action = "length";
	var loginData = $.session.get("loginData");
	if(loginData != null)
	{
		var itemsinCart = $.session.get("itemsinCart");
		$(".productCountOnCart").empty();
		document.getElementById("productCountOnCart").innerHTML = parseInt(itemsinCart);
		document.getElementById("productCountOnCart1").innerHTML = parseInt(itemsinCart);
	}
	else
	{
		getProductfromCookie(action);
	}
	
	objhandleRequest.handleAllProductForAutoCompleteRequest("shop");
	objhandleRequest.handleAllProductForAutoCompleteRequest("prod");
	
	$(".getCartProduct").click(function()
	{
		$(".indexoverlay").show();
		var loginData = $.session.get("loginData");
		if(loginData != null)
		{
			var sessionData = JSON.parse(loginData);
			var userid = sessionData.key;
			var userType = sessionData.userType;
			objhandleRequest.handledisplayProductinCart("", "withlogin", userid, userType);
		}
		else
		{
			getProductfromCookie("prod");
		}
	});
	$("#checkout").click(function()
	{
	});
	try
	{
		$("#search").keyup(function(e)
		{
//			console.log("datalabelShop : "+JSON.stringify(datalabelShop));
			try
			{
				
				var label1 = datalabelShop.autoCompleteLabel;
				
				$("#search").autocomplete(
				{
				source : label1,
				select : function(event, ui)
				{
					$(".indexoverlay").show();
					var text = ui.item.label;
					var pageSta = $.session.get("pageState");
					if(pageSta != "indexBody")
					{
						$.session.set("pageState", "indexBody");
						$("#loadpage").empty();
						$("#loadpage").load("indexBody.jsp");
					}
					var count = 0;
					var clear = setInterval(function()
					{
						count++;
						if(count == 2)
						{
							searchShop();
							clearInterval(clear);
						}
					}, 1000);
				}
				});
			}
			catch(e)
			{
				console.log("Shop searching Exception : "+e);
			}
		});
		$("#search").keypress(function(e)
		{
			if(e.which == 13)
			{
				$(".indexoverlay").show();
				var pageSta = $.session.get("pageState");
				if(pageSta != "indexBody")
				{
					$.session.set("pageState", "indexBody");
					$("#loadpage").empty();
					$("#loadpage").load("indexBody.jsp");
				}
				var count = 0;
				var clear = setInterval(function()
				{
					count++;
					if(count == 2)
					{
						searchShop();
						clearInterval(clear);
					}
				}, 1000);
			}
		});
	}
	catch (e)
	{
		console.log("Exception in auto complete : " + e);
	}
	$("#passLoginTemp, #emailLogin").keypress(function(e)
	{
		if(e.which == 13)
		{
			login();
		}
	});
	$("#emailSignUp, #mobile, #passSignUp, #repass").keypress(function(e)
	{
		if(e.which == 13)
		{
			signUp();
		}
	});
	$("#myCarousel").carousel(
	{
		interval : 3000
	});
	$("[id^=carousel-selector-]").hover(function()
	{
		try
		{
			alert();
			var id_selector = $(this).attr("id");
			var id = id_selector.substr(id_selector.length - 1);
			id = parseInt(id);
			$("#myCarousel").carousel(id - 1);
			$("[id^=carousel-selector-]").removeClass("selected");
			$(this).addClass("selected");
		}
		catch(e)
		{
			console.log("ready.js slider on hover : "+e);
		}
	});
	$("#myCarousel").on("slid.bs.carousel", function(e)
	{
		var id = $(".item.active").data("slide-number");
		id = parseInt(id);
		$("[id^=carousel-selector-]").removeClass("selected");
		$("[id=carousel-selector-" + id + "]").addClass("selected");
	});
	$(".responsive").slick(
	{
	arrows : true,
	dots : false,
	infinite : false,
	speed : 300,
	slidesToShow : 3,
	slidesToScroll : 1,
	responsive : [
	{
	breakpoint : 1200,
	settings :
	{
	slidesToShow : 3,
	slidesToScroll : 1,
	infinite : true,
	dots : false
	}
	},
	{
	breakpoint : 992,
	settings :
	{
	slidesToShow : 3,
	slidesToScroll : 1,
	infinite : true,
	dots : false
	}
	},
	{
	breakpoint : 768,
	settings :
	{
	slidesToShow : 2,
	slidesToScroll : 1
	}
	},
	{
	breakpoint : 480,
	settings :
	{
	slidesToShow : 1,
	slidesToScroll : 1
	}
	} ]
	});
	
	/*$("#getCartProduct").click(function()
	{
		getProductfromCookie("prod");
	});*/
	
}
catch(e)
{
	console.log("Document.ready function Exception : "+e);
}
});

function loadShopProfilePage(id)
{
	try
	{
		$(".indexoverlay").show();
		$("#removesearchbtn").trigger("click");
		var shopid = $.session.get("shopid");
		var loginData = $.session.get("loginData");
		if(loginData != null && loginData != "" && loginData != undefined)
		{
			var userType = $.session.get("userType");
			$.session.remove("userType");
			$.session.set("userType1", userType);
		}
		$.session.set("viewshop", "viewshop");
		$.session.set("shopid", id);
		$("#loadpage").empty();
		$("#loadpage").load("shopProfile.jsp");
		$.session.remove("pageState");
		$.session.set("pageState", "shopProfile");
		writeLogAjax("supplierKey : " + id, 1);
		objhandleRequest.handleShopProfileDisplay(id);
		
	}
	catch (e)
	{
		console.log("ready.js loadShopProfilePage Exception : " + e);
	}
}
function autocompleteLabel(data, action)
{
	if(action == "shop")
	{
		datalabelShop = data;
		shopAction = action;
	}
	else
	{
		if(action == "prod")
		{
			datalabelProd = data;
			prodAction = action;
		}
	}
	
}
function loadProductViewPage(id)
{
	$.session.set("viewprod", "viewprod");
	$("#loadpage").empty();
	$("#loadpage").load(id + ".jsp");
}
function loadPage(id)
{
	$.session.set("viewprod", "");
	var vid = $(id).attr("id");
	if(vid == "indexBody")
	{
		$.session.set("pageState", vid);
	}
	else
	{
		if(vid == "shopProfile")
		{
			$.session.set("pageState", vid);
		}
		else
		{
			if(vid == "checkout")
			{
				var ammount = $("#totalpurchase").text();
				if(ammount == "Total Price : Rs 0.00 " || ammount == "Total Price : Rs 0 " || ammount == "Total Price : NaN" || ammount == "Total Price : " || ammount == "")
				{
					jqueryconform("Message", "Add product in cart to proceed further");
					vid = "";
					return false;
				}
				else
				{
					$.session.set("pageState", vid);
					$("#checkoutClose").trigger("click");
				}
			}
		}
	}
	$("#loadpage").empty();
	$("#loadpage").load(vid + ".jsp");
	if(vid == "checkout")
	{
		$.session.set("checkout", "checkout");
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
}
function jqueryconform(title, message)
{
	$.alert(
	{
	title : title + " !",
	backgroundDismiss : false,
	content : message,
	confirm : function()
	{
	}
	});
}
function saveUserDetails(id)
{
	$(".customeroverlay").show();
	if(id == "address")
	{
		$("#firstNameSave").val("");
		$("#lastNameSave").val("");
		$("#mobileNoSave").val("");
	}
	else
	{
		$("#address1Save").val("");
		$("#address2Save").val("");
		$("#stateSave").val("");
		$("#streetSave").val("");
		$("#citySave").val("");
		$("#pincodeSave").val("");
	}
	document.getElementById("action").value = "edit";
	var firstName = $("#firstNameSave").val();
	var lastName = $("#lastNameSave").val();
	var mobileNo = $("#mobileNoSave").val();
	var address1 = $("#address1Save").val();
	var address2 = $("#address2Save").val();
	var state = $("#stateSave option:selected").text();
	var street = $("#streetSave").val();
	var city = $("#citySave").val();
	var pincode = $("#pincodeSave").val();
	var userType = $.session.get("userType");
	var loginData = $.session.get("loginData");
	var sessionData = JSON.parse(loginData);
	var email = sessionData.emailId;
	var key = sessionData.key;
	console.log("firstName : " + firstName + "  lastName : " + lastName + "  mobileNo : " + mobileNo + "  email : " + email + "" + "  address1 : " + address1 + "  address2 : " + address2 + "  state : " + state + "  city : " + city + "  street : " + street + "  pincode : " + pincode + " userType :" + userType + " key " + key);
	writeLogAjax("firstName : " + firstName + "  lastName : " + lastName + "  mobileNo : " + mobileNo + "  email : " + email + "" + "  address1 : " + address1 + "  address2 : " + address2 + "  state : " + state + "  city : " + city + "  street : " + street + "  pincode : " + pincode + " userType :" + userType + " key " + key, 1);
	objhandleRequest.handleUserDetailsSave(firstName, lastName, mobileNo, email, address1, address2, state, city, street, pincode, userType, key);
}
function resetPassword()
{
	$(".customeroverlay").show();
	var password1 = $("#password1").val();
	var password2 = $("#password2").val();
	var userType = $.session.get("userType");
	var loginData = $.session.get("loginData");
	var sessionData = JSON.parse(loginData);
	var email = sessionData.emailId;
	objhandleRequest.handleResetPassword(password1, userType, email);
}
function login()
{
	var emailLogin = $("#emailLogin").val();
	var passLogin = $("#passLoginTemp").val();
	var otpLogin = $("#otpLogin").val();
	var userType = $("#userType").val();
	$("#loginalerts").empty();
	if(emailLogin == "")
	{
		document.getElementById("loginalerts").innerHTML = "Please enter your login email";
		return false;
	}
	else
	{
		if(passLogin == "")
		{
			document.getElementById("loginalerts").innerHTML = "Please enter your login password";
			return false;
		}
		else
		{
			if(userType)
			{
				userType = "customer";
			}
			else
			{
				userType = "supplier";
			}
			console.log("emailLogin : " + emailLogin + "  passLogin : " + passLogin + "  userType : " + userType + "  otpLogin : " + otpLogin);
			writeLogAjax("emailLogin : " + emailLogin + "  passLogin : " + passLogin + "  userType : " + userType + "  otpLogin : " + otpLogin, 1);
			$(".overlay").show();
			objhandleRequest.handleLogin(emailLogin, passLogin, userType, otpLogin);
			return true;
		}
	}
}
function signUp()
{
	var passSignUp = $("#passSignUp").val();
	var repass = $("#repass").val();
	var mobileKey = $("#mobile").val();
	var emailKey = $("#emailSignUp").val();
	var userType = $("#userType").val();
	$("#signupalerts").empty();
	if(emailKey == "")
	{
		document.getElementById("signupalerts").innerHTML = "Please enter your email";
		return false;
	}
	else
	{
		if(mobileKey == "")
		{
			document.getElementById("signupalerts").innerHTML = "Please enter your mobile number";
			return false;
		}
		else
		{
			if(passSignUp == "")
			{
				document.getElementById("signupalerts").innerHTML = "Please enter your password";
				return false;
			}
			else
			{
				if(repass == "")
				{
					document.getElementById("signupalerts").innerHTML = "Please re-enter your password";
					return false;
				}
				else
				{
					if(passSignUp != repass)
					{
						document.getElementById("signupalerts").innerHTML = "Conform password should be same as new password";
						return false;
					}
					else
					{
						if(userType)
						{
							userType = "customer";
						}
						else
						{
							userType = "supplier";
						}
						console.log("passSignUp" + passSignUp + "mobileKey" + mobileKey + "emailKey" + emailKey + "userType" + userType);
						writeLogAjax("passSignUp" + passSignUp + "mobileKey" + mobileKey + "emailKey" + emailKey + "userType" + userType, 1);
						$("#userType").addClass("blink_me");
						$.confirm(
						{
						title : "Alert Message !",
						backgroundDismiss : false,
						content : "Are you sure you want to register as " + userType,
						confirm : function()
						{
							$("#userType").removeClass("blink_me");
							$(".overlay").show();
							objhandleRequest.handleRegisteration(passSignUp, mobileKey, emailKey, userType);
							return true;
						},
						cancel : function()
						{
							$("#userType").removeClass("blink_me");
						}
						});
					}
				}
			}
		}
	}
}
function forgotPwd()
{
	var emailForgotPwd = $("#emailForgotPwd").val();
	var userType = $("#userType").val();
	$("#forgetpassalerts").empty();
	if(emailForgotPwd == "")
	{
		document.getElementById("forgetpassalerts").innerHTML = "Please enter your email to get your new password";
		return false;
	}
	else
	{
		if(userType)
		{
			userType = "customer";
		}
		else
		{
			userType = "supplier";
		}
		console.log("emailForgotPwd : " + emailForgotPwd + "   userType" + userType);
		writeLogAjax("emailForgotPwd : " + emailForgotPwd + "   userType" + userType, 1);
		$(".overlay").show();
		objhandleRequest.handleForgotPwd(emailForgotPwd, userType);
		return true;
	}
}

function getSelectedProduct(subid, strmainCategoryid)
{
	var strsubCategoryid = $(subid).attr("id");
	$("#myCarousel").hide();
	$("#mobcat").click();
	var loginData = $.session.get("loginData");
	if(loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
		objhandleRequest.handledisplaySelectedProduct(strmainCategoryid, strsubCategoryid, userid, userType, "withlogin");
	}
	else
	{
		objhandleRequest.handledisplaySelectedProduct(strmainCategoryid, strsubCategoryid, 0, "", "withoutlogin");
	}
}
function getProductfromCookie(condition)
{
	try
	{
		var i = 0;
		var count = 0;
		var prodjoin = "";
		var gettingCookieArray = $.cookie("key");
		
		if(gettingCookieArray != null && gettingCookieArray != undefined)
		{
			var gettingCookieValue = JSON.parse(gettingCookieArray);
			console.log("JSON.parse(gettingCookieArray) : " + gettingCookieValue);
			writeLogAjax("JSON.parse(gettingCookieArray) : " + gettingCookieValue, 1);
			for ( var i in gettingCookieValue)
			{
				var gettingProductId = gettingCookieValue[i];
				if(i == 0)
				{
					prodjoin = gettingProductId + "#";
				}
				else
				{
					prodjoin = prodjoin + gettingProductId + "#";
				}
				count++;
				$(".productCountOnCart").empty();
				document.getElementById("productCountOnCart").innerHTML = gettingCookieValue.length;
				document.getElementById("productCountOnCart1").innerHTML = gettingCookieValue.length;
				if(condition == "okenable")
				{
					document.getElementById("ok" + gettingProductId).style.display = "block";
					document.getElementById("btn" + gettingProductId).disabled = true;
				}
			}
		}
		if(count > 0)
		{
			count = parseInt(i) + 1;
			$(".productCountOnCart").empty();
			document.getElementById("productCountOnCart").innerHTML = count;
			document.getElementById("productCountOnCart1").innerHTML = count;
		}
		else
		{
			try
			{
				$(".productCountOnCart").empty();
				document.getElementById("productCountOnCart").innerHTML = count;
				document.getElementById("productCountOnCart1").innerHTML = count;
			}
			catch(e)
			{
				
			}
			
		}
		if(condition === "prod")
		{
			console.log("prodjoin : " + prodjoin);
			writeLogAjax("prodjoin : " + prodjoin, 1);
			objhandleRequest.handledisplayProductinCart(prodjoin, "withoutlogin", 0, "");
		}
		
		$(".indexoverlay").hide();
		
	}
	catch (e)
	{
		console.log("ready.js    getProductfromCookie(condition)    Exception : " + e);
		writeLogAjax("ready.js    getProductfromCookie(condition)    Exception : " + e, 0);
	}
}
function getcookies()
{
	var gotCookies = $.cookie("key");
	try
	{
		var gotCookiesArray = JSON.parse(gotCookies);
		arrayofProduct = [];
		for ( var i in gotCookiesArray)
		{
			var productIdfromCookie = gotCookiesArray[i];
			arrayofProduct.push([ productIdfromCookie ]);
		}
	}
	catch (e)
	{
		console.log("ready.js  :: getcookies()  :: Exception" + e);
		writeLogAjax("ready.js  :: getcookies()  :: Exception" + e, 0);
	}
}
function addproducttoCArt(productid)
{
	try
	{
		count = 0;
		var loginData = $.session.get("loginData");
		if(loginData != null)
		{
			var sessionData = JSON.parse(loginData);
			var userid = sessionData.key;
			var userType = sessionData.userType;
			document.getElementById("ok" + productid).style.display = "block";
			document.getElementById("btn" + productid).disabled = true;
			var shopid = $.session.get("shopid");
			objhandleRequest.aadToCartForLoggedUser(userid, userType, productid, "authoriseduser", 1, "add", shopid);
			$(".rotatespanclass").addClass("rotatelabel");
			var stop = setInterval(function()
			{
				count++;
				if(count == 3)
				{
					$(".rotatespanclass").removeClass("rotatelabel");
					clearInterval(stop);
				}
			}, 1000);
		}
		else
		{
			var shopid = $.session.get("shopProfileKey");
			var prodid = productid + "/" + shopid;
			getcookies();
			for ( var i in arrayofProduct)
			{
				arrayofProduct[i] == productid;
			}
			arrayofProduct.push([ prodid ]);
			var len = arrayofProduct.length;
			$(".productCountOnCart").empty();
			document.getElementById("productCountOnCart").innerHTML = len;
			document.getElementById("productCountOnCart1").innerHTML = len;
			$(".rotatespanclass").addClass("rotatelabel");
			var stop = setInterval(function()
			{
				count++;
				if(count == 3)
				{
					$(".rotatespanclass").removeClass("rotatelabel");
					clearInterval(stop);
				}
			}, 1000);
			$.cookie("key", JSON.stringify(arrayofProduct));
			document.getElementById("ok" + productid).style.display = "block";
			var checkAllCookies_AddedorNot = $.cookie("key");
			var checkCookiesArray = JSON.parse(checkAllCookies_AddedorNot);
			console.log("getcookies()   JSON.parse(checkAllCookies_AddedorNot)   : " + checkCookiesArray);
			writeLogAjax("getcookies()   JSON.parse(checkAllCookies_AddedorNot)   : " + checkCookiesArray, 1);
			document.getElementById("btn" + productid).disabled = true;
		}
	}
	catch (e)
	{
		console.log("ready.js  addproducttoCArt  Exception : " + e);
	}
}
function viewProduct(images, prodName, price, stockvalue, productid, stockcrtbtn)
{
	var disablebtn = "";
	if(document.getElementById("btn" + productid).disabled == true)
	{
		disablebtn = 'disabled="disabled"';
	}
	else
	{
		disablebtn = "";
	}
	var zoominage = '<div class="row">' + '<img id="img_01" style="width:550px; height:350px;" src="' + images + '" data-zoom-image="' + images + '"/>' + "</div>" + '<div class="row" id="gallery_01">' + '<a href="#" data-image="' + images + '" data-zoom-image="' + images + '">' + '<img id="img_01" class="heightWidth"  src="' + images + '" />' + "</a>" + "</div>";
	var prodDisc = '<div class="row" style="width:100%; margin-top:20px;margin-left:20px;">' + "<label><h2>Name of product : <h2>" + prodName + "</label>" + "</div><!--/row-->" + '<div class="row" style="width:100%;margin-top:20px;margin-left:20px;">' + "<label><h3>Product Describtion</h3></label>" + "<p>Cotton Blanket Also Known As Solapuri Chaddar Is Very Attractive And Durable. Cotton Blanket Is Made On Jacquard Design To Give Adorable Centre Design Like Galicha.</p>" + "</div><!--/row-->" + '<div class="row" style="width:100%;margin-top:20px;margin-left:20px;">' + '<div class="cartbtn "><button type="button" ' + disablebtn + ' onclick="disablebtn(' + productid + "); addproducttoCArt(" + productid + ');" class="btn btn-success cartsz " id="btn' + productid + '">Add <span class="pull-right glyphicon glyphicon-shopping-cart"></span></button></div>' + "</div>";
	$.session.set("zoominage", zoominage);
	$.session.set("prodDisc", prodDisc);
}
function removeproductfromCArt(id)
{
	try
	{
		try
		{
//			$(".overlay").show();
		}
		catch(e)
		{
			
		}
		
		$(".indexoverlay").show();
		
		var loginData = $.session.get("loginData");
		if(loginData != null && loginData != undefined)
		{
			var sessionData = JSON.parse(loginData);
			var userid = sessionData.key;
			var userType = sessionData.userType;
			objhandleRequest.removeFromCart(userid, userType, id, "authoriseduser");
			document.getElementById("ok" + id).style.display = "none";
			document.getElementById("btn" + id).disabled = false;
		}
		else
		{
			var gotCookies = $.cookie("key");
			var gotCookiesArray = JSON.parse(gotCookies);
			if(gotCookiesArray == "" || gotCookiesArray == null || gotCookiesArray == undefined)
			{
				try
				{
					$(".productCountOnCart").empty();
					document.getElementById("productCountOnCart").innerHTML = "0";
					document.getElementById("productCountOnCart1").innerHTML = "0";
				}
				catch(e)
				{
					
				}
				
			}
			arrayofProduct = [];
			for ( var i in gotCookiesArray)
			{
				var productIdfromCookie = gotCookiesArray[i];
//				var c = JSON.stringify(productIdfromCookie);
//				var a = c.split("/");
//				var b = a[0];
//				console.log("id : "+id+" b : "+b);
//				var a = productIdfromCookie.split("")
				if(id != productIdfromCookie)
				{
					arrayofProduct.push([ productIdfromCookie ]);
				}
				else
				{
				}
			}
			$.cookie("key", JSON.stringify(arrayofProduct));
			var pageState = $.session.get("pageState");
			if(pageState == "checkout")
			{
				$.session.set("checkout", "checkout");
				getProductfromCookie("prod");
			}
			getProductfromCookie("prod");
			var viewprod = $.session.get("viewprod");
			if(viewprod == "viewprod")
			{
				enablebtn(id);
			}
			try
			{
				document.getElementById("ok" + id).style.display = "none";
				document.getElementById("btn" + id).disabled = false;
			}
			catch(e)
			{
				
			}
			
			$(".indexoverlay").hide();
			
			try
			{
				$(".overlay").hide();
			}
			catch(e)
			{
				
			}
		}
	}
	catch (e)
	{
		console.log("ready.js  :: removeproductfromCArt(id)  :: Exception" + e);
		writeLogAjax("ready.js  :: removeproductfromCArt(id)  :: Exception" + e, 0);
	}
}
function searchProduct()
{
	$(".indexoverlay").show();
	$("#dashboard").show();
	
	$("#myCarousel").hide();
	$("#loadpagecontent").hide();
	var txt = $("#searchProductTxtBox").val();
	if(txt != "" || txt != null)
	{
		$("#hideadddiv").hide();
		$("#productList").show();
	}
	else
	{
		if(txt == "" || txt == null)
		{
			$("#hideadddiv").show();
			$("#productList").hide();
		}
	}
	if(txt != "")
	{
		var loginData = $.session.get("loginData");
		var shopid = $.session.get("shopid");
		if(loginData != null)
		{
			var sessionData = JSON.parse(loginData);
			var userid = sessionData.key;
			var userType = sessionData.userType;
			if(shopid === undefined)
			{
				shopid = userid;
			}
			objhandleRequest.searchProduct(txt, "product", shopid, userid, userType);
		}
		else
		{
			objhandleRequest.searchProduct(txt, "product", shopid, "", "");
		}
	}
}
function searchShop()
{
	$(".indexoverlay").show();
	var txt = $("#search").val();
	if(txt != "" || txt != null)
	{
		$(".hideslider").hide();
		$("#searchtitle").show();
		$("#shopList").show();
	}
	else
	{
		if(txt == "" || txt == null)
		{
			$(".hideslider").show();
			$("#shopList").hide();
			$("#searchtitle").hide();
		}
	}
	if(txt != "")
	{
		objhandleRequest.searchProduct(txt, "shop", "", "");
	}
}
function callAlerts(msg)
{
	jqueryconform("Message", msg);
}
function quantity(txtboxid, action, price, productid)
{
	try
	{
		var totalcartAmmount = $("#totalcartAmmounthidden").val();
		var val = parseInt($("#" + txtboxid).val());
		console.log("Old : " + txtboxid + " ******************** New : " + txtboxid.split("mo").join("mo1"));
		var newtxtID = txtboxid.split("mo").join("mo1");
		var total = 0;
		if(action == "add")
		{
			total = val + 1;
			$("#" + txtboxid).val(total);
			updateQuantity(productid, total);
			var oldpricePerProduct = price * val;
			var newpricePerProduct = price * total;
			var cartAmmount = 0;
			var NewcartAmmount = 0;
			cartAmmount = parseInt(totalcartAmmount) - parseInt(oldpricePerProduct);
			NewcartAmmount = parseInt(cartAmmount) + parseInt(newpricePerProduct);
			$("#totalpurchase").empty();
			var ammt = '<span class="tlbprce">Total Price :</span>' + '<span class="totalprize"><strong> Rs ' + NewcartAmmount + "</strong> </span>";
			$("#totalpurchase").append(ammt);
			$("#totalcartAmmounthidden").val(NewcartAmmount);
			try
			{
				var pageState = $.session.get("pageState");
				console.log("checkout.js pageState : " + pageState);
				if(pageState == "checkout")
				{
					$("#" + newtxtID).val(total);
					$("#totalpurchaseOnCheckout").empty();
					$("#totalpurchaseOnCheckout").append(ammt);
					$("#totalpurchaseOnCheckoutHidden").val(NewcartAmmount);
				}
			}
			catch (e)
			{
				console.log("ready.js quantity (Checking user is on which page..? checkout.jsp or not Exception ADD: " + e);
			}
			console.log("old cart ammount : " + totalcartAmmount + " Old quantity : " + val + " New quantity : " + total + " oldpricePerProduct : " + price * val + " newpricePerProduct : " + price * total + " cartAmmount : " + cartAmmount + " NewcartAmmount : " + NewcartAmmount);
			writeLogAjax("old cart ammount : " + totalcartAmmount + " Old quantity : " + val + " New quantity : " + total + " oldpricePerProduct : " + price * val + " newpricePerProduct : " + price * total + " cartAmmount : " + cartAmmount + " NewcartAmmount : " + NewcartAmmount, 1);
		}
		else
		{
			if(action == "minus")
			{
				if(val > 1)
				{
					total = val - 1;
					$("#" + txtboxid).val(total);
					updateQuantity(productid, total);
					var oldpricePerProduct = price * val;
					var newpricePerProduct = price * total;
					var cartAmmount = 0;
					var NewcartAmmount = 0;
					cartAmmount = parseInt(totalcartAmmount) - parseInt(oldpricePerProduct);
					NewcartAmmount = parseInt(cartAmmount) + parseInt(newpricePerProduct);
					$("#totalpurchase").empty();
					var ammt = '<span class="tlbprce">Total Price :</span>' + '<span class="totalprize"><strong> Rs ' + NewcartAmmount + "</strong> </span>";
					$("#totalpurchase").append(ammt);
					$("#totalcartAmmounthidden").val(NewcartAmmount);
					try
					{
						var pageState = $.session.get("pageState");
						console.log("checkout.js pageState : " + pageState);
						if(pageState == "checkout")
						{
							$("#" + newtxtID).val(total);
							$("#totalpurchaseOnCheckout").empty();
							$("#totalpurchaseOnCheckout").append(ammt);
							$("#totalpurchaseOnCheckoutHidden").val(NewcartAmmount);
						}
					}
					catch (e)
					{
						console.log("ready.js quantity (Checking user is on which page..? checkout.jsp or not Exception MINUS: " + e);
					}
					console.log("old cart ammount : " + totalcartAmmount + " Old quantity : " + val + " New quantity : " + total + " oldpricePerProduct : " + price * val + " newpricePerProduct : " + price * total + " cartAmmount : " + cartAmmount + " NewcartAmmount : " + NewcartAmmount);
					writeLogAjax("old cart ammount : " + totalcartAmmount + " Old quantity : " + val + " New quantity : " + total + " oldpricePerProduct : " + price * val + " newpricePerProduct : " + price * total + " cartAmmount : " + cartAmmount + " NewcartAmmount : " + NewcartAmmount, 1);
				}
			}
		}
	}
	catch (e)
	{
		console.log("ready.js quantity Exception : " + e);
	}
}
function managetotalprice(NewcartAmmount)
{
	try
	{
		var checkout = $.session.get("checkout");
		if(checkout != null && checkout !== "" && checkout == "checkout")
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
	}
	catch (e)
	{
		console.log("ready.js managetotalprice Exception : " + e);
	}
}
function updateQuantity(productid, quantity)
{
	try
	{
		var loginData = $.session.get("loginData");
		if(loginData != null)
		{
			var sessionData = JSON.parse(loginData);
			var userid = sessionData.key;
			var userType = sessionData.userType;
			objhandleRequest.aadToCartForLoggedUser(userid, userType, productid, "authoriseduser", quantity, "update");
		}
		else
		{
//			objhandleRequest.aadToCartForLoggedUser(0, "", productid, "unauthorised", quantity, "update");
//			jqueryconform("Message", "Please login to increase or decrease quantity of product.");
		}
	}
	catch (e)
	{
		console.log("ready.js updateQuantity Exception : " + e);
	}
}
function purchaseTemplet(template, shopName, shopAddress, total, orderid)
{
	
	var customerName = "";
	var customerAddress = "";
	var customerEmailid = "";
	var userType = "";
	var phone = "";
	var name = "";
	
	var loginData1 = $.session.get("loginData");
	var loginData = JSON.parse(loginData1);
//	alert("loginData : "+JSON.stringify(loginData));

		var address1 = loginData.address1;
		var address2 = loginData.address2;
		customerEmailid = loginData.emailId;
		userType = loginData.userType;
		phone = loginData.phone;
		customerName = loginData.firstName +" "+ loginData.lastName;
		
		if(address1 != null && address1 != "" && address1 != undefined)
		{
			customerAddress = address1;
		}
		else if(address2 != null && address2 != "" && address2 != undefined)
		{
			customerAddress = address2;
		}

//		alert(customerEmailid+" --> "+userType+" --> "+total+" --> "+phone+" --> "+customerName+" --> "+orderid);
	
	var purchaseTemplet = '<head style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">'+
	'		<style type="text/css" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">'+
	'	'+
	'	 .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:" "}.btn-group-vertical>.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}'+
	'	</style>'+
	''+
	'</head>'+
	'<body style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;margin: 0;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;font-size: 14px;line-height: 1.42857143;color: #333;background-color: #fff;">'+
	'	<div class="container well" style="width: 600px;padding: 10px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;min-height: 20px;margin-bottom: 20px;background-color: #f5f5f5;border: 1px solid #e3e3e3;border-radius: 4px;-webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.1);box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 1px 0 rgba(255,255,255,.1);background-image: linear-gradient(to bottom,#e8e8e8 0,#f5f5f5 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ffe8e8e8\', endColorstr=\'#fff5f5f5\', GradientType=0);background-repeat: repeat-x;border-color: #dcdcdc;">'+
	''+
	'		<div class="container top" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;width: 100%;background-color: #1D9688;height: 100px;border: 5px solid #FFF;">'+
	'			<div class="font"'+
	'				style="-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; color: #FFF;">'+
	'				<h4 align="center"'+
	'					style="-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; font-family: inherit; font-weight: 500; line-height: 1.1; color: inherit; margin-top: 10px; margin-bottom: 10px; font-size: 18px;">Welcome'+
	'					to</h4>'+
	'			</div>'+
	'			<div class="font" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;color: #FFF;"><h3 align="center" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;orphans: 3;widows: 3;page-break-after: avoid;font-family: inherit;font-weight: 500;line-height: 1.1;color: inherit;margin-top: 20px;margin-bottom: 10px;font-size: 24px;">Make My Shopy</h3> </div>'+
	'		</div><!-- End of Top -->'+
	''+
	'		<div class="container middle" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;width: 100%;border: 5px solid #FFF;background-color: #225656;">'+
	'			<div class="row" style="margin-top: 10px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;margin-right: -15px;margin-left: 0px;">'+
	'				<p class="font" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;orphans: 3;widows: 3;margin: 0 0 10px;color: #FFF;">Hi <b style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-weight: 700;">'+customerName+'</b>,<br style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;"><br style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">'+
	'				Thank you for your order from <a href="http://www.makemyshopy.com" style="font-size: 14px;color: #04E8C0;text-decoration: underline;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;background-color: transparent;" target="_blank">http://www.makemyshopy.com</a></p><br style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">'+
	'					<p style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;orphans: 3;widows: 3;margin: 0 0 10px;color: #FFF;">Below are the order details:</p>'+
	''+
	'				'+
	'			</div>'+
	'			<div class="container cheight" style="width: 100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;margin: 0px 0px 10px 0px;max-height: 300px;overflow: auto;padding: 0px;">	'+
	''+
	'                  <table class="table table-striped" cellspacing="0" cellpadding="0" style="background-color: #FFF;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;border-spacing: 0;border-collapse: collapse!important;width: 100%;max-width: 100%;margin-bottom: 20px;font-size: 12px;">'+
	'                    <thead class="hidden-xs" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;display: table-header-group;">'+
	'                      <tr style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;page-break-inside: avoid;">'+
	'                        <th class="cimg" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;text-align: left;width: 5%;line-height: 1.42857143;vertical-align: bottom;border-top: 1px solid #ddd;border-bottom: 2px solid #ddd;background-color: #fff!important;">Image</th>'+
	'                        <th class="cname" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;text-align: left;width: 50%;line-height: 1.42857143;vertical-align: bottom;border-top: 1px solid #ddd;border-bottom: 2px solid #ddd;background-color: #fff!important;">Name</th>'+
//	'                        <th class="csize" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;text-align: left;line-height: 1.42857143;vertical-align: bottom;border-top: 1px solid #ddd;border-bottom: 2px solid #ddd;background-color: #fff!important;">Size</th>'+
	'                        <th class="cqty" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;text-align: left;line-height: 1.42857143;vertical-align: bottom;border-top: 1px solid #ddd;border-bottom: 2px solid #ddd;background-color: #fff!important;">Qty</th>'+
	'                        <th class="cprice" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;text-align: left;line-height: 1.42857143;vertical-align: bottom;border-top: 1px solid #ddd;border-bottom: 2px solid #ddd;background-color: #fff!important;">Price</th>'+
//	'                        <th class="cprice" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;text-align: left;line-height: 1.42857143;vertical-align: bottom;border-top: 1px solid #ddd;border-bottom: 2px solid #ddd;background-color: #fff!important;">Total</th>'+
	'                      </tr>'+
	'                    </thead>'+
	'                    <tbody style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">'
						+template+
	'                 </tbody>'+
	'               </table>'+
	'             </div>'+
	'             <div class="totaldiv pull-right" style="background-color: #FFF;padding: 5px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;text-align: center;padding-top: 7px;float: right!important;">'+
	'              <span class="" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">Total Price :</span>'+
	'              <span class="" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;"><strong style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-weight: 700;"> Rs '+total+'</strong> </span> '+
//	'              <span class="" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">You save :</span> '+
//	'              <span class="" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;"><strong style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-weight: 700;"> Rs '+saved+'</strong> </span>'+
	'              '+
	'            </div><br style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;"><br style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">'+
	'            <div class="row" style="width: 100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;margin-right: -15px;margin-left: 0px;">'+
	'            <div class="col-md-6 col-sm-6 col-xs-12 ship" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;float: left;width: 50%;background-color: #FFF;border: 1px solid #225656;">'+
	'            	<b style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-weight: 700;">Shipping Address:</b>'+
	'            	<div class="buyer-name" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">'+customerName+'</div>'+
	'            	<div class="buyer-address" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">'+customerAddress+'</div></div>'+
	'            </div>'+
	'            <br style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;"><br style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">'+
	'            '+
	'		</div><!-- end of middle -->'+
	''+
	'		<div class="container bottom" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;width: 100%;border: 5px solid #FFF;height: 150px;background-color: gray;">'+
	'			<div style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;"> <p class="font" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;orphans: 3;widows: 3;margin: 0 0 10px;color: #FFF;">Please visit the site and enjoy shopping from anywhere</p>'+
	'				<p style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;orphans: 3;widows: 3;margin: 0 0 10px;color: #FFF;">Connect with Us </p>'+
	'			</div>'+
	'		</div>'+
	'</div>';
	
	objhandleRequest.emailOrderDetails(purchaseTemplet, customerEmailid, userType, ""+total, phone, customerName, orderid);

}
var objhandleRequest = new handleRequest();