/**
 * 
 */
//*************************** Document ready function starts from here ***********************************
var action = "";
var arrayofProduct = [];
var datalabelShop = "";
var datalabelProd = "";
var shopAction = "";
var prodAction = "";

$(document).ready(function(){
	
//*******************************************************************************************************************
	
//*******************************************************************************************************************
	$.session.set('viewprod','');
	var path = window.location.pathname;
	var page = path.split("/").pop();
//	console.log( page );
	writeLogAjax( "Page : "+page ,1);
	
	if(page == "indexTemplate.jsp")
	{
		var query = window.location.search.substring(1, 4);
		console.log(query);
		writeLogAjax("query : "+query,1);
		
		if(query == "otp")
		{
			$("#otpLogin").show();
			$("#loginlabel").trigger("click");
		}
		
	}
//*******************************************************************************************************************
	 $("#mobcat").click(function(){
//			alert("mobile category clicked")
			$(".col-cat").removeClass("hidden-xs");
			
		});

//*******************************************************************************************************************	
	
	$('#userType').jqxSwitchButton({ height: 27, width: 81, checked: true });

//*****************************************************AutoComplete**************************************************************	
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

		$.confirm({
	        title: 'Alert Message !',
	        backgroundDismiss: false,
	        content: "Are you sure you want to logout",
	        confirm: function(){
	        	
				$.session.remove('loginData');
				$.session.remove('usertype');
				$.session.remove('pageState');
				$.session.remove('checkout');
				$.session.remove('contentState');
				$.session.remove('addressList');
				$.session.remove('count');
				$.session.remove('viewprod');
				$.session.remove('zoominage');
				$.session.remove('prodDisc');
				$.session.remove('checkoutlogin');
				$.session.remove('itemsinCart');
				$.session.remove("profileimg");
				$.session.remove("shopprofileResponse");
				$.session.remove("shopProfileKey");
				$.session.remove("viewshop");
				$.session.remove("userType");
				$.session.remove("userType1");
//				$.cookie("key","");

				window.location.replace("indexTemplate.jsp");
	        	
	        },
	        cancel: function(){}
	        
	    });
	
//		jConfirm("Are you sure you want to logout", "Alert Message", function(e){
//			if(e == true)
//				{
//					$.session.remove('loginData');
//					$.session.remove('usertype');
//					$.session.remove('pageState');
//					$.session.remove('checkout');
//					$.session.remove('contentState');
//					$.session.remove('addressList');
//					$.session.remove('count');
//					$.session.remove('viewprod');
//					$.session.remove('zoominage');
//					$.session.remove('prodDisc');
//					$.session.remove('checkoutlogin');
//					$.session.remove('itemsinCart');
//					$.session.remove("profileimg");
//					$.session.remove("shopprofileResponse");
//					$.session.remove("shopProfileKey");
//					$.session.remove("viewshop");
//					$.session.remove("userType");
//					$.session.remove("userType1");
////					$.cookie("key","");
//	
//					window.location.replace("indexTemplate.jsp");
//				}
//		});
		
	});
	
	
//*******************************************************************************************************************
	
	$("#continueshopping").click(function() {
		
		$("#checkoutClose").trigger("click");
	
	});
	
//*******************************************************************************************************************
	
	// -- My Profile link
	$("#profileLink").click(function() {
//		alert("profileLink");
		$.session.remove("shopid");
		
		
		var userType1 = $.session.get("userType1");
		if(userType1 != null && userType1 != "" && userType1 != undefined)
		{
			$.session.set("userType", userType1);
		}
		
		var vid = "";
		$.session.set("viewshop","");
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
//				shopProfileDisplay();
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
	var loginData = $.session.get('loginData');

	if(loginData != null)
	{
		var itemsinCart = $.session.get("itemsinCart");
//		alert("itemsinCart : "+itemsinCart);
		$(".productCountOnCart").empty();
		document.getElementById("productCountOnCart").innerHTML = parseInt(itemsinCart);
		document.getElementById("productCountOnCart1").innerHTML = parseInt(itemsinCart);
	}
	else
	{
		getProductfromCookie(action);
	}
	
	
//***********Request for all product category ************************************************************************

//	objhandleRequest.handleCategoryRequest();
	objhandleRequest.handleAllProductForAutoCompleteRequest("shop");
	objhandleRequest.handleAllProductForAutoCompleteRequest("prod");

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
	
	var loginData = $.session.get('loginData');

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

//*******************************************************************************************************************


$('#checkout').click(function(){
	
//	$('#cartmodal').modal('hide');
//	$('#LoginModal').modal('show');
//	getCustOfflineDetails();
});

//*****************************************************AutoComplete**************************************************************	


//var data =  ["Vaseline - Aloe Lotion","Vaseline - Total Moisturizing Lotion","Vaseline - Cocoa Glow Lotion","Vaseline - Total Moisturizing Lotion","Vaseline - Healthy White Triple Lightening Sp...","Emami - Fair & Handsome","Vaseline - Healthy White Lotion","Fair & Lovely - Ayurvedic Cream","Fair & Lovely - Max Fairness For Men","Vicco - Turmeric Skin Cream","Vicco - Narayani Cream","Vlcc - Matte Look Sun Screen Lotion Spf 30","Vlcc - Silver Single Facial Kit","Vlcc - Sweat Free Sun Block Lotion Spf 40","Vaseline - Aloevera Fresh Body Lotion","Vaseline - Healthy White Complete 10","Santoor - Body Lotion Intensive Moisturizer","Biotique - Skincare Oil","Biotique - Clove Anti Blemish Face Pack","Garnier - Wrinkle Lift Cream","Garnier - Fair Miracle Cream","Olay - 3in1 Natural White Fairness Cream","Veet - Natural Normal Skin","Vlcc - Skin White Day Cream Spf 25","Lakme - Radiance Fairness Day Cream","Fair & Lovely - Multi Vitamin Pum Spf 15","Joy - Skin Fruits Active Fruit Moisturizing M...","L'Oreal Paris - Perfect Skin 30+ Day Cream","L'Oreal Paris - Perfect Skin 20+ Day Cream","Neutrogena - Ultra Sheer Body Mist","Olay Regenerist - Wrinkle Revolution Complex","Vlcc - Anti Tan Facial Kit","Vlcc - Papaya Fruit Facial Kit","Garnier - Men Acno Whitening Cream","Nivea - Argan Nourish Body Lotion","Nivea - Cocoa Nourish Body Lotion","Nivea - Q10 Firming Lotion","Lakme - Complexion Care Cream Bronze","Lakme - Youth Infinity Day Creme","Veet - Hair Removal Cream For Dry Skin","Fem - Gold Bleach","Bigen - Speedy Brownish Black","Veet - Hibiscus Sensitive Skin","Veet - Hibiscus Supreme Essence","Vlcc - Instant Glow Facial Kit","Vlcc - Gold Bleach","Vlcc - Shape Up Slimming Oil","Vlcc - Pearl Fairness Facial Kit","Vlcc - Diamond Facial Kit Single","Vlcc - Gold Facial Kit Single","Godrej - Hair Colour Original Black Sachet","Bigen - Natural Hair Color N4 Brown","Vlcc - Daily Protect Lip Balm Strawberry","Vlcc - Pedicure & Manicure Kit","Garnier - Color Natural No 5 Light Brown","L'Oreal Paris - Casting Cream Gloss Black Che...","Garnier Men - Colour Naturals Hair Colour Bur...","Bigen Mens - Beard Colour Brown Black No.10","Revlon - Colorsilk Deep Burgundy 3db","Revlon - Colorsilk Dark Brown 3n","Revlon - Color & Cream Natural Black 1n","Revlon - Color & Cream Darkest Brown 3n","Revlon - Color & Cream Black Brown 2n","Revlon - Top Speed - Natural Black 1","Revlon - Top Speed - Brown Black 2","Bigen Mens - Speedy Natural Black N101","Bigen Easy Natural - Black Hair Color N1","Bigen Easy Natural - Brown Hair Color N3","Bigen - Black Brown N20 Hair Color Powder","Bigen - Oriental Black N10 Hair Color Powder","Nupur - Mehendi","Fem - Oxy Life Bleach","Garnier - Colour Naturals Hair Colour Black N...","Garnier - Colour Naturals Hair Colour Darkest...","Garnier - Colour Naturals Hair Colour Burgund...","Garnier - Colour Naturals Hair Colour Brown N...","Maybelline - Colossal Kajal","L'Oreal Paris - Casting Cream Gloss Ebony Bla...","L'Oreal Paris - Casting Cream Gloss Dark Brow...","Adidas - Team Force Deo","Nycil - Talcum Cool Herbal Powder","Yardley - English Lavender Deo","Yardley - English Rose Deo","Yardley - English Rose Talc","Yardley - Gentleman Deo Spray","Yardley - Gentleman Talc","Yardley - Deo Lace","Wildstone - Forest Spice Deo","Wildstone - Hydra Energy Talc","Wildstone - Ultra Sensual Talcum Powder","Spinz - Exotic Talcum Powder","Yardley - English Lavender Talcum Powder","Yardley - Gold Legend Men Deo","Yardley - Gold Men Deo","Yardley - Gold Elegance Men Deo","Yardley - Gold Talcum Powder","Yardley - Lace Satin Deo","Yardley - Morning Dew Deo","Yardley - Red Rose Talcum Powder","Dermi Cool - Prickly Powder Lavender","He - Recharge Deo","He - Ruler Deo","Provogue - Dark Affairs Deo","Provogue - Power Play Deo","Provogue - Swagger Deo","Provogue - Devour Deo","Provogue - Wild Desire Deo","Yardley - London Mist Doe","He - Confident Deo","Yardley - Women London Mist Deo","He - Extrovert Deo","He - Magician Deo","He - Smart Deo","Engage Man - Intensity Deo","Engage Man - Fuzz Deo","Engage Man - Jump Deo","Engage Man - Frost Deo","Engage Women - O'Whiff Deo","Engage Women - Tempt Deo","Dabur - Gulabari (Rose Water)","Lakme - Strawberry Silk Face Wash","Neutrogena - Deep Clean Facial Cleanser","Himalaya - Fairness Kesar Face Wash","Himalaya - Oil Clear Lemon Face Wash","Himalaya - Purifying Neem Facewash","Clean & Clear - Morning Energy Face Wash - Le...","Lotus Herbals - Berry Scrub Face Wash","Vlcc - Barberry Scrub","Himalaya - Gentle Exfoliating Walnut Scrub","Nivea - All In 1 Face Wash","Olay - Natural White Cleanser","Biotique - Neem Face Wash","Garnier - Pure Active Scrub","Nivea For Men - Oil Control Moisturizer","Biotique - Walnut Purify & Polish Scrub","Vlcc - Anti Tan Single Facial Kit","Biotique - Neem Face Wash","Garnier - Pure Active Scrub","Nivea For Men - Oil Control Moisturizer","Biotique - Walnut Purify & Polish Scrub","Vlcc - Anti Tan Single Facial Kit","Vlcc - Fruit Facial Kit Single","Vlcc - Diamond Polish Face Scrub","Emami - Fair And Handsome Face Wash","Fair & Lovely - Pimple Off Fairness Face Wash","Joy - Pure Neem Face Wash","Joy - Skin Fruits Face Wash Lemon","Joy - Skin Fruits Face Wash Apple","Olay - Total Effect Normal Uv","Pond's - Complete Solution Pimple Clear Face ...","Fair & Lovely - Advance Multi Vitamin Cream","Biotique - Whitening Facewash","Clean & Clear - Pimple Clearing Facewash","Godrej No .1 - Nature White Facewash","L'Oreal Paris - Perfect Skin 20+ Face Wash","L'Oreal Paris - Perfect Skin 30+ Face Wash","Clean & Clear - Moisturer","Dabur - Gulabari Lotion","Parachute - Advanced Hair Oil","Parachute - Coconut Hair Oil","Tresemme - Hair Spa Shampoo","Himalaya - Anti Dandruff Shampoo","Himalaya - Anti Hairfall Shampoo","Himalaya - Protein Shampoo Gentle Daily Care","Tresemme - Climate Protection Conditioner","Tresemme - Climate Protection Shampoo","Tresemme - Hair Fall Defense Shampoo","Tresemme - Smooth & Shiney Shampoo","Tresemme - Hair Fall Control Conditioner","Mediker - Plus Anti Lice Coconut Oil","Colgate Plax - Peppermint Mouthwash","Oral-B - Pro Health Gum Care Medium","Colgate - Active Salt Tooth Paste","Close Up - Fire Freeze Toothpaste","Colgate - 360 Degree Surround Toothbrush","Colgate - Sensitive Toothpaste","Himalaya - Complete Care Tothpaste","Gillette - Gel Sensitive Skin","Gillette - Pressto Razor","Yardley - Gold Original Shaving Cream","Yardley - Gold Elegance After Shave Lotion","MACH3 RAZOR + REGULAR FOAM 196GM + TRAVEL PACK (TRAVEL POUCH) ","Gillette - Venus Gift Pack","Supermax - Swift Rc Razor","7'O Clock - P-Ii Cartridge","Premium - Eau De Cologne Regular","Gillette - Fusion Hydra Gel Sensitive Skin","Gillette - Fusion Power Razor","Gillette - Mach3 Turbo Razor","Kamasutra - Shaving Foam Spark + On Combo","Kamasutra - Shaving Foam Spark + Urge Combo","Supermax - Swift Cartridge","Supermax - Swift Razor","Supermax - Vidyut Blade","Gillette - Series Pure & Sensitive Foam","Gillette - Mach 3 Irritation Defence Foam","Gillette - Mach 3 Irritation Defence Gel","Gillette - Satin Care Shaving Gel","Old Spice - After Shave Automiser Original","Park Avenue - Shave Gel","Nivea For Men - After Shave Balm Fresh Active","Nivea - Mens Grooming Kit","Camay - Soap Natural White","Dettol - Cool Soap","Dettol - Original Soap","Dettol - Skin Care Soap","Fiama Di Wills - Aqua Pulse Shower Gel","Lifebuoy - Care Soap","Lifebuoy - Nature Soap","Lux - Fresh Splash Soap","Lux - Soft Touch Soap","Pears - Germ Shield Soap","Pears - Oil Control Soap","Pears - Pure & Gentle Soap","Lifebuoy - Total 10 Hand Wash","Dettol - Sensitive Handwash","Fiama Di Wills - Exoctic Dream Shower Gel","Fem - Blossom Liquid Hand Wash","Dettol - Skincare Handwash Refill Pouch","Santoor - Soap","Himalaya - Neem & Turmeric Soap","Medimix - Sandal Soap","Godrej No .1 - Sandal & Turmeric Soap","Cinthol - Strong Germ Protection Soap","Santoor - Hand Wash Essential Oil","Tetmosol - Medicated Soap","Moti - Gulabari Soap","Fiama Di Wills - Clear Springs Shower Gel","Liril 2000 - Soap","Vivel - Aloevera Soap","Yardley - English Lavender Soap","Yardley - Sandalwood Soap","Vivel - Mixed Fruit + Cream Soap","Godrej - Fairglow Regular Soap","Godrej No .1 - Saffron & Milk Soap","Camay - Chic Soap","Lifebuoy - Handwash Nature Pump","Fiama Di Wills - La Fantasia Gel Soap","Fiama Di Wills - Reo Splash Gel Bathing Bar S...","Vivel - Green Tea Soap","Chandrika - Soap","Fiama Di Wills - Exotic Dream Soap","Lifebuoy - Care Fresh Soap","Mysore Sandal - Gold Soap","Khadi Herbal - Lemon Soap","Khadi Herbal - Honey & Mix Fruit Soap","Khadi Herbal - Sandal Soap","Khadi Herbal - Neem Tulsi Soap","Pears - Soft & Fresh Soap","Vivel - Mixed Fruit Soap","Soulflower - Heart Bath Set With Lavender","Soulflower - Heart Bath Set With Rose","Soulflower - Heart Bath Set With Jasmine","Dermi Cool - Soap","Dettol - Re-Energize Handwash","Dettol - Cool Handwash","Fiama Di Wills - Patchouli & Macadamia Gel Ba...","Moti - Luxury Bath Sandal Soap","Palmolive - Ayurituel Joyous Shower Gel","Liril 2000 - Tea Tree Oil Soap","Cinthol - Confidence+","Diversey - Soft Care Enhance Handwash","Loading more products..."];

try
{
$("#search").keyup(function(e){

	var label = datalabelShop.autoCompleteLabel;
	
	$("#search").autocomplete({
	source : label,

	select : function(event, ui)
	{
		var text = ui.item.label;
//		alert("Text : " + text);
//		searchProduct();
//		var pageState = $.session.get('pageState');
//		console.log("Autocomplete pageState : "+pageState);
//		if(pageState == "shopProfile")
//		{
//			searchProduct();
//		}
//		else
//		{
			var pageSta = $.session.get('pageState');
	//		alert("pageState : "+pageSta);
			if(pageSta != "indexBody")
			{
				$.session.set('pageState','indexBody');
				$("#loadpage").load("indexBody.jsp");
			}
			
			var count = 0;
			var clear = setInterval(function(){
				count++;
				if(count == 2)
					{
						searchShop();
						clearInterval(clear);
					}
			}, 1000);
//			searchShop();
//		}
		
	}

	});
});



	$("#search").keypress(function(e)
	{
		if(e.which == 13)
		{
//			alert("Text : " + $("#search").val());
//			var pageState = $.session.get('pageState');
//			console.log("Keypress pageState : "+pageState);
//			if(pageState == "shopProfile")
//			{
//				searchProduct();
//			}
//			else
//			{
				var pageSta = $.session.get('pageState');
				//		alert("pageState : "+pageSta);
				if(pageSta != "indexBody")
				{
					$.session.set('pageState','indexBody');
					$("#loadpage").load("indexBody.jsp");
				}
				
				var count = 0;
				var clear = setInterval(function(){
					count++;
					if(count == 2)
						{
							searchShop();
							clearInterval(clear);
						}
				}, 1000);
				
//			}
//			searchShop();
			
		}
	});
	
	
}
catch(e)
{
console.log("Exception in auto complete : "+e);	
}
// ***************************************************AutoComplete****************************************************************



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

//
//$("#emailForgotPwd").keypress(function(e) 
//		{
//	if(e.which == 13) 
//	{
//		forgotPwd();
//	}
//		});


$('#myCarousel').carousel({
	  interval: 3000
	});

	// handles the carousel thumbnails
	$('[id^=carousel-selector-]').hover(function() {
	  var id_selector = $(this).attr("id");
	  //console.log(id_selector);
	  var id = id_selector.substr(id_selector.length - 1);
	  //console.log(id);
	  id = parseInt(id);
	  $('#myCarousel').carousel(id - 1);
	  $('[id^=carousel-selector-]').removeClass('selected');
	  $(this).addClass('selected');
	  //console.log(this);
	});

	// when the carousel slides, auto update
	$('#myCarousel').on('slid.bs.carousel', function(e) {
	  var id = $('.item.active').data('slide-number');
	  id = parseInt(id);
	  $('[id^=carousel-selector-]').removeClass('selected');
	  $('[id=carousel-selector-' + id + ']').addClass('selected');
	});





$('.responsive').slick({
/*prevArrow:'.slider-container .prev',
nextArrow:'.slider-container .next',
*/
	arrows: true,
dots: false,
infinite: false,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1200,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
dots: false
}
},
{
breakpoint: 992,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
dots: false
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 2,
slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll:1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});

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

function loadShopProfilePage(id)
	{
	try
	{
		var shopid = $.session.get("shopid");
		
		var loginData = $.session.get('loginData');
		if(loginData != null && loginData != "" && loginData != undefined)
		{
			var userType = $.session.get('userType');
			$.session.remove('userType');
			$.session.set('userType1', userType);
		}
		
		$.session.set("viewshop","viewshop");
		$.session.set("shopid",id);
		$("#loadpage").load("shopProfile.jsp");
		$.session.remove('pageState');
		$.session.set('pageState', "shopProfile");
		writeLogAjax("supplierKey : " + id,1);
		
		objhandleRequest.handleShopProfileDisplay(id);
		
//		var viewshop = $.session.get("viewshop");
//		if(viewshop == "viewshop")
//			{
//			tr
//			var response1 = $.session.get("loadShopPage");
//			var shopList = response1.product;
////			alert("shopList : "+response1);
////			$("#loadpage").load("shopProfile.jsp");
//			
//			for ( var i in shopList)
//			{
//				
//				var shopid = shopList[i].shopid;
//				if(shopid == id)
//				{
//					var companyname = shopList[i].companyname;
//					var address1 = shopList[i].address1;
//					var address2 = shopList[i].address2;
//					var state = shopList[i].state;
//					var city = shopList[i].city;
//					var street = shopList[i].street;
//					var postalcode = shopList[i].postalcode;
//					var images = shopList[i].images;
//					
//					$("label[for='firstNameDisplay']").html(companyname);
//					$("label[for='stateDisplay']").html(state);
//					$("label[for='addressDisplay']").html(address1);
//					$("label[for='cityDisplay']").html(city);
//					$("label[for='pincodeDisplay']").html(postalcode);
					
					
					
//				}
//			}
//			$.session.set('pageState', vid);
//		
//			}
		
		
	}
	catch(e)
	{
		console.log("ready.js loadShopProfilePage Exception : "+e)
	}
	}


function autocompleteLabel(data, action)
{
	if(action == "shop")
	{
		datalabelShop = data;
		shopAction = action;
	}
	else if(action == "prod")
	{
		datalabelProd = data;
		prodAction  = action;
	}
	
}

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
//				ShopProfileDisplay();
			}
	else if(vid == "checkout")
	{
		var ammount = $("#totalpurchase").text();
		if(ammount == "Total Price : Rs 0.00 " || ammount == "Total Price : Rs 0 " || ammount == "Total Price : NaN" || ammount == "Total Price : " || ammount == "")
			{
//				jAlert('Add product in cart to proceed further', 'Message');
				
				jqueryconform("Message", "Add product in cart to proceed further");
			
				vid = "";
				return false;
			}
		else
			{
				$.session.set('pageState', vid);
				$("#checkoutClose").trigger("click");
			}
			
//			}
//		else
//			{
//				jAlert('Add product in cart to proceed further', 'Message');
//				return false;
//			}
	}
	
	$("#loadpage").load(vid+".jsp");
	
	if(vid == "checkout")
		{
			$.session.set('checkout','checkout');
			
			var loginData = $.session.get('loginData');

			if(loginData != null)
			{
				var sessionData = JSON.parse(loginData);
				var userid = sessionData.key;
				var userType = sessionData.userType;
				$.session.set('checkout','checkout');
				objhandleRequest.handledisplayProductinCart("", "withlogin", userid, userType);
			}
			else
			{
				getProductfromCookie("prod");
			}
			
		}
	
//	var pageState = $.cookie("pageState");
//	alert("pageState : "+pageState);
	
}


function jqueryconform(title, message)
{
	$.alert({
        title: title+' !',
        backgroundDismiss: false,
        content: message,
        confirm: function(){}
    });
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

function saveUserDetails(id)
{
	if(id == "address")
	{
		$("#firstNameSave").val('');
		$("#lastNameSave").val('');
		$("#mobileNoSave").val('');
	}
	else
	{
		$("#address1Save").val('');
		$("#address2Save").val('');
		$("#stateSave").val('');
		$("#streetSave").val('');
		$("#citySave").val('');
		$("#pincodeSave").val('');
	}

	document.getElementById("action").value = "edit";
	var firstName = $("#firstNameSave").val();
	var lastName = $("#lastNameSave").val();
	var mobileNo = $("#mobileNoSave").val();
//	var sessionEmail = $("#emailSave").val();
	var address1 = $("#address1Save").val();
	var address2 = $("#address2Save").val();

	var state = $("#stateSave option:selected").text();
//	alert("state : "+state);
	
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
	writeLogAjax("firstName : " + firstName + "  lastName : " + lastName + "  mobileNo : " + mobileNo +"  email : "+email+"" +
			"  address1 : "+address1+"  address2 : "+address2 +"  state : "+state +"  city : "+city +"  street : "+street +"  pincode : "+pincode+" userType :"+userType 
			+" key "+key,1);

objhandleRequest.handleUserDetailsSave(firstName, lastName, mobileNo, email, address1, address2, state, city, street, pincode, userType, key);

}


function resetPassword()
{
//	var oldPwd = $("#oldPwd").val();
	var password1 = $("#password1").val();
	var password2 = $("#password2").val();
	
	var userType = $.session.get('userType');
	var loginData = $.session.get('loginData');
	var sessionData = JSON.parse(loginData);
	
	var email = sessionData.emailId;
	
	objhandleRequest.handleResetPassword(password1, userType, email);
	
}



/*function checkUsernameAvail()
 {
	alert("checkUsernameAvail");

	var usernameSignUp = $("#usernameSignUp").val();

	console.log("usernameSignUp" + usernameSignUp + "for availability");
	objhandleRequest.handleUsernameAvailCust(usernameSignUp);
}*/

function login()
{
//	alert("Hii");
	var emailLogin = $("#emailLogin").val();
	var passLogin = $("#passLoginTemp").val();
	var otpLogin = $("#otpLogin").val();
	var userType = $("#userType").val();
	$("#loginalerts").empty();
	
	if(emailLogin == "")
	{
		document.getElementById("loginalerts").innerHTML = 'Please enter your login email';
		return false;
	}
	else if(passLogin == "")
	{
		document.getElementById("loginalerts").innerHTML = 'Please enter your login password';
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
	
	console.log("emailLogin : " + emailLogin + "  passLogin : " + passLogin + "  userType : " + userType +"  otpLogin : "+otpLogin );
	writeLogAjax("emailLogin : " + emailLogin + "  passLogin : " + passLogin + "  userType : " + userType +"  otpLogin : "+otpLogin ,1);
	$(".overlay").show();
	objhandleRequest.handleLogin(emailLogin, passLogin, userType, otpLogin);
	
//	if(emailLogin != "" && passLogin != "")
//		{forgetpassalerts
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
	return true;
	}
	
}

function signUp()
{
	var passSignUp = $('#passSignUp').val();
	var repass = $('#repass').val();
//	var firstNameSignUp = $('#firstNameSignUp').val();
	var mobileKey = $('#mobile').val();
	var emailKey = $('#emailSignUp').val();
	var userType = $("#userType").val();
	$("#signupalerts").empty();
	
	if(emailKey == "")
	{
		document.getElementById("signupalerts").innerHTML = 'Please enter your email';
		return false;
	}
	else if(mobileKey == "")
	{
		document.getElementById("signupalerts").innerHTML = 'Please enter your mobile number';
		return false;
	}
	else if(passSignUp == "")
	{
		document.getElementById("signupalerts").innerHTML = 'Please enter your password';
		return false;
	}
	else if(repass == "")
	{
		document.getElementById("signupalerts").innerHTML = 'Please re-enter your password';
		return false;
	}
	else if(passSignUp != repass)
	{
		document.getElementById("signupalerts").innerHTML = 'Conform password should be same as new password';
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
//	console.log("passSignUp" + passSignUp + "firstNameSignUp" +firstNameSignUp+ "mobileKey" + mobileKey	+ "emailKey" + emailKey + "userType" + userType);
	console.log("passSignUp" + passSignUp +"mobileKey" + mobileKey	+ "emailKey" + emailKey + "userType" + userType);
	writeLogAjax("passSignUp" + passSignUp +"mobileKey" + mobileKey	+ "emailKey" + emailKey + "userType" + userType,1);
	
//	return false;
	$("#userType").addClass('blink_me');
	
	$.confirm({
        title: 'Alert Message !',
        backgroundDismiss: false,
        content: "Are you sure you want to register as "+userType,
        confirm: function()
        {
        	$("#userType").removeClass('blink_me');
			$(".overlay").show();
			objhandleRequest.handleRegisteration(passSignUp, mobileKey, emailKey, userType);
			return true;
        },
        cancel: function()
        {
        	$("#userType").removeClass('blink_me');
//			return false;
//        	alert("Cancled");
        }
	});
    
//	var result = jConfirm("Are you sure you want to register as "+userType,"Make My Shopy",function(e)
//	{
//		if(e)
//		{
//			$("#userType").removeClass('blink_me');
//			$(".overlay").show();
//			objhandleRequest.handleRegisteration(passSignUp, mobileKey, emailKey, userType);
//			return true;
//		}
//		else
//		{
//			$("#userType").removeClass('blink_me');
//			return false;
//		}
//	});
	}
}

function forgotPwd()
 {
//	alert("forgot");

//	var usernameForgotPwd = $("#usernameForgotPwd").val();
	var emailForgotPwd = $("#emailForgotPwd").val();
	var userType = $("#userType").val();
	
	$("#forgetpassalerts").empty();
	
	if(emailForgotPwd == "")
	{
		document.getElementById("forgetpassalerts").innerHTML = 'Please enter your email to get your new password';
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

	console.log("emailForgotPwd : "+ emailForgotPwd+"   userType"+ userType);
	writeLogAjax("emailForgotPwd : "+ emailForgotPwd+"   userType"+ userType,1);
	$(".overlay").show();
	objhandleRequest.handleForgotPwd(emailForgotPwd, userType);
	return true;
	}
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
//	$(".col-cat").addClass("hidden-xs");
	$("#mobcat").click();
//	alert("strsubCategoryid : "+strsubCategoryid+" strmainCategoryid : "+strmainCategoryid);
	var loginData = $.session.get('loginData');

	if(loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
	
		objhandleRequest.handledisplaySelectedProduct(strmainCategoryid , strsubCategoryid, userid, userType, "withlogin");
	}
	else
	{
		objhandleRequest.handledisplaySelectedProduct(strmainCategoryid , strsubCategoryid, 0, "", "withoutlogin");	
	}
	
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
	writeLogAjax("JSON.parse(gettingCookieArray) : "+gettingCookieValue,1);
//	alert("Length : "+gettingCookieValue.length);
	for (var i in gettingCookieValue)
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
//		alert("i : "+i+" count : "+count);
		$(".productCountOnCart").empty();
		document.getElementById("productCountOnCart").innerHTML = gettingCookieValue.length;
		document.getElementById("productCountOnCart1").innerHTML = gettingCookieValue.length;
		
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
		writeLogAjax("prodjoin : "+prodjoin,1);
		
		objhandleRequest.handledisplayProductinCart(prodjoin, "withoutlogin", 0, "");
	}
	}
	catch (e)
	{
		console.log("ready.js    getProductfromCookie(condition)    Exception : "+e);
		writeLogAjax("ready.js    getProductfromCookie(condition)    Exception : "+e,0);
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
		writeLogAjax("ready.js  :: getcookies()  :: Exception"+e,0)
	}
}
//************************************************************************************//

//*********************Add product count to cart after click on Add to cart button*********************//

function addproducttoCArt(productid)
{
	try
	{
	count = 0;
	var loginData = $.session.get('loginData');
	if (loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
		
		document.getElementById("ok"+productid).style.display = "block";
		document.getElementById("btn"+productid).disabled = true;
		
		var shopid = $.session.get("shopid");
		objhandleRequest.aadToCartForLoggedUser(userid, userType, productid, "authoriseduser", 1, "add", shopid);
//		$("#rotatespan").addClass("rotatelabel");
		$(".rotatespanclass").addClass("rotatelabel");
		var stop = setInterval(function(){
			count++;
			if(count == 3)
				{
//					$("#rotatespan").removeClass("rotatelabel");
				$(".rotatespanclass").removeClass("rotatelabel");
					clearInterval(stop);
				}
		}, 1000);
	}
	else
    {
		var shopid = $.session.get("shopProfileKey");
		var prodid = productid+"/"+shopid;
		getcookies();
		for(var i in arrayofProduct)
			{
				arrayofProduct[i] == productid;
				
			}
//	    arrayofProduct.push([ productid ]);
	    arrayofProduct.push([ prodid ]);
		
		var len = arrayofProduct.length;
		
		$(".productCountOnCart").empty();
		document.getElementById("productCountOnCart").innerHTML=len;
		document.getElementById("productCountOnCart1").innerHTML=len;
//		************************************************************
//		$("#rotatespan").addClass("rotatelabel");
		$(".rotatespanclass").addClass("rotatelabel");
		var stop = setInterval(function(){
			count++;
			if(count == 3)
				{
//					$("#rotatespan").removeClass("rotatelabel");
				$(".rotatespanclass").removeClass("rotatelabel");
					clearInterval(stop);
				}
		}, 1000);
//		************************************************************
		$.cookie('key',JSON.stringify(arrayofProduct));
		
		document.getElementById("ok"+productid).style.display = "block";
	//	$("#getCartProduct").focus();
		
		var checkAllCookies_AddedorNot = $.cookie("key");
		var checkCookiesArray = JSON.parse(checkAllCookies_AddedorNot);
		console.log("getcookies()   JSON.parse(checkAllCookies_AddedorNot)   : "+checkCookiesArray);
		writeLogAjax("getcookies()   JSON.parse(checkAllCookies_AddedorNot)   : "+checkCookiesArray,1);
		
		document.getElementById("btn"+productid).disabled = true;
		
		
//		objhandleRequest.aadToCartForLoggedUser(0, "", productid, "unauthorised", 1, "add");
		
	}
	}
	catch(e)
	{
		console.log("ready.js  addproducttoCArt  Exception : "+e);
	}
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
try
  {
	$(".overlay").show();
	var loginData = $.session.get('loginData');
	if (loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
		
		objhandleRequest.removeFromCart(userid, userType, id, "authoriseduser");
		
		document.getElementById("ok"+id).style.display = "none";
		document.getElementById("btn"+id).disabled = false;
	}
	else
    {
		var gotCookies = $.cookie("key");
		
		var gotCookiesArray = JSON.parse(gotCookies);
		
		if(gotCookiesArray == "" || gotCookiesArray == null)
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
			$(".overlay").hide();
			
			
   }
		}
	catch (e)
	{
		console.log("ready.js  :: removeproductfromCArt(id)  :: Exception"+e);
		writeLogAjax("ready.js  :: removeproductfromCArt(id)  :: Exception"+e,0);
	}
	
}

function searchProduct()
{
//	alert("txt : ");
	$("#dashboard").show(); // -- show dashboard after search product click.
	$("#loadpagecontent").hide(); // -- show dashboard after search product click.
	
	var txt = $("#searchProductTxtBox").val();
	if(txt != "" || txt != null)
		{
			$("#hideadddiv").hide();
			$("#productList").show();
		}
	else if(txt == "" || txt == null)
		{
			$("#hideadddiv").show();
			$("#productList").hide();
		}
//	alert("txt 1 : "+txt);
	if(txt != "")
	{
		var loginData = $.session.get('loginData');
		var shopid = $.session.get("shopid");
		
//		alert("ShopID : "+shopid);
		
		if(loginData != null)
		{
			var sessionData = JSON.parse(loginData);
			var userid = sessionData.key;
			var userType = sessionData.userType;
			
			if(shopid === undefined)
			{
				shopid = userid;
//				alert("shopid new : "+shopid);
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
	var txt = $("#search").val();
	if(txt != "" || txt != null)
	{
//		alert("txt : "+txt);
		$(".hideslider").hide();
		$("#searchtitle").show();
		$("#shopList").show();
	}
	else if(txt == "" || txt == null)
	{
		$(".hideslider").show();
		$("#shopList").hide();
		$("#searchtitle").hide();
	}
//	alert("txt 1 : "+txt);
	if(txt != "")
		{
			objhandleRequest.searchProduct(txt, "shop", "", "");
		}
	
}

function callAlerts(msg)
{
//	jAlert(msg,"Make My Shopy");
	jqueryconform("Message", msg);
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

//var no = 0;
//function storeoldvalue(txtboxid)
//{
//	no = $(txtboxid).val();
//	console.log("Number : "+no);
//}

function quantity(txtboxid, action, price, productid)
{
	try
	{
//		alert("txtboxid : "+ txtboxid +" action : "+ action +" price : "+ price +" productid : "+ productid);
		var totalcartAmmount = $("#totalcartAmmounthidden").val();
		var val = parseInt($("#"+txtboxid).val());

		console.log("Old : "+txtboxid+" ******************** New : "+txtboxid.split("mo").join("mo1"));
		var newtxtID = txtboxid.split("mo").join("mo1");
		
////	alert("1 : "+val);
//	if(no == "" || no == "0" || no == "NaN")
//		{
////			alert("hii");
//			return false;
//		}
//	if(parseInt(no) < val)
//	{
//		console.log("no less");
////		action = "add"
//		action = "add";
//	}
//	
//	if(parseInt(no) > val)
//	{
//		console.log("no greater");
////		action = "minus"
//		action = "minus";
//	}
	
			var total = 0;
			if(action == "add")
			{
				total = val + 1;
				
				$("#"+txtboxid).val(total);
				
				updateQuantity(productid, total);
			    
				var oldpricePerProduct = price*val;
			    var newpricePerProduct = price*total;
			    var cartAmmount = 0;
			    var NewcartAmmount = 0; 
			    
				cartAmmount = parseInt(totalcartAmmount) - parseInt(oldpricePerProduct);
				NewcartAmmount = parseInt(cartAmmount) + parseInt(newpricePerProduct);

				$("#totalpurchase").empty();
				var ammt = '<span class="tlbprce">Total Price :</span>' + '<span class="totalprize"><strong> Rs ' + NewcartAmmount + '</strong> </span>'
    			$("#totalpurchase").append(ammt);
			    $("#totalcartAmmounthidden").val(NewcartAmmount);
			    
			    try
    		    {
	    		     var pageState = $.session.get('pageState');
					 console.log("checkout.js pageState : "+pageState);
					 if(pageState == "checkout")
					 {
						 $("#"+newtxtID).val(total);
						 $("#totalpurchaseOnCheckout").empty();
						 $("#totalpurchaseOnCheckout").append(ammt);
						 $("#totalpurchaseOnCheckoutHidden").val(NewcartAmmount);
					 }
    		    }
    		    catch(e)
    		    {
    		    	console.log("ready.js quantity (Checking user is on which page..? checkout.jsp or not Exception ADD: "+e);
    		    }
			    
//			    managetotalprice(NewcartAmmount);
			    console.log("old cart ammount : "+totalcartAmmount+" Old quantity : "+val+" New quantity : "+total+" oldpricePerProduct : "+price*val+" newpricePerProduct : "+price*total+" cartAmmount : "+cartAmmount+" NewcartAmmount : "+NewcartAmmount);
			    writeLogAjax("old cart ammount : "+totalcartAmmount+" Old quantity : "+val+" New quantity : "+total+" oldpricePerProduct : "+price*val+" newpricePerProduct : "+price*total+" cartAmmount : "+cartAmmount+" NewcartAmmount : "+NewcartAmmount, 1);
			    
			}
		    else if(action == "minus")
		    {
		    	if(val>1)
					{
		    			total = val - 1;
		    			$("#"+txtboxid).val(total);
		    			
		    			updateQuantity(productid, total);
		    			
		    			var oldpricePerProduct = price*val;
		    		    var newpricePerProduct = price*total;
		    		    var cartAmmount = 0;
		    		    var NewcartAmmount = 0; 
		    		    
		    			cartAmmount = parseInt(totalcartAmmount) - parseInt(oldpricePerProduct);
		    			NewcartAmmount = parseInt(cartAmmount) + parseInt(newpricePerProduct);

		    			$("#totalpurchase").empty();
		    			var ammt = '<span class="tlbprce">Total Price :</span>' + '<span class="totalprize"><strong> Rs ' + NewcartAmmount + '</strong> </span>'
		    			$("#totalpurchase").append(ammt);
		    		    $("#totalcartAmmounthidden").val(NewcartAmmount);
		    		    
		    		    try
		    		    {
			    		     var pageState = $.session.get('pageState');
							 console.log("checkout.js pageState : "+pageState);
							 if(pageState == "checkout")
							 {
								 $("#"+newtxtID).val(total);
								 $("#totalpurchaseOnCheckout").empty();
								 $("#totalpurchaseOnCheckout").append(ammt);
								 $("#totalpurchaseOnCheckoutHidden").val(NewcartAmmount);
							 }
		    		    }
		    		    catch(e)
		    		    {
		    		    	console.log("ready.js quantity (Checking user is on which page..? checkout.jsp or not Exception MINUS: "+e);
		    		    }
		    		    
//		    		    managetotalprice(NewcartAmmount);
		    		    console.log("old cart ammount : "+totalcartAmmount+" Old quantity : "+val+" New quantity : "+total+" oldpricePerProduct : "+price*val+" newpricePerProduct : "+price*total+" cartAmmount : "+cartAmmount+" NewcartAmmount : "+NewcartAmmount);
		    		    writeLogAjax("old cart ammount : "+totalcartAmmount+" Old quantity : "+val+" New quantity : "+total+" oldpricePerProduct : "+price*val+" newpricePerProduct : "+price*total+" cartAmmount : "+cartAmmount+" NewcartAmmount : "+NewcartAmmount, 1);
		    		    
					}
			}
			
			
		    

//		}
//	else if(action == "minus")
//		{
//			var val = parseInt($("#"+txtboxid).val());
//			if(val>1)
//			{
//				var total = val-1;
//				$("#"+txtboxid).val(total);
//				var pricePerProduct = price*total;
//				var oldpricePerProduct = price*val;
//			    var totalPrice = parseInt(totalcartAmmount) - parseInt(oldpricePerProduct);
//			    var totalPurchaseprice = totalPrice+pricePerProduct;
//			    console.log("quantity : "+total+" oldpricePerProduct :"+oldpricePerProduct+" quantity * pricePerProduct : "+pricePerProduct+" totalPrice after - price : "+totalPrice+" totalPurchaseprice : "+totalPurchaseprice);
//			    writeLogAjax("quantity : "+total+" oldpricePerProduct :"+oldpricePerProduct+" quantity * pricePerProduct : "+pricePerProduct+" totalPrice after - price : "+totalPrice+" totalPurchaseprice : "+totalPurchaseprice,1);
//			}
//		}
	}
	catch(e)
	{
		console.log("ready.js quantity Exception : "+e);
	}
}

function managetotalprice(NewcartAmmount)
{
	try
	{
		var checkout = $.session.get('checkout');
		if(checkout !=null && checkout !=="" && checkout == "checkout")
			{
				var loginData = $.session.get('loginData');
				if(loginData != null)
				{
					var sessionData = JSON.parse(loginData);
					var userid = sessionData.key;
					var userType = sessionData.userType;
					$.session.set('checkout','checkout');
					objhandleRequest.handledisplayProductinCart("", "withlogin", userid, userType);
				}
				else
				{
					getProductfromCookie("prod");
				}
	//			
	//		
	//			$("#totalpurchaseOnCheckout").empty();
	//			$("#totalpurchaseOnCheckout").append("Total Price : Rs "+NewcartAmmount);
	//		    $("#totalpurchaseOnCheckoutHidden").val(NewcartAmmount);
	//		
	//		
			}
}
catch(e)
{
	console.log("ready.js managetotalprice Exception : "+e);
}
}

function updateQuantity(productid, quantity)
{
	try
	{
		var loginData = $.session.get('loginData');
		if (loginData != null)
		{
			var sessionData = JSON.parse(loginData);
			var userid = sessionData.key;
			var userType = sessionData.userType;
			
			objhandleRequest.aadToCartForLoggedUser(userid, userType, productid, "authoriseduser", quantity, "update");
		}
		else
	    {
			objhandleRequest.aadToCartForLoggedUser(0, "", productid, "unauthorised", quantity, "update");
		}
	}
	catch(e)
	{
		console.log("ready.js updateQuantity Exception : "+e);
	}
	
}



//objhandleRequest.handleCategoryRequest();
var objhandleRequest=new handleRequest();
