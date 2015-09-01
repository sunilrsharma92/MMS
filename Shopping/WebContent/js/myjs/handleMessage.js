/**
 * 
 */

var objhandleRequest = new handleRequest();
var customerDetails = "";

function handleMainCategoryResponse(response)
{
	try
	{
		// console.log('handleMainCategoryResponse ::::::
		// '+JSON.stringify(response));

		var category = "";
		var subcategory = "";
		var lgi = "list-group-item";
		var dropdownsubmenu = "dropdown-submenu";
		var pullright = "glyphicon glyphicon-chevron-right pull-right";
		var dropdownmenu = "dropdown-menu";
		var a = "";
		var nav = "nav nav-pills nav-stacked";
		category = "<ul class='" + nav + "'>";

		var maincategory = response.category;
		var submaincategory = response.subcategory;

		if(maincategory != "")
		{
			for ( var i in maincategory)
			{
				var categoryId = maincategory[i].categoryid;
				var categoryName = maincategory[i].categoryname;

				category = category + "<li class='" + dropdownsubmenu + "'><a id='" + categoryId + "' class='" + lgi + "'>" + categoryName + "<span class='" + pullright + "'></span></a>";

				var check1 = "<ul class='" + dropdownmenu + "'>";
				if(submaincategory != "")
				{
					subcategory = "<ul class='" + dropdownmenu + "'>";
					for ( var j in submaincategory)
					{
						var categoryId1 = submaincategory[j].categoryid;
						var subcategoryName = submaincategory[j].subcategoryname;
						var subcategoryid = submaincategory[j].subcategoryid;

						if(categoryId1 == categoryId)
						{
							subcategory = subcategory + "<li><a onclick='getSelectedProduct(this," + categoryId + ");' id='" + subcategoryid + "'>" + subcategoryName + "</a></li>";
						}
					}
				}

				if(subcategory.length != check1.length)
				{
					category = category + subcategory + "</ul></li>";
				}
				else
				{
					category = category + "</li>";
				}

				subcategory = null;

			}
		}
		category = category + "</ul>";
		$("#categorybox").empty();
		$("#categorybox").append(category);
	}
	catch (e)
	{
		console.log("handleMainCategoryResponse :::::: Exception" + e);
	}
}

function handleShopProfileDetailResponse(response)
{
	try
	{
		console.log('handleShopProfileDetailResponse :::::: ' + JSON.stringify(response));

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
		console.log("handleShopProfileDetailResponse :::::: Exception" + e);
	}
}

function handleShopProfDispResponse(response)
{
	try
	{
		console.log('handleShopProfDispResponse :::::: ' + JSON.stringify(response));

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

		getCustomerOfflineData(response);

	}
	catch (e)
	{
		console.log("handleShopProfDispResponse :::::: Exception" + e);
	}
}

function handleProductDisplayResponse(response)
{
	try
	{

		// console.log('handleProductDisplayResponse ::::::
		// '+JSON.stringify(response));
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

			productList = productList + '<div class="col-md-2 col-sm-3  col-xs-4 wrap">' + '<div class="portfolio-item">' + '<div class="inner-wrap">' + '<span id="ok' + productid + '" class="pull-right glyphicon glyphicon-ok oktick" style="display:none;"></span>' + '<a href="#">' + '<img id="' + productid + '" class="img-portfolio img-responsive" src="' + images + '">' + '</a>' + '</div>' + '</div>' + '<div class="align-center">' + '<div class="productname ">' + prodName + '</div>' + '<div class="productprice" style="color: ' + stockvalue + '";>Rs.' + price + '</div>'
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
		console.log("handleProductDisplayResponse :::::: Exception" + e);
	}
}

function handleProductDisplayinCartResponse(response)
{
	try
	{
		console.log('handleProductDisplayinCartResponse :::::: ' + JSON.stringify(response));
		var productList = "";
		var totalpurchase = "";
		var total = 0;
		var product = response.product;
		if(product == "")
		{
			$("#appendProducttoCart").empty();
		}
		for ( var i in product)
		{

			var productid = product[i].productid;
			var price = product[i].price;
			var stock = product[i].stock;
			var prodName = product[i].prodName;
			var images = product[i].images;
			var quantityfunctionAdd = "quantity('demo" + productid + "','add');"
			var quantityfunctionMinus = "quantity('demo" + productid + "','minus');"
			total = total + price;

			productList = productList + '<tr>' + '<td class="cimg"><img class="cartimgsize" id="' + productid + '" src="' + images + '"></td>' + '<td class="cname">' + prodName + '</td>' + '<td class="csize">' + stock + ' kg</td>' + '<td class="cqty">'

			+ '<div class="input-group bootstrap-touchspin quantitybtn">' + '<span class="input-group-btn">' + '<button class="btn btn-default bootstrap-touchspin-down" id="minus' + productid + '" onclick="' + quantityfunctionMinus + '" type="button">-</button></span>' + '<input id="demo' + productid + '" type="text" value="1" name="demo1" class="form-control cartquantity">' + '<span class="input-group-btn">' + '<button class="btn btn-default bootstrap-touchspin-up" id="add' + productid + '" onclick="' + quantityfunctionAdd + '" type="button">+</button></span>' + '</div>'

			+ '</td>' + '<td class="cprice">' + price + '</td>' + '<td align="center"><button type="button" onclick="removeproductfromCArt(' + productid + ')" class="btn btn-danger btn-xs cartdelbtn"><span id="cdel" class="glyphicon glyphicon-remove"></span></button></td>' + '</tr>';

		}

		// console.log(total);

		totalpurchase = totalpurchase + '<span class="tlbprce">Total Price :</span>' + '<span class="totalprize"><strong> Rs ' + total + '</strong> </span>';
		// +'<!--<span class="usave">You save :</span> '
		// +'<span class="rups"><strong> Rs 0</strong> </span>-->';

		$("#appendProducttoCart").empty();
		$("#appendProducttoCart").append(productList);

		$("#totalpurchase").empty();
		$("#totalpurchase").append(totalpurchase);

	}
	catch (e)
	{
		console.log("handleProductDisplayinCartResponse :::::: Exception" + e);
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

function handleSignUpCustResponse(response)
{
	// alert("hii");
	$(".overlay").show().delay(100).fadeOut();
	var action = response.status;
	var statusdesc = response.statusdesc;

	if(action == 3)
	{
		var email = response.email;
		jAlert("we have send OTP to " + email + " please provide us during your first login", "Message");
	}
	else
	{
		jAlert(statusdesc, "Alert Message");
	}
	// return false;
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
	}
	else
	{
		var statusdesc = response.statusdesc;
		jAlert(statusdesc, "Alert Message");
	}
	// return false;
}

function handleLoginCustResponse(response)
{
	$(".overlay").show().delay(100).fadeOut();
	var action = response.status;

	var loginSuccess = response.loginSuccess;
//	alert(response.loginSuccess)

	if(loginSuccess != null)
	{
		if(loginSuccess == "customer")
		{
			// response.remove("custPass");
			delete response["custPass"];
		}
		if(loginSuccess == "supplier")
		{
			// response.remove("supplierPass");
			delete response["supplierPass"];
		}

		console.log("response :: " + JSON.stringify(response));

		$.session.remove('loginData');
		$.session.set('loginData', JSON.stringify(response));

		$.session.remove('usertype');
		$.session.set('userType', loginSuccess);

		/*
		 * session = request.getSession(); session.removeAttribute("loginData");
		 * session.setAttribute("loginData", loginData);
		 */

	}

	if(action != 3)
	{
		jAlert("Login Failed, Incorrect username or password.", "Alert Message");
	}
	else
	{
//		jAlert("Login Successfull", "Alert Message");
		var custName = response.custFirstName;
		setLoginDropDown(custName);
	}

}

function setLoginDropDown(custName)
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
}
