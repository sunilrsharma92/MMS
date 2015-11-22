
$(document).ready(function(){
	
try
{
	var imagerenderer = function(row, datafield, value)
	{
		return '<div style="text-align: center; margin-top: 3px;"><img src="Images/View.gif" style="cursor:pointer; height:20px; width:20px;" onclick="displayOrder(' + row + ')"/></div>';
	};
	var imageAccept = function(row, datafield, value)
	{
		return '<div style="text-align: center; margin-top: 3px;"><img src="Images/tick.png" style="cursor:pointer; height:20px; width:20px;" onclick="displayOrder(' + row + ')"/></div>';
	};
	var imageReject = function(row, datafield, value)
	{
		return '<div style="text-align: center; margin-top: 3px;"><img src="Images/cross.png" style="cursor:pointer; height:20px; width:20px;" onclick="displayOrder(' + row + ')"/></div>';
	};
	var imageRejectDelete = function(row, datafield, value)
	{
		return '<div style="text-align: center; margin-top: 3px;"><img src="Images/delete.png" style="cursor:pointer; height:20px; width:20px;" onclick="displayOrder(' + row + ')"/></div>';
	};
//	try
//	{
//		var data = [{
//				userid : "1",
//				orderid : "FHEYSH52",
//				datetime : "2015/11/21 12:38:30",
//				date : "2015/11/21",
//				time : "12:38:30",
//				shopid : "5",
//				companyname : "Grocary Mart",
//				name : "Devendra R. Barai",
//				phone : "8976335768",
//				address1 : "Room No: 7, Ramabhilakh yadav chawl, Farid nagar, Bhandup west, Mumbai 400078.",
//				city : "Mumbai",
//				state : "Maharashtra",
//				street : "Bhandup",
//				pincode : "400078",
//				country : "India",
//				img : ""
//				}];
//		
////		var data = response.Order;
////		var orderarray = [];
////		for ( var i in data)
////		{
////			var userid = data[i].userid;
////			var orderid = data[i].orderid;
////			var datetime = data[i].datetime;
////			var shopid = data[i].shopid;
////			var shopname = data[i].companyname;
////			var name = data[i].name;
////			var phone = data[i].phone;
////			var address1 = data[i].address1;
////			var city = data[i].city;
////			var state = data[i].state;
////			var street = data[i].street;
////			var pincode = data[i].pincode;
////			var country = data[i].country;
////			var img = data[i].img;
////			
//////			var date1 = datetime.substr(0, 10);
//////			var date = date1.split("-").reverse().join("/");
//////			
//////			var time = datetime.substr(10, 19);
////			
////			orderarray.push(
////			{
////				userid : userid,
////				orderid : orderid,
////				datetime : "",
////				date : "",
////				time : "",
////				shopid : shopid,
////				shopname : shopname,
////				name : name,
////				phone : phone,
////				address1 : address1,
////				city : city,
////				state : state,
////				street : street,
////				pincode : pincode,
////				country : country,
////				img : img
////			});
////		}
//	}
//	catch (e)
//	{
//		console.log("Blank Response"+e);
//	}
	data = [];
	var source =
	{
	localdata : data,
	datatype : "JSON",
	datafields : [
	{name : "datetime", type : "string"},
	{name : "date", type : "string"},
	{name : "time", type : "string"},
	{name : "orderid", type : "string"},
	{name : "userid", type : "string"},
	{name : "shopname", type : "string"},
	{name : "name", type : "string"},
	{name : "phone", type : "string"},
	{name : "address1", type : "string"},
	{name : "city", type : "string"},
	{name : "state", type : "string"},
	{name : "street", type : "string"},
	{name : "pincode", type : "string"}]
	
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
	}, 
	{
			text : "Accept Order",
			menu : false,
			sortable : false,
			filterable : false,
			showfilterrow : false,
			cellsalign : "center",
			width : "10%",
			cellsrenderer : imageAccept
	} ,
	{
		text : "Cancel Order",
		menu : false,
		sortable : false,
		filterable : false,
		showfilterrow : false,
		cellsalign : "center",
		width : "10%",
		cellsrenderer : imageReject
	}]
	});
}
catch (e)
{
	console.log("customerProfile.js --> Exception : " + e);
}
	
});