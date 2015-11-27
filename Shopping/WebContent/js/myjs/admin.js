
var objhandleRequest = new handleRequest();

$(document).ready(function(){
	
	objhandleRequest.getAllOrders();
	
});

function getOrders(response)
{
try
{
//	console.log("admin.js  getOrders(response)  : "+JSON.stringify(response));
	var viewOrder = function(row, datafield, value)
	{
		return '<div style="text-align: center; margin-top: 3px;" onclick="displayOrder(' + row + ')"><img src="Images/View.gif" style="cursor:pointer; height:20px; width:20px;"/></div>';
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
         else if(status == "Cancle")// Cancle order
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
         else if(status == "Cancle")// Cancle order
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
	try
	{
		/*var data = [{
				userid : "1",
				orderid : "FHEYSH52",
				datetime : "2015/11/21 12:38:30",
				date : "2015/11/21",
				time : "12:38:30",
				shopid : "5",
				companyname : "Grocary Mart",
				name : "Devendra R. Barai",
				phone : "8976335768",
				address1 : "Room No: 7, Ramabhilakh yadav chawl, Farid nagar, Bhandup west, Mumbai 400078.",
				city : "Mumbai",
				state : "Maharashtra",
				street : "Bhandup",
				pincode : "400078",
				country : "India",
				img : ""
				}];*/
		
		var data = response.Order;
		var orderarray = [];
		for ( var i in data)
		{
			var userid = data[i].userid;
			var orderid = data[i].orderid;
			var datetime = data[i].datetime;
			var shopList = data[i].shopListByOrderId;
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
			
//			console.log("datetime : "+datetime);
			var date1 = datetime.substr(0, 10);
//			console.log("date1 : "+date1);
			var date = date1.split("-").reverse().join("/");
//			console.log("date : "+date);
			var time = datetime.substr(10, 19);
//			console.log("time : "+time);
			
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
				status : status
			});
		}
	}
	catch (e)
	{
		console.log("Blank Response"+e);
	}
//	data = [];
	var source =
	{
	localdata : orderarray,
	datatype : "JSON",
	datafields : [
	{name : "datetime", type : "string"},
	{name : "date", type : "string"},
	{name : "time", type : "string"},
	{name : "orderid", type : "string"},
	{name : "userid", type : "string"},
	{name : "shopList", type : "string"},
//	{name : "shopname", type : "string"},
	{name : "name", type : "string"},
	{name : "phone", type : "string"},
	{name : "address1", type : "string"},
	{name : "city", type : "string"},
	{name : "state", type : "string"},
	{name : "street", type : "string"},
	{name : "pincode", type : "string"},
	{name : "status", type : "string"}]
	
	};
	$("#admingrid").jqxGrid(
	{
	width : "95%",
	filterable : true,
	source : source,
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
			width : "11%",
			cellsalign : "left",
			cellsformat : "d"
	},
	{
			text : "Purchase Time",
			datafield : "time",
			width : "11%",
			cellsalign : "left",
			cellsformat : "d"
	},
	{
			text : "Customer Name",
			datafield : "name",
			width : "20%",
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
	console.log("customerProfile.js --> Exception : " + e);
}
	
}

function callPage(page)
{
	$("#loadpage").load("adminControl.jsp");
}

function displayOrder(row)
{
	editrow = row;
    var dataRecord = $("#admingrid").jqxGrid('getrowdata', editrow);
    var shopList = dataRecord.shopList;
	console.log("shopList : "+JSON.stringify(shopList));
}

function acceptOrder(row)
{
	var orderid = getGridDetails(row);
	console.log("orderid : "+orderid);
}

function cancelOrder(row)
{
	var orderid = getGridDetails(row);
	console.log("orderid : "+orderid);
}

function deleteOrder(row)
{
	var orderid = getGridDetails(row);
	console.log("orderid : "+orderid);
}

function getGridDetails(row)
{
	editrow = row;
    var dataRecord = $("#admingrid").jqxGrid('getrowdata', editrow);
    var orderid = dataRecord.orderid;
    
    return orderid;
}


