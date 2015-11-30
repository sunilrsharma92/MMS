
var shopcount = 0;
var objhandleRequest = new handleRequest();
//var orderReponse = "";
$(document).ready(function(){
	$(".adminoverlay").show();
	objhandleRequest.getAllOrders();
	
});


function getOrders(response)
{
try
{
//	orderReponse = response;
//	console.log("admin.js  getOrders(response)  : "+JSON.stringify(response));
	
	var viewOrder = function(row, datafield, value)
	{
		var displayorder = "displayOrder(" + row + ", 'view');";
		return '<div style="text-align: center; margin-top: 3px;" onclick="'+displayorder+'"><img src="Images/View.gif" style="cursor:pointer; height:20px; width:20px;"/></div>';
	};
	var acceptOrder = function(row, datafield, value)
	{
//		 editrow = row;
		 var displaynoneVal = "block";
	     var dataRecord = $("#admingrid").jqxGrid('getrowdata', row);
	     var status = dataRecord.status;
	     
	     if(status == "Pending")//Pending
	     {
	    	 displaynoneVal = "block";
	     }
	     else if(status == "WIP")//Accepted
	     {
	    	 displaynoneVal = "none";
	     }
	     else if(status == "Cancled")// Cancle order
	     {
	    	 displaynoneVal = "none";
	     }
	     else if(status == "Completed")// Order Completed
	     {
	    	 displaynoneVal = "none";
	     }
	     /*else if(status == "Rejected")// Order Rejected
	     {
	    	 displaynoneVal = "none";
	     }*/

	     
		return '<div style="text-align: center; margin-top: 3px;margin-left: 40%;" onclick="acceptOrder(' + row + ')"><img src="Images/tick.png" style="cursor:pointer; height:20px; width:20px;display:'+displaynoneVal+';"/></div>';
	};
	var cancelOrder = function(row, datafield, value)
	{
//		 editrow = row;
		 var displaynoneVal = "block";
	     var dataRecord = $("#admingrid").jqxGrid('getrowdata', row);
	     var status = dataRecord.status;
	     
	     if(status == "Pending")//Pending
	     {
	    	 displaynoneVal = "block";
	     }
	     else if(status == "WIP")//Accepted
	     {
	    	 displaynoneVal = "block";
	     }
	     else if(status == "Cancled")// Cancle order
	     {
	    	 displaynoneVal = "none";
	     }
	     else if(status == "Completed")// Order Completed
	     {
	    	 displaynoneVal = "none";
	     }
	     /*else if(status == "Rejected")// Order Rejected
	     {
	    	 displaynoneVal = "none";
	     }*/
	     
		return '<div style="text-align: center; margin-top: 3px; margin-left: 40%;" onclick="cancelOrder(' + row + ')"><img src="Images/cross.png" style="cursor:pointer; height:20px; width:20px;display:'+displaynoneVal+';"/></div>';
	};
	var deleteOrder = function(row, datafield, value)
	{
		return '<div style="text-align: center; margin-top: 3px;" onclick="deleteOrder(' + row + ')"><img src="Images/delete.png" style="cursor:pointer; height:20px; width:20px;"/></div>';
	};

	
	var data = "";
	var orderarray = [];
	var source = "";
	data = response.Order;
	if(data != "" && data != null && data != undefined)
	{
		for ( var i in data)
		{
			var userid = data[i].userid;
			var orderid = data[i].orderid;
			var datetime = data[i].datetime;
			var shopList = JSON.stringify(data[i].shopListByOrderId);
//			var shopname = data[i].companyname;
			var name = data[i].name;
			var phone = data[i].phone;
			var address1 = data[i].address1;
			var city = data[i].city;
			var state = data[i].state;
			var street = data[i].street;
			var pincode = data[i].pincode;
			var country = data[i].country;
			var img = data[i].img;
			var status = data[i].status;
			var grandTotal = data[i].grandTotal;
			
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
				shopList : shopList,
//				shopname : shopname,
				name : name,
				phone : phone,
				address1 : address1,
				city : city,
				state : state,
				street : street,
				pincode : pincode,
				country : country,
				img : img,
				status : status,
				grandTotal : grandTotal
			});
			
		}
	}
	
		source =
		{
		localdata : orderarray,
		datatype : "JSON",
		datafields : [
		{name : "datetime", type : "string"},
		{name : "date", type : "string"},
		{name : "time", type : "string"},
		{name : "orderid", type : "string"},
		{name : "userid", type : "string"},
		{name : "shopList"},
	//	{name : "shopname", type : "string"},
		{name : "name", type : "string"},
		{name : "phone", type : "string"},
		{name : "address1", type : "string"},
		{name : "city", type : "string"},
		{name : "state", type : "string"},
		{name : "street", type : "string"},
		{name : "pincode", type : "string"},
		{name : "status", type : "string"},
		{name : "grandTotal", type : "string"}]
		
		};
		
		var adapter = new $.jqx.dataAdapter(source);
		$("#admingrid").jqxGrid(
		{
		width : "95%",
		filterable : true,
		source : adapter,
		autoheight : true,
		pageable : true,
	//	editable : false,
		showfilterrow : true,
		selectionmode : "multiplecellsadvanced",
		columns : [
		{
				text : "Purchase Date",
				datafield : "date",
				filtertype : "range",
				width : "10%",
				cellsalign : "left",
				cellsformat : "d"
		},
		{
				text : "Purchase Time",
				datafield : "time",
				width : "10%",
				cellsalign : "left",
				cellsformat : "d"
		},
		{
				text : "Customer Name",
				datafield : "name",
				width : "16%",
				cellsalign : "left",
				cellsformat : "d"
		},
		{
				text : "Mobile",
				datafield : "phone",
				width : "10%",
				cellsalign : "left",
				cellsformat : "d"
		},
		{
				text : "Order ID",
				datafield : "orderid",
				width : "10%"
		},
		{
				text : "Ammount",
				datafield : "grandTotal",
				width : "6%"
		},
		{
				text : "Status",
				datafield : "status",
				width : "10%"
		},
		{
				text : "View Order",
				menu : false,
				sortable : false,
				filterable : false,
				showfilterrow : false,
				cellsalign : "center",
				width : "7%",
				cellsrenderer : viewOrder
		}, 
		{
				text : "Accept Order",
				menu : false,
				sortable : false,
				filterable : false,
				showfilterrow : false,
				cellsalign : "center",
				width : "7%",
				cellsrenderer : acceptOrder
		} ,
		{
				text : "Cancel Order",
				menu : false,
				sortable : false,
				filterable : false,
				showfilterrow : false,
				cellsalign : "center",
				width : "7%",
				cellsrenderer : cancelOrder
		},
		{
				text : "Delete Order",
				menu : false,
				sortable : false,
				filterable : false,
				showfilterrow : false,
				cellsalign : "center",
				width : "7%",
				cellsrenderer : deleteOrder
		}]
		});

}
catch (e)
{
	console.log("admin.js --> Exception : " + e);
}
$(".adminoverlay").hide();
}

function callPage(page)
{
	$(".adminoverlay").show();
	$("#loadpage").load("adminControl.jsp");
}

function displayOrder(row, action)
{
	$(".adminoverlay").show();
	try
	{
		var template = "";
		var viewTemplate = "";
		var productList = "";
		var productList1 = "";
		var companyName = "";
		var shopPhone = "";
		var email = "";
		var shopkeeperName = "";
		var perShopAmmount = 0;
		
		editrow = row;
	    var dataRecord = $("#admingrid").jqxGrid('getrowdata', editrow);
	    var orderid = dataRecord.orderid;
	    var userid = dataRecord.userid;
	    var grandTotal = dataRecord.grandTotal;
	    var address = "";
	    var shopAddress = "";
	    if(dataRecord.address1 != "")
		{
			address = dataRecord.address1;
		}
		else
		{
			address = dataRecord.address2;
		}
	    
	    var name = dataRecord.name;
	    var phone = dataRecord.phone;
	    
	    var shopList = JSON.parse(dataRecord.shopList);
	    
//	    console.log("shopList : "+JSON.stringify(shopList));
	    shopcount = shopList.length;
	    console.log("shopcount : "+shopcount);
	    localStorage.setItem("shopcount", shopcount);
	    localStorage.setItem("acceptcheck", "0");
	    
		    	for(var i in shopList)
		    	{
		    		var shop = "shop"+i;
					var ProductList = shopList[i];
//					console.log("ProductList : "+JSON.stringify(ProductList));
					perShopAmmount = 0;
					for(var j in ProductList)
					{
//						console.log("ProductList for loop");
						var productname = ProductList[j].productname;
						var quantity = ProductList[j].quantity;
						var productprice = ProductList[j].productprice;
						var total = ProductList[j].total;
						
						perShopAmmount = perShopAmmount + total;
						
						var productimg = ProductList[j].productimg;

						companyName = ProductList[j].companyName;
						email = ProductList[j].email;
						shopPhone = ProductList[j].shopPhone;
						shopkeeperName = ProductList[j].shopkeeperName;
						
						if(ProductList[j].address1 != "")
						{
							shopAddress = ProductList[j].address1;
						}
						else
						{
							shopAddress = ProductList[j].address2;
						}
						
//						console.log("productname : "+productname+" quantity : "+quantity+" productprice : "+productprice+" : "+"total : "+total+" : "+"productname : "+productname+" : "+"productimg : "+productimg+" ");
						productList = productList + "<tr>" + '<td class="cimg"><img class="cartimgsize" id="" src="' + productimg + '"></td>' + '<td class="cname">' + productname + "</td>" + '<td class="cqty">' + quantity + "</td>" + '<td class="cprice">' + productprice + "</td>" + '<td class="cprice">' + total + "</td>" + "</tr>";
						
						productList1 = productList1 + '<tr style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;page-break-inside: avoid;">'+
						'                        <td class="cimg" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;width: 5%;line-height: 1.42857143;vertical-align: top;border-top: 1px solid #ddd;background-color: #fff!important;"><img style="width: 20px; height: 20px;" id="" src="'+productimg+'"></td>'+
						'                        <td class="cname" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;width: 50%;text-align: left;line-height: 1.42857143;vertical-align: top;border-top: 1px solid #ddd;background-color: #fff!important;">'+productname+'</td>'+
						'                        <td class="cqty" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;line-height: 1.42857143;vertical-align: top;border-top: 1px solid #ddd;background-color: #fff!important;">'+quantity+'</td>'+
						'                        <td class="cprice" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;padding: 8px;line-height: 1.42857143;vertical-align: top;border-top: 1px solid #ddd;background-color: #fff!important;">'+productprice+'</td>'+
						'						 </tr>';
					}
					
					if(action == "accepted")
					{
						localStorage.setItem("acceptcheck", "1");
						var table = '<tr style="background-color: #E9E9E9;"><td colspan = "5">' + '<table style="width: 100%">' + '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 19px;">' + name + "</td></tr>" + '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 14px;">' + address + ". Mob : "+phone+"</td></tr>" + "</table>" + "</td></tr>" + productList1 + '<tr><td colspan = "5" style="background-color: #2D97D9;"></td></tr>';
						template = template + table;
						table = "";
						
						OrderNotifyToCustomerTemplet(template, companyName, "", perShopAmmount, orderid, email, shopPhone, shopkeeperName, name);
						template = "";
					}
					else
					{
						viewTemplate = viewTemplate + '<tr style="background-color: #E9E9E9;"><td colspan = "5">' + '<table style="width: 100%">' + '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 19px;">' + companyName + "</td></tr>" + '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 14px;">' + shopAddress + "</td></tr>" + "</table>" + "</td></tr>" + productList + '<tr><td colspan = "5" style="background-color: #2D97D9;"></td></tr>'
						productList = "";
					}
					
		    	}
		    	if(action == "view")
				{
		    		localStorage.setItem("acceptcheck", "0");
			    	$("#viewOrderToConform").show();
			    	$("#appendOrderToVarify").empty();
					$("#appendOrderToVarify").append(viewTemplate);
					$(".adminoverlay").hide();
				}
	}
	catch(e)
	{
		console.log("displayOrder(row) Exception : "+e);
	}
	
//
//$("#purchaseDetails").show();
//$("#appendOrder").append('<tr style="background-color: #E9E9E9;"><td colspan = "5">' + '<table style="width: 100%">' + '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 19px;">' + shopname + "</td></tr>" + '<tr><td style="text-align: center; color: rgb(2, 86, 2); font-size: 14px;">' + add + "</td></tr>" + "</table>" + "</td></tr>" + productList + '<tr><td colspan = "5" style="background-color: #2D97D9;"></td></tr>');
//purchasearray = [];
//productList = "";
//
//$("#grandtotal").empty();
//$("#grandtotal").append("Total Ammount :  Rs." + GrandTotal);

}

function acceptOrder(row)
{
	$(".adminoverlay").show();
	var userData = getGridDetails(row);
	console.log("orderid : "+userData);
	objhandleRequest.acceptCancleOrder("WIP", userData);
	$("#viewOrderToConform").hide();
	displayOrder(row, "accepted");
}

function cancelOrder(row)
{
	localStorage.setItem("acceptcheck", "0");
	$(".adminoverlay").show();
	var userData = getGridDetails(row);
	console.log("orderid : "+userData);
	objhandleRequest.acceptCancleOrder("Cancled", userData);
	$("#viewOrderToConform").hide();
}

function deleteOrder(row)
{
	localStorage.setItem("acceptcheck", "0");
	$(".adminoverlay").show();
	var userData = getGridDetails(row);
	console.log("orderid : "+userData);
	objhandleRequest.acceptCancleOrder("deleted", userData);
	$("#viewOrderToConform").hide();
}

function getGridDetails(row)
{
	editrow = row;
    var dataRecord = $("#admingrid").jqxGrid('getrowdata', editrow);
    var orderid = dataRecord.orderid;
    var userid = dataRecord.userid;
    var userData = orderid+"#"+userid;
    return userData;
}

function setOrdersStatus(response)
{
	var status = response.status;
	var statusdesc = response.statusdesc;
	if(status != 3)
	{
		jqueryconform("Message", statusdesc);
	}
	else if(status == 3)
	{
//		$("#loadpage").load("adminControl.jsp");
		var acceptcheck = localStorage.getItem("acceptcheck");
		if(acceptcheck == "1" || acceptcheck == 1)
		{
			shopcount = +shopcount - 1;
			
			console.log("setOrdersStatus(response) --> shopcount : "+shopcount);
			if(shopcount == "0" || shopcount == 0)
			{
				objhandleRequest.getAllOrders();
			}
		}
		else
		{
			objhandleRequest.getAllOrders();
		}
		
//		jqueryconform("Message", statusdesc);
	}
}

function OrderNotifyToCustomerTemplet(template, shopName, shopAddress, total, orderid, email, shopPhone, shopkeeperName, name)
{
	
	var customerName = name;
	var customerAddress = shopAddress;
	var shopkeperEmailid = email;
	var userType = "";
	var phone = shopPhone;
	var name = shopkeeperName;
	
	
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
	'				<p class="font" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;orphans: 3;widows: 3;margin: 0 0 10px;color: #FFF;">Hi <b style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;font-weight: 700;">'+name+'</b>,<br style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;"><br style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">'+
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
	
//	console.log("purchaseTemplet : "+purchaseTemplet);
	objhandleRequest.emailOrderDetails(purchaseTemplet, shopkeperEmailid, userType, ""+total, shopPhone, customerName, orderid);

}
