var sampleFile = "";
var formdata = "";
$(document).ready(function()
{
	try
	{
		$(".customeroverlay").show();
		var contentState = $.session.get("contentState");
//		alert("contentState : "+contentState);
		if(contentState != null && contentState != "" && contentState != undefined)
		{
			try
			{
				$("#dashboard").hide();
				$("#loadpagecontent").load(contentState + ".jsp");
			}
			catch (e)
			{
				console.log("Customerptofile.js  contentState Excepion : " + e);
			}
		}
		var userType = $.session.get("userType");
//		alert("userType : "+userType);
		if(userType == "customer")
		{
			try
			{
				$(".customeroverlay").show();
				$("#custOrderPanel").show();
				var loginData = $.session.get("loginData");
				var sessionData = JSON.parse(loginData);
				var profileImg = sessionData.profileImg;
				$("#profileImg").attr("src", profileImg);
				console.log("profileImg : ", profileImg);
				$("#Sunilkey").attr("src", sessionData.key);
				console.log("Sunilkey : ", sessionData.key);
				console.log("Sunil : key : ", sessionData.key);
				if(profileImg != null)
				{
					$.session.set("profileImage", profileImg);
				}
			}
			catch (e)
			{
				console.log("Customerptofile.js  userType = customer Excepion : " + e);
			}
		}
		if(userType == "supplier")
		{
			try
			{
				
				$.session.remove("shopProfileKey");
				$("#custOrderPanel").hide();
				var loginData = $.session.get("loginData");
				var sessionData = JSON.parse(loginData);
				var supplierKey = sessionData.key;
				shopProfileDisplay(supplierKey);
			}
			catch (e)
			{
				console.log("Customerptofile.js  userType = supplier Excepion : " + e);
			}
		}
		var shopProfileKey = $.session.get("shopProfileKey");
//		alert("shopProfileKey : "+shopProfileKey);
		if(shopProfileKey != "" && shopProfileKey != null && shopProfileKey != undefined)
		{
			try
			{
				$.session.set("viewshop", "viewshop");
				shopProfileDisplay(shopProfileKey);
			}
			catch (e)
			{
				console.log("Customerptofile.js  shopProfileKey Excepion : " + e);
			}
		}
		$("#searchProductTxtBox").keyup(function(e)
		{
			try
			{
				var prodlabel = "";
				prodlabel = datalabelProd.autoCompleteLabel;
				$("#searchProductTxtBox").autocomplete(
				{
				source : prodlabel,
				select : function(event, ui)
				{
					$(".indexoverlay").show();
					var text = ui.item.label;
					searchProduct();
				}
				});
			}
			catch (e)
			{
				console.log("customerProfile.js searchProduct Exception : " + e);
			}
		});
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
					$(".indexoverlay").show();
					searchProduct();
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
		console.log("Customerptofile.js  document.ready Excepion : " + e);
	}
	var loginData = $.session.get("loginData");
	if(loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
		objhandleRequest.getOrdersHistory(userid, userType, 1014, "");
		return true;
	}
});

function dataGridOrderHistory(response)
{
	try
	{
		$(".customeroverlay").hide();
		var imagerenderer = function(row, datafield, value)
		{
			return '<div style="text-align: center; margin-top: 3px;"><img src="Images/View.gif" style="cursor:pointer; height:20px; width:20px;" onclick="displayOrder(' + row + ')"/></div>';
		};
		try
		{
			var data = response.Order;
			var orderarray = [];
			for ( var i in data)
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
				
				var date1 = datetime.substr(0, 10);
				var date = date1.split("-").reverse().join("/");
				
				var time = datetime.substr(10, 19);
				
				orderarray.push(
				{
				userid : userid,
				orderid : orderid,
				datetime : datetime,
				date : date,
				time : time,
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
		catch (e)
		{
			console.log("Blank Response");
		}
		var source =
		{
		localdata : orderarray,
		datatype : "JSON",
		datafields : [
		{
		name : "datetime",
		type : "string"
		},
		{
		name : "date",
		type : "Date"
		},
		{
		name : "time",
		type : "string"
		},
		{
		name : "orderid",
		type : "string"
		},
		{
		name : "shopname",
		type : "string"
		} ]
		};
		$("#41").jqxGrid(
		{
		width : "95%",
		filterable : true,
		source : source,
		autoheight : true,
		pageable : true,
//		editable : false,
		showfilterrow : true,
		selectionmode : "multiplecellsadvanced",
		columns : [
		{
		text : "Purchase Date",
		datafield : "date",
		filtertype : "range",
		width : "30%",
		cellsalign : "left",
		cellsformat : "d"
		},
		{
		text : "Purchase Time",
		datafield : "time",
		width : "30%",
		cellsalign : "left",
		cellsformat : "d"
		},
		{
		text : "Order ID",
		datafield : "orderid",
		width : "30%"
		},
		{
		text : "View Order",
		menu : false,
		sortable : false,
		filterable : false,
		showfilterrow : false,
		cellsalign : "center",
		width : "10%",
		cellsrenderer : imagerenderer
		} ]
		});
	}
	catch (e)
	{
		console.log("customerProfile.js --> Exception : " + e);
	}
	
}
function displayOrder(row)
{
	editrow = row;
	var dataRecord = $("#41").jqxGrid("getrowdata", editrow);
	var orderid = dataRecord.orderid;
	var datetime = dataRecord.datetime;
	var loginData = $.session.get("loginData");
	if(loginData != null)
	{
		var sessionData = JSON.parse(loginData);
		var userid = sessionData.key;
		var userType = sessionData.userType;
		objhandleRequest.getOrdersHistory(userid, userType, 1015, orderid);
	}
}
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
					console.log(address1.length + " " + address2.length);
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
					if(type == "supplier")
					{
						shopname = "";
						shopname = name;
						add = add + ". Contact Number : " + phone;
					}
					productList = productList + "<tr>" + '<td class="cimg"><img class="cartimgsize" id="" src="' + productimg + '"></td>' + '<td class="cname">' + productname + "</td>" + '<td class="cqty">' + quantity + "</td>" + '<td class="cprice">' + productprice + "</td>" + '<td class="cprice">' + total + "</td>" + "</tr>";
				}
			}
			$("#4111").show();
			$("#appendOrder").append('<tr style="background-color: #E9E9E9;"><td colspan = "5">' + '<table style="width: 100%">' + '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 19px;">' + shopname + "</td></tr>" + '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 14px;">' + add + "</td></tr>" + "</table>" + "</td></tr>" + productList + '<tr><td colspan = "5" style="background-color: #2D97D9;"></td></tr>');
			purchasearray = [];
			productList = "";
		}
		$("#grandtotal").empty();
		$("#grandtotal").append("Total Ammount :  Rs." + GrandTotal);
	}
	catch (e)
	{
		console.log("customerProfile.js --> displayProductPurchased --> Exception --> " + e);
	}
}
function loadProfileMenu(id)
{
	try
	{
		var idofpage = $(id).attr("id");
		writeLogAjax("idofpage : " + idofpage, 1);
		for (var i = 0; i <= 4; i++)
		{
			$("#" + i + "1").hide();
		}
		$("#" + idofpage + "1").show();
		if(idofpage + "1" == "41")
		{
			$("#4111").show();
		}
		else
		{
			$("#4111").hide();
		}
		$("#dashboard").hide();
		$("#loadpagecontent").show();
		if(idofpage == "0" || idofpage == "1")
		{
			var loginData = $.session.get("loginData");
			var userType = $.session.get("userType");
			if(loginData != null)
			{
				var sessionData = JSON.parse(loginData);
				if(idofpage == "0")
				{
					var firstName = sessionData.firstName;
					var lastName = sessionData.lastName;
					var phone = sessionData.phone;
					var emailId = sessionData.emailId;
					$("#firstNameSave").val(firstName);
					$("#lastNameSave").val(lastName);
					$("#mobileNoSave").val(phone);
					$("#emailSave").val(emailId);
				}
				else
				{
					if(idofpage == "1")
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
						$("#citySave").val(city);
						$("#pincodeSave").val(pincode);
					}
				}
			}
		}
	}
	catch (e)
	{
		console.log("Customerptofile.js  loadProfileMenu Excepion : " + e);
	}
}
function shopProfileDisplay(supplierKey)
{
	try
	{
		writeLogAjax("supplierKey : " + supplierKey, 1);
		objhandleRequest.handleShopProfileDisplay(supplierKey);
	}
	catch (e)
	{
		console.log("Customerptofile.js  shopProfileDisplay Excepion : " + e);
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
		console.log("Customerptofile.js  uploadProfilePic Excepion : " + e);
	}
}