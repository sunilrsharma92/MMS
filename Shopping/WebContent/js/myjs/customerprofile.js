/**
 * 
 */

var sampleFile = "";
var formdata = "";
//var GlobalResponse = "";
//******************************************************************************************************
$(document).ready(function()
{
	try
	{
		var contentState = $.session.get('contentState');
		if(contentState != null && contentState != "")
		{
			try
			{
				$("#dashboard").hide();
				$("#loadpagecontent").load(contentState + ".jsp");
			}
			catch (e)
			{
				console.log("Customerptofile.js  contentState Excepion : " + e)
			}
		}

		var userType = $.session.get('userType');
//		alert("userType : "+userType);
		if(userType == "customer")
		{
			try
			{
				$("#custOrderPanel").show(); // -- not needed for shopkeeper
	
				// console.log("SunkjkjaJ : ", JSON.parse(loginData));
	
				var loginData = $.session.get('loginData');
				var sessionData = JSON.parse(loginData);
				// console.log(" loginData.key : ", loginData.key);
				var profileImg = sessionData.profileImg;
				$("#profileImg").attr("src", profileImg);
				console.log("profileImg : ", profileImg);
				$("#Sunilkey").attr("src", sessionData.key);
				console.log("Sunilkey : ", sessionData.key);
	
				console.log("Sunil : key : ", sessionData.key);
	
				if(profileImg != null)
				{
					$.session.set('profileImage', profileImg);
				}
			}
			catch (e)
			{
				console.log("Customerptofile.js  userType = customer Excepion : " + e)
			}
		}

		if(userType == "supplier")
		{
			try
			{
				// alert("PPP userType : "+userType);
				$("#custOrderPanel").hide(); // -- not needed for shopkeeper
	
				var loginData = $.session.get('loginData');
				var sessionData = JSON.parse(loginData);
				var supplierKey = sessionData.key;
	
				shopProfileDisplay(supplierKey);
			}
			catch (e)
			{
				console.log("Customerptofile.js  userType = supplier Excepion : " + e)
			}
		}

		var shopProfileKey = $.session.get("shopProfileKey");
		if(shopProfileKey != "" || shopProfileKey != null)
		{
			try
			{
				$.session.set("viewshop", "viewshop");
				shopProfileDisplay(shopProfileKey);
				// $(".hidemenu").hide();
			}
			catch (e)
			{
				console.log("Customerptofile.js  shopProfileKey Excepion : " + e)
			}
		}
	
//******************************************************************************************************
	$(".icon_click").click(function(){
		$("#fileName").trigger("click");

	});
//******************************************************************************************************
	$("#fileName").change(function()
	{
		try
		{
		// var img = deva
		$("#upldBtn").trigger("click");
		
			$('#uploadFile').ajaxForm(
			{
				success : function(msg)
				{
					$(".overlay").show();
					var count = 0;

					var clear = setInterval(function()
					{
						count++;
						console.log("count : " + count + "msg : " + msg);

						if(count == 10)
						{
							$("#profileImg").attr("src", msg);
							$(".overlay").show().delay(100).fadeOut();
							clearInterval(clear);
						}
					}, 500);
					
					var loginData = $.session.get('loginData');
					var sessionData = JSON.parse(loginData);
					sessionData.profileImg = msg;
					$.session.remove("loginData");
					$.session.set("loginData", JSON.stringify(sessionData));
//					alert("JSON.stringify(sessionData) : "+JSON.stringify(sessionData));
				}
			});
		}
		catch (e)
		{
			console.log("Exception in uploading file on jsp : " + e);
		}

		var profileImg = $.session.get("profileimg");
		if(profileImg != "" || profileImg != null)
		{
			$("#profileImg").attr("src", profileImg);
		}

	});
//******************************************************************************************************
	/*
	 * $('#upldBtn').click(function() { alert("Sunil");
	 * 
	 * formdata = new FormData(); var sampleText =
	 * document.getElementById("sampleText").value;
	 * 
	 * var userType = $.session.get('userType'); var loginData =
	 * $.session.get('loginData'); var sessionData = JSON.parse(loginData); //
	 * sampleText = sampleText + userType + key + email; //
	 * console.log("sampleText : "+sampleText);
	 * 
	 * var other_data = $('form').serialize();
	 * console.log("other_data"+other_data); if(loginData != null) { var email =
	 * sessionData.emailId; var key = sessionData.key;
	 * 
	 * formdata.append("sampleFile", sampleFile); formdata.append("userType",
	 * userType); // formdata.append("email", email); // formdata.append("key",
	 * key); // formdata.append("ha", "haha"); // formdata.append("sampleText",
	 * sampleText);
	 * 
	 * console.log("SSemail : "+email+" SSkey : "+key);
	 *  // var xhr = new XMLHttpRequest(); // //
	 * xhr.open("POST","/UploadServlet", true); // // xhr.send(formdata);
	 * alert("ssss"); $.ajax({ url: '/UploadServlet'+ other_data, datatype :
	 * 'script', cache: false, contentType: false, processData: false, type:
	 * 'POST', data: formdata, async: false, success: function (data) {
	 * alert(data) }, }); }
	 * 
	 * xhr.onload = function(e) {
	 * 
	 * if (this.status == 200) {
	 * 
	 * alert(this.responseText);
	 *  }
	 *  };
	 * 
	 * $("form#yourform").attr('action', contextPath+servletName);
	 * $("form#yourform").attr('enctype', "multipart/form-data");
	 * $("form#yourform").attr("target", "postiframe");
	 * $("form#yourform").attr("file", $('#file').val());
	 * 
	 * $('yourform').submit(); //upload button $("#postiframe").load(function () {
	 * iframeContents =
	 * $("#postiframe")[0].contentWindow.document.body.innerHTML;
	 * $("#textarea").html(iframeContents); $.ajax({ type: "POST", url:
	 * contextPath+servletName, data: "action=download", async: false, dataType:
	 * "text", success: function(result) { //do something } }); }); }); });
	 */
//******************************************************************************************************
	
		$("#searchProductTxtBox").keyup(function(e)
		{
			try
			{
			// alert("Data Label : "+JSON.stringify(datalabelProd));
			var prodlabel = "";
			//	
			// if(shopAction == "shop")
			// {
			// label = datalabelShop.autoCompleteLabel;
			// }
			// else if(prodAction == "prod")
			// {
			prodlabel = datalabelProd.autoCompleteLabel;
			// }

			// alert("Label : "+JSON.stringify(label));
			$("#searchProductTxtBox").autocomplete(
			{
			source : prodlabel,

			select : function(event, ui)
			{
				var text = ui.item.label;
				// alert("Text : " + text);
				// searchProduct();
				// var pageState = $.session.get('pageState');
				// console.log("Autocomplete pageState : "+pageState);
				// if(pageState == "shopProfile")
				// {
				searchProduct();
				// }
				// else
				// {
				// searchShop();
				// }

			}

			});
			}
			catch (e)
			{
				console.log("customerProfile.js searchProduct Exception : " + e);
			}
		});

//******************************************************************************************************
		
		$("#productSearch").click(function()
		{
			searchProduct();
		});
		
		$("#searchProductTxtBox").keypress(function(e)
		{
			try
			{
			if(e.which == 13)
			{
				// alert("Text : " + $("#search").val());
				// var pageState = $.session.get('pageState');
				// console.log("Keypress pageState : "+pageState);
				// if(pageState == "shopProfile")
				// {
				searchProduct();
				// }
				// else
				// {
				// searchShop();
				// }
				// searchShop();

			}
			}
			catch (e)
			{
				console.log("customerProfile.js searchProduct Exception : " + e);
			}
		});
	}
	catch (e)
	{
		console.log("Customerptofile.js  document.ready Excepion : " + e)
	}
	

//******************************************************************************************************
	
	var loginData = $.session.get('loginData');
	
	if(loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
		objhandleRequest.getOrdersHistory(userid, userType, 1014, "");
		return true;
	}
	
//******************************************************************************************************
	
});

//******************************************************************************************************
function dataGridOrderHistory(response)
{
try
{
//	var data = generatedata(20);
	var imagerenderer = function (row, datafield, value)
	{
		return '<div style="text-align: center; margin-top: 3px;"><img src="Images/View.gif" style="cursor:pointer; height:20px; width:20px;" onclick="displayOrder(' + row + ')"/></div>';
	}
	try
	{
	    var data = response.Order;
	//    GlobalResponse = data;
	    var orderarray = [];
	    for(var i in data)
	    {
	    	var userid = data[i].userid;
			var orderid = data[i].orderid;
			var datetime = data[i].datetime;
			var shopid = data[i].shopid;
			var shopname = data[i].companyname;
			
			var name = data[i].name;
			var phone = data[i].phone;
			var address1 = data[i].address1;
			var address2 = data[i].address2;
			var city = data[i].city;
			var state = data[i].state;
			var street = data[i].street;
			var pincode = data[i].pincode;
			var country = data[i].country;
			var img = data[i].img;
			
			orderarray.push({
				userid : userid,
				orderid : orderid,
				datetime : datetime,
				shopid : shopid,
				shopname : shopname,
				name : name,
				phone : phone,
				address1 : address1,
				address2 : address2,
				city : city,
				state : state,
				street : street,
				pincode : pincode,
				country : country,
				img : img
			});
	    }
	}
	catch(e)
	{
		console.log("Blank Response");
	}
	
	var source =
    {
        localdata: orderarray,
        datatype: "JSON",
        datafields:
        [
            { name: 'datetime', type: 'string' },
            { name: 'orderid', type: 'string' },
            { name: 'shopname', type: 'string' }
//            { name: 'date', type: 'date'},
//            { name: 'quantity', type: 'number' }
        ]
        
    };

//    var dataAdapter = new $.jqx.dataAdapter(source);

    $("#41").jqxGrid(
    {
        width: '95%',
        filterable: true,
        source: source,
        autoheight: true,
        pageable: true,
        editable:false,
//         showeverpresentrow: true,
//         everpresentrowposition: "top",
        showfilterrow: true,
        selectionmode: 'multiplecellsadvanced',
        columns: [
		  {text: 'Purchase Date', datafield: 'datetime', filtertype: 'range', width: '45%', cellsalign: 'left', cellsformat: 'd' },
          {text: 'Order ID', datafield: 'orderid', width: '45%'},
//          {text: 'Shop Name', filtertype: 'checkedlist', datafield: 'shopname', width: '30%'},
//          {text: 'Qty.', datafield: 'quantity', filtertype: 'number',  cellsalign: 'right', width: '10%' },
          {text: 'View Order', menu: false, sortable: false, filterable: false, showfilterrow: false,  cellsalign: 'center', width: '10%', cellsrenderer: imagerenderer}
        ]
    });
}
catch(e)
{
	console.log("customerProfile.js --> Exception : "+e);
}
}
//******************************************************************************************************

function displayOrder(row)
{
	editrow = row;
	var dataRecord = $("#41").jqxGrid("getrowdata",editrow);
//	console.log("Order Id : "+dataRecord.orderid+" Purchase Date : "+dataRecord.datetime);
	
	var orderid = dataRecord.orderid;
	var datetime = dataRecord.datetime;
	
	var loginData = $.session.get('loginData');
	if(loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
		objhandleRequest.getOrdersHistory(userid, userType, 1015, orderid);
	}
//	alert("GlobalResponse : "+JSON.stringify(GlobalResponse));
	
	
}

//******************************************************************************************************

function displayProductPurchased(response)
{
try
{
	var shopidArray = [];
	var purchasearray = [];
	var action = "";
	var productList = "";
	var GrandTotal = 0;
	$("#appendOrder").empty();
	var GlobalResponse = response.Order;
//	alert("GlobalResponse : "+JSON.stringify(GlobalResponse));
	for(var i in GlobalResponse)
	{
		var GlobalShopid = GlobalResponse[i].shopid;
		var  GlobalOrderid = GlobalResponse[i].orderid;
		
//		alert("GlobalShopid : "+GlobalShopid+" GlobalOrderid : "+GlobalOrderid+" orderid : "+orderid);
		
//		if(GlobalOrderid == orderid)
//		{
			if(i == 0)
			{
				shopidArray.push([GlobalShopid]);
			}
			else
			{
				for(var j in shopidArray)
				{
//					alert("shopidArray[j] : "+shopidArray[j]+" GlobalShopid : "+GlobalShopid);
					if(shopidArray[j] == GlobalShopid)
					{
						action = "false";
					}
					else if(shopidArray[j] != GlobalShopid)
					{
						action = "true";
					}
				}
				if(action == "true")
				{
					shopidArray.push([GlobalShopid]);
				}
			}
//		}
	}
	
//	alert("Shop ID's : "+shopidArray);
	for(var k in shopidArray)
	{
		var shopkeeperid = shopidArray[k];
//		alert("shopkeeperid : "+shopkeeperid);
		for(var l in GlobalResponse)
	    {
			var shopkeeperidresponse = GlobalResponse[l].shopid;
//			alert("shopkeeperid : "+shopkeeperid+" shopkeeperidresponse : "+shopkeeperidresponse);
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
				GrandTotal = GrandTotal+total;
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
				console.log(address1.length+ " " +address2.length);
				if(address1 != "" && address1 != null && address1.length > 6)
				{
					add = address1;
				}
				else if(address2 != "" && address2 != null && address2.length > 6)
				{
					add = address2;
				}
				else
				{
					add = "(No address to display)";
				}
				
				if(type == "supplier")
				{
					shopname = "";
					shopname = name;
					add = add+". Contact Number : "+phone;
				}
				
//				purchasearray.push({
//					userid : userid,
//					orderid : orderid,
//					datetime : datetime,
//					shopid : shopid,
//					
//					productid : productid,
//					productname : productname,
//					productimg : productimg,
//					productprice : productprice,
//					total : total,
//					quantity : quantity,
//					
//					shopname : shopname,
//					name : name,
//					phone : phone,
//					address1 : address1,
//					address2 : address2,
//					city : city,
//					state : state,
//					street : street,
//					pincode : pincode,
//					country : country,
//					img : img
//				});
				
				productList = productList + '<tr>' 
				+ '<td class="cimg"><img class="cartimgsize" id="" src="' + productimg + '"></td>' 
				+ '<td class="cname">' + productname + '</td>' 
				+ '<td class="cqty">'+ quantity + '</td>' 
				+ '<td class="cprice">' + productprice + '</td>'
				+ '<td class="cprice">' + total + '</td>'
				+ '</tr>';
			}
			
			
	    }
		
//		productList = productList + '<tr>' + '<td class="cimg"><img class="cartimgsize" id="" src="' + img + '"></td>' + '<td class="cname">' + productname + '</td>' + '<td class="cqty">'
//
//		+ '<div class="input-group bootstrap-touchspin quantitybtn">' 
//		+ '<span class="input-group-btn">' 
////		+ '<button class="btn btn-default bootstrap-touchspin-down" id="minus' + productid + '" onclick="' + quantityfunctionMinus + '" type="button">-</button></span>' + '<input id="demo' + productid + '" onkeyup="' + quantityfunctionMinus + '" onfocus="storeoldvalue(this);" type="text" value="'+quantity+'" name="demo1" class="form-control cartquantity">' + '<span class="input-group-btn">' 
//		+ '<input id="" type="text" disabled="disabled" value="'+quantity+'" name="demo1" class="form-control cartquantity">' + '<span class="input-group-btn">' 
//		+'</span>' 
//		+ '</div>'
//
//		+ '</td>' 
//		+ '<td class="cprice">' + productprice + '</td>' + '<td align="center"></td>'
//		+ '<td class="cprice">' + total + '</td>' + '<td align="center"></td>' + '</tr>';

//		$("#appendOrder").append('<label style="color: black;">'+shopname+'</label>');
//		$("#appendOrder").append('<tr><td collspan = "5">'+shopname+'</td></tr>');
		
		$("#4111").show();
		
		$("#appendOrder").append('<tr><td colspan = "5">'
				+ '<table style="width: 100%">'
				+ '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 19px;">'+shopname+'</td></tr>'
				+ '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 14px;">'+add+'</td></tr>'
				+ '</table>'
				+ '</td></tr>'
				+ productList
				+ '<tr><td colspan = "5" style="background-color: #2D97D9;"></td></tr>');
//		$("#appendOrder").append(JSON.stringify(purchasearray));
		purchasearray = [];
		productList = "";
		
	}
	
//	productList = productList + '<tr><td colspan = "5" style = "color: red;">' + GrandTotal + '</td></tr>';
//	alert(GrandTotal);
//	$("#appendOrder").append('<label style="color: #3099DB">Grand Total</label>');
//	$("#appendOrder").append(productList);
	$("#grandtotal").empty();
	$("#grandtotal").append("Total Ammount : "+GrandTotal);
	
//	purchasearray = [];
//	productList = "";
}
catch(e)
{
	console.log("customerProfile.js --> displayProductPurchased --> Exception --> "+e);
}
}

//******************************************************************************************************

function loadProfileMenu(id)
{
	try
	{
		var idofpage = $(id).attr("id");
		writeLogAjax("idofpage : " + idofpage, 1);
		// -- id
		for (var i = 0; i <= 4; i++)
		{
			$("#" + i + "1").hide();
		}

		$("#" + idofpage + "1").show();
		
		if(idofpage+"1" == "41")
		{
			$("#4111").show();
		}
		else
		{
			$("#4111").hide();
		}
		
		// $.session.set('contentState', idofpage);

		$("#dashboard").hide(); // -- hide dashboard after profile click,to
		$("#loadpagecontent").show(); // -- hide dashboard after profile click,to
								// avoid mixture of profile and dashboard

		if(idofpage == "0" || idofpage == "1")
		{
			var loginData = $.session.get('loginData');
			// alert("loginData "+JSON.stringify(loginData));
			var userType = $.session.get('userType');

			if(loginData != null)
			{
				var sessionData = JSON.parse(loginData);

				// if (userType == "customer")
				// {
				if(idofpage == "0")
				{
					var firstName = sessionData.firstName;
					var lastName = sessionData.lastName;
					var phone = sessionData.phone;
					var emailId = sessionData.emailId;

					// alert(firstName+" "+lastName+" "+phone+" "+emailId);

					$("#firstNameSave").val(firstName);
					$("#lastNameSave").val(lastName);
					$("#mobileNoSave").val(phone);
					$("#emailSave").val(emailId);
				}
				else if(idofpage == "1")
				{
					var address = sessionData.address1;
					var address2 = sessionData.address2;
					var street = sessionData.street;
					var state = sessionData.state;
					var city = sessionData.city;
					var pincode = sessionData.pinCode;

					$("#address1Save").val(address);
					$("#address2Save").val(address2);
					$("#streetSave").val(street);
					// document.getElementById("custState").innerHTML = '<option
					// selected>'+state+'</option>';
					$("#citySave").val(city);
					$("#pincodeSave").val(pincode);
				}

				// }

			}

		}

	}
	catch (e)
	{
		console.log("Customerptofile.js  loadProfileMenu Excepion : " + e)
	}
}

// *************************************************************************************

// *************************************************************************************

function shopProfileDisplay(supplierKey)
{
	try
	{
		writeLogAjax("supplierKey : " + supplierKey, 1);

		objhandleRequest.handleShopProfileDisplay(supplierKey);
	}
	catch (e)
	{
		console.log("Customerptofile.js  shopProfileDisplay Excepion : " + e)
	}
}

function uploadProfilePic()
{
	try
	{
		var profileImg = "";
		var email = "";
		var key = 1;

		console.log("profileImg : " + profileImg + " key : " + key + " userType :" + userType + " email : " + email);
		objhandleRequest.handleUpdateProfilePic(profileImg, key, userType, email);
	}
	catch (e)
	{
		console.log("Customerptofile.js  uploadProfilePic Excepion : " + e)
	}
}

// *************************************************************************************
